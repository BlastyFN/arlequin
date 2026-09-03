import {
	cintillo as cintilloLocal,
	contacto as contactoLocal,
	heroe as heroeLocal,
	marca as marcaLocal,
	obrasInicio as obrasInicioLocal,
	prensa as prensaLocal,
	respaldos as respaldosLocal,
	sobreNosotros as sobreLocal,
} from '../data/home';
import {
	fichaMuestra,
	obras as obrasLocal,
	paginaObras as paginaObrasLocal,
	type ImagenObra,
	type Obra,
} from '../data/obras';
import {notas as notasLocal, paginaPrensa as paginaPrensaLocal} from '../data/prensa';
import {paginaServicios as serviciosLocal} from '../data/servicios';
import {paginaSobre as sobrePaginaLocal} from '../data/sobre';
import {toImagen} from './images';
import {
	aboutPageQuery,
	homePageQuery,
	notasQuery,
	obraBySlugQuery,
	obrasPageQuery,
	obrasQuery,
	pressPageQuery,
	servicesPageQuery,
	settingsQuery,
} from './queries';
import {sanityFetch} from './sanity';

type Linea = {texto: string; acento?: boolean}[];

function tel(numero: string) {
	return `tel:${numero.replace(/[^\d+]/g, '')}`;
}

function conFichaLocal(obra: Obra): Obra {
	return {
		...obra,
		ficha: {
			volver: fichaMuestra.volver,
			dossier: fichaMuestra.dossier,
			simbolos: fichaMuestra.simbolos,
			video: fichaMuestra.video,
			fotos: fichaMuestra.fotos,
		},
	};
}

function simbolosDe(doc: {
	publico?: string;
	tematica?: string;
	duracion?: string;
	genero?: string;
}): NonNullable<Obra['ficha']>['simbolos'] {
	const base = fichaMuestra.simbolos;
	return base.map((item) => {
		const valor =
			item.clave === 'publico'
				? doc.publico
				: item.clave === 'tematica'
					? doc.tematica
					: item.clave === 'duracion'
						? doc.duracion
						: doc.genero;
		return {...item, valor: valor || item.valor};
	});
}

function mapObra(doc: Record<string, unknown> | null): Obra | null {
	if (!doc?.slug || !doc.titulo || !doc.tituloCompleto) return null;

	const cartel = toImagen(doc.cartel as never) ?? {
		src: '',
		alt: String(doc.tituloCompleto),
		ancho: 1024,
		alto: 576,
	};
	const fondo = (toImagen(doc.fondo as never) ?? cartel) as ImagenObra;
	const fotos = Array.isArray(doc.fotos)
		? (doc.fotos as never[]).map((foto) => toImagen(foto)).filter(Boolean)
		: [];
	const dossier = doc.dossier as {asset?: {url?: string; originalFilename?: string}} | undefined;
	const poster = toImagen(doc.videoPoster as never);
	const videoUrl = typeof doc.videoUrl === 'string' ? doc.videoUrl : null;

	return {
		slug: String(doc.slug),
		titulo: String(doc.titulo),
		tituloCompleto: String(doc.tituloCompleto),
		subtitulo: doc.subtitulo ? String(doc.subtitulo) : undefined,
		etiquetas: Array.isArray(doc.etiquetas) ? (doc.etiquetas as string[]) : [],
		festivales: Array.isArray(doc.festivales) ? (doc.festivales as string[]) : [],
		sinopsis: Array.isArray(doc.sinopsis) ? (doc.sinopsis as string[]) : [],
		cartel: {src: cartel.src, ancho: cartel.ancho, alto: cartel.alto},
		fondo: {
			src: fondo.src,
			alt: fondo.alt || String(doc.tituloCompleto),
			ancho: fondo.ancho,
			alto: fondo.alto,
			foco: fondo.foco,
		},
		ficha: {
			volver: fichaMuestra.volver,
			dossier: dossier?.asset?.url
				? {
						etiqueta: fichaMuestra.dossier.etiqueta,
						href: dossier.asset.url,
						archivo: dossier.asset.originalFilename ?? 'dossier.pdf',
					}
				: null,
			simbolos: simbolosDe(doc as never),
			video:
				videoUrl && poster
					? {
							rotulo: fichaMuestra.video.rotulo,
							titulo: doc.videoTitulo ? String(doc.videoTitulo) : fichaMuestra.video.titulo,
							poster,
							src: videoUrl,
						}
					: videoUrl
						? {
								...fichaMuestra.video,
								titulo: doc.videoTitulo ? String(doc.videoTitulo) : fichaMuestra.video.titulo,
								src: videoUrl,
							}
						: null,
			fotos: fotos as ImagenObra[],
		},
	};
}

export async function getMarca() {
	const doc = await sanityFetch<Record<string, unknown>>(settingsQuery);
	if (!doc?.nombre) return marcaLocal;

	return {
		nombre: String(doc.nombre),
		ciudad: String(doc.ciudad ?? marcaLocal.ciudad),
		correo: String(doc.correo ?? marcaLocal.correo),
		telefono: String(doc.telefono ?? marcaLocal.telefono),
		fundacion: Number(doc.fundacion ?? marcaLocal.fundacion),
		redes: {
			facebook: (doc.facebook as string | null) ?? null,
			instagram: (doc.instagram as string | null) ?? null,
		},
	};
}

export async function getContacto() {
	const doc = await sanityFetch<Record<string, unknown>>(settingsQuery);
	const marca = await getMarca();
	if (!doc?.nombre) {
		return {
			...contactoLocal,
			vias: [
				{
					rotulo: 'CORREO',
					valor: marca.correo,
					href: `mailto:${marca.correo}`,
				},
				{
					rotulo: 'TELEFONO',
					valor: marca.telefono,
					href: tel(marca.telefono),
				},
				{
					rotulo: 'UBICACION',
					valor: marca.ciudad,
					href: null as string | null,
				},
			],
		};
	}

	const parrafos = Array.isArray(doc.contactoParrafos)
		? (doc.contactoParrafos as {partes?: Linea}[]).map((linea) => linea.partes ?? [])
		: contactoLocal.parrafos;

	return {
		titular: String(doc.contactoTitular ?? contactoLocal.titular),
		parrafos: parrafos.length ? parrafos : contactoLocal.parrafos,
		vias: [
			{
				rotulo: String(doc.viaCorreoRotulo ?? 'CORREO'),
				valor: marca.correo,
				href: `mailto:${marca.correo}`,
			},
			{
				rotulo: String(doc.viaTelefonoRotulo ?? 'TELEFONO'),
				valor: marca.telefono,
				href: tel(marca.telefono),
			},
			{
				rotulo: String(doc.viaUbicacionRotulo ?? 'UBICACION'),
				valor: marca.ciudad,
				href: null as string | null,
			},
		],
	};
}

export async function getHome() {
	const doc = await sanityFetch<Record<string, unknown>>(homePageQuery);
	if (!doc?.titularLinea) {
		return {
			heroe: heroeLocal,
			cintillo: cintilloLocal,
			sobreNosotros: sobreLocal,
			obrasInicio: obrasInicioLocal,
			prensa: prensaLocal,
			respaldos: respaldosLocal,
		};
	}

	const obraCartel = doc.funcionObra as
		| {tituloCompleto?: string; titulo?: string; slug?: string}
		| null
		| undefined;
	const slugCartel = obraCartel?.slug;
	const tituloCartel =
		(doc.funcionTitulo as string) ||
		obraCartel?.tituloCompleto ||
		heroeLocal.funcion.obra;

	const sobreFotos = Array.isArray(doc.sobreFotos)
		? (doc.sobreFotos as never[])
				.map((foto) => toImagen(foto))
				.filter(Boolean)
				.map((foto) => ({
					src: foto!.src,
					alt: foto!.alt,
					pie: foto!.pie ?? '',
				}))
		: sobreLocal.fotos;

	const layout = obrasInicioLocal.fotos;
	const destacadas = Array.isArray(doc.obrasDestacadas)
		? (doc.obrasDestacadas as {
				tituloCompleto?: string;
				titulo?: string;
				slug?: string;
				fondo?: never;
				cartel?: never;
			}[])
		: [];
	const fotosCollage =
		destacadas.length > 0
			? destacadas.map((obra, i) => {
					const molde = layout[i % layout.length];
					const imagen = toImagen(obra.fondo) ?? toImagen(obra.cartel);
					return {
						...molde,
						src: imagen?.src ?? molde.src,
						alt: imagen?.alt || obra.tituloCompleto || molde.alt,
						titulo: obra.tituloCompleto || obra.titulo || molde.titulo,
						href: obra.slug ? `/obras/${obra.slug}` : molde.href,
					};
				})
			: obrasInicioLocal.fotos;

	const logos = Array.isArray(doc.respaldos)
		? (
				doc.respaldos as {
					nombre?: string;
					marca?: string;
					logo?: never;
				}[]
			).map((item) => {
				const logo = toImagen(item.logo, 400);
				return {
					marca: item.marca || item.nombre || '',
					nombre: item.nombre || '',
					src: logo?.src,
				};
			})
		: respaldosLocal.logos;

	return {
		heroe: {
			titular: {
				linea: String(doc.titularLinea),
				remate: String(doc.titularRemate ?? ''),
			},
			entrada: String(doc.entrada ?? heroeLocal.entrada),
			acciones: [
				{
					etiqueta: String(doc.accionPrincipal ?? heroeLocal.acciones[0].etiqueta),
					href: '#obras',
					principal: true,
				},
				{
					etiqueta: String(doc.accionSecundaria ?? heroeLocal.acciones[1].etiqueta),
					href: '#contacto',
					principal: false,
				},
			],
			funcion: {
				rotulo: String(doc.funcionRotulo ?? heroeLocal.funcion.rotulo),
				obra: tituloCartel,
				autor: String(doc.funcionAutor ?? heroeLocal.funcion.autor),
				lugar: String(doc.funcionLugar ?? heroeLocal.funcion.lugar),
				horario: String(doc.funcionHorario ?? heroeLocal.funcion.horario),
				cta: String(doc.funcionCta ?? heroeLocal.funcion.cta),
				ctaHref: slugCartel ? `/obras/${slugCartel}` : heroeLocal.funcion.ctaHref,
			},
			sello: {
				slogan: String(doc.sello ?? heroeLocal.sello.slogan),
			},
		},
		cintillo: Array.isArray(doc.cintillo) && doc.cintillo.length
			? (doc.cintillo as string[])
			: cintilloLocal,
		sobreNosotros: {
			titular: String(doc.sobreTitular ?? sobreLocal.titular),
			parrafo: String(doc.sobreParrafo ?? sobreLocal.parrafo),
			cta: {
				etiqueta: String(doc.sobreCta ?? sobreLocal.cta.etiqueta),
				href: '/sobre-nosotros',
			},
			fotos: sobreFotos.length ? sobreFotos : sobreLocal.fotos,
		},
		obrasInicio: {
			titular: String(doc.obrasTitular ?? obrasInicioLocal.titular),
			parrafo: String(doc.obrasParrafo ?? obrasInicioLocal.parrafo),
			cta: {
				etiqueta: String(doc.obrasCta ?? obrasInicioLocal.cta.etiqueta),
				href: '/obras',
			},
			fotos: fotosCollage,
		},
		prensa:
			Array.isArray(doc.testimonios) && doc.testimonios.length
				? (doc.testimonios as typeof prensaLocal)
				: prensaLocal,
		respaldos: {
			titular: String(doc.respaldosTitular ?? respaldosLocal.titular),
			logos,
		},
	};
}

export async function getObras(): Promise<Obra[]> {
	const docs = await sanityFetch<Record<string, unknown>[]>(obrasQuery);
	if (!docs?.length) return obrasLocal.map(conFichaLocal);
	return docs.map(mapObra).filter(Boolean) as Obra[];
}

export async function getObra(slug: string): Promise<Obra | null> {
	const doc = await sanityFetch<Record<string, unknown>>(obraBySlugQuery, {slug});
	if (doc) return mapObra(doc);
	const local = obrasLocal.find((obra) => obra.slug === slug);
	return local ? conFichaLocal(local) : null;
}

export async function getPaginaObras() {
	const doc = await sanityFetch<Record<string, unknown>>(obrasPageQuery);
	if (!doc?.portadaTitular && !doc?.portadaFoto) return paginaObrasLocal;

	const foto = toImagen(doc.portadaFoto as never);
	const lineas = Array.isArray(doc.cierreLineas)
		? (doc.cierreLineas as {partes?: Linea}[]).map((linea) => linea.partes ?? [])
		: paginaObrasLocal.cierre.lineas;

	return {
		...paginaObrasLocal,
		portada: {
			titular: String(doc.portadaTitular ?? paginaObrasLocal.portada.titular),
			foto: foto
				? {src: foto.src, alt: foto.alt, ancho: foto.ancho, alto: foto.alto}
				: paginaObrasLocal.portada.foto,
		},
		cierre: {
			...paginaObrasLocal.cierre,
			rotulo: String(doc.cierreRotulo ?? paginaObrasLocal.cierre.rotulo),
			lineas: lineas.length ? lineas : paginaObrasLocal.cierre.lineas,
			acciones: {
				principal: {
					...paginaObrasLocal.cierre.acciones.principal,
					etiqueta: String(doc.cierreCta ?? paginaObrasLocal.cierre.acciones.principal.etiqueta),
				},
			},
		},
	};
}

export async function getNotas() {
	const docs = await sanityFetch<Record<string, unknown>[]>(notasQuery);
	if (!docs?.length) return notasLocal;

	return docs.map((doc) => {
		const imagen = toImagen(doc.imagen as never);
		return {
			medio: String(doc.medio ?? ''),
			fecha: String(doc.fecha ?? ''),
			fechaISO: String(doc.fechaISO ?? ''),
			titulo: String(doc.titulo ?? ''),
			tituloCompleto: String(doc.tituloCompleto ?? ''),
			entrada: String(doc.entrada ?? ''),
			etiqueta: String(doc.etiqueta ?? ''),
			href: String(doc.href ?? '#'),
			imagen: imagen
				? {src: imagen.src, alt: imagen.alt, ancho: imagen.ancho, alto: imagen.alto}
				: notasLocal[0].imagen,
		};
	});
}

export async function getPaginaPrensa() {
	const doc = await sanityFetch<Record<string, unknown>>(pressPageQuery);
	if (!doc?.titular) return paginaPrensaLocal;

	const lineas = Array.isArray(doc.cierreLineas)
		? (doc.cierreLineas as {partes?: Linea}[]).map((linea) => linea.partes ?? [])
		: paginaPrensaLocal.cierre.lineas;

	return {
		...paginaPrensaLocal,
		cabecera: {titular: String(doc.titular)},
		medios: {
			rotulo: String(doc.mediosRotulo ?? paginaPrensaLocal.medios.rotulo),
			texto: String(doc.mediosTexto ?? paginaPrensaLocal.medios.texto),
			etiqueta: String(doc.mediosEtiqueta ?? paginaPrensaLocal.medios.etiqueta),
		},
		cierre: {
			...paginaPrensaLocal.cierre,
			rotulo: String(doc.cierreRotulo ?? paginaPrensaLocal.cierre.rotulo),
			lineas: lineas.length ? lineas : paginaPrensaLocal.cierre.lineas,
			acciones: {
				principal: {
					...paginaPrensaLocal.cierre.acciones.principal,
					etiqueta: String(doc.cierreCta ?? paginaPrensaLocal.cierre.acciones.principal.etiqueta),
				},
				secundaria: {
					...paginaPrensaLocal.cierre.acciones.secundaria,
					etiqueta: String(
						doc.cierreCtaSecundaria ?? paginaPrensaLocal.cierre.acciones.secundaria.etiqueta,
					),
				},
			},
		},
	};
}

export async function getPaginaServicios() {
	const doc = await sanityFetch<Record<string, unknown>>(servicesPageQuery);
	if (!doc?.portadaTitular) return serviciosLocal;

	const portadaFoto = toImagen(doc.portadaFoto as never);
	const pastorelaFoto = toImagen(doc.pastorelaFoto as never);
	const cierreLineas = Array.isArray(doc.cierreLineas)
		? (doc.cierreLineas as {partes?: Linea}[]).map((linea) => linea.partes ?? [])
		: serviciosLocal.cierre.lineas;

	return {
		portada: {
			rotulo: String(doc.portadaRotulo ?? serviciosLocal.portada.rotulo),
			titular: String(doc.portadaTitular),
			entrada: String(doc.portadaEntrada ?? serviciosLocal.portada.entrada),
			credito: String(doc.portadaCredito ?? serviciosLocal.portada.credito),
			foto: portadaFoto
				? {
						src: portadaFoto.src,
						alt: portadaFoto.alt,
						ancho: portadaFoto.ancho,
						alto: portadaFoto.alto,
					}
				: serviciosLocal.portada.foto,
		},
		oficios: {
			rotulo: String(doc.oficiosRotulo ?? serviciosLocal.oficios.rotulo),
			titular: {
				lineas: Array.isArray(doc.oficiosTitularLineas)
					? (doc.oficiosTitularLineas as string[])
					: serviciosLocal.oficios.titular.lineas,
				remate: String(doc.oficiosTitularRemate ?? serviciosLocal.oficios.titular.remate),
			},
			lista: Array.isArray(doc.oficios) && doc.oficios.length
				? (doc.oficios as {titulo: string; texto: string}[])
				: serviciosLocal.oficios.lista,
		},
		pastorela: {
			...serviciosLocal.pastorela,
			rotulo: String(doc.pastorelaRotulo ?? serviciosLocal.pastorela.rotulo),
			titulo: String(doc.pastorelaTitulo ?? serviciosLocal.pastorela.titulo),
			subtitulo: String(doc.pastorelaSubtitulo ?? serviciosLocal.pastorela.subtitulo),
			entrada: String(doc.pastorelaEntrada ?? serviciosLocal.pastorela.entrada),
			parrafos: Array.isArray(doc.pastorelaParrafos) && doc.pastorelaParrafos.length
				? (doc.pastorelaParrafos as string[])
				: serviciosLocal.pastorela.parrafos,
			foto: pastorelaFoto
				? {
						...serviciosLocal.pastorela.foto,
						src: pastorelaFoto.src,
						alt: pastorelaFoto.alt || serviciosLocal.pastorela.foto.alt,
						ancho: pastorelaFoto.ancho,
						alto: pastorelaFoto.alto,
						pie: pastorelaFoto.pie ?? serviciosLocal.pastorela.foto.pie,
					}
				: serviciosLocal.pastorela.foto,
			cta: {
				...serviciosLocal.pastorela.cta,
				etiqueta: String(doc.pastorelaCta ?? serviciosLocal.pastorela.cta.etiqueta),
			},
		},
		cierre: {
			...serviciosLocal.cierre,
			rotulo: String(doc.cierreRotulo ?? serviciosLocal.cierre.rotulo),
			lineas: cierreLineas.length ? cierreLineas : serviciosLocal.cierre.lineas,
			acciones: {
				principal: {
					...serviciosLocal.cierre.acciones.principal,
					etiqueta: String(doc.cierreCta ?? serviciosLocal.cierre.acciones.principal.etiqueta),
				},
			},
		},
	};
}

export async function getPaginaSobre() {
	const doc = await sanityFetch<Record<string, unknown>>(aboutPageQuery);
	if (!doc?.titular && !doc?.entrada) return sobrePaginaLocal;

	const foto = toImagen(doc.foto as never);
	const galeria = Array.isArray(doc.galeria)
		? (
				doc.galeria as {titulo?: string; imagen?: never}[]
			)
				.map((item) => {
					const imagen = toImagen(item.imagen);
					if (!imagen) return null;
					return {
						src: imagen.src,
						titulo: item.titulo || '',
						ancho: imagen.ancho,
						alto: imagen.alto,
					};
				})
				.filter(Boolean)
		: sobrePaginaLocal.galeria.fotos;

	return {
		portada: {
			rotulo: String(doc.rotulo ?? sobrePaginaLocal.portada.rotulo),
			titular: String(doc.titular ?? sobrePaginaLocal.portada.titular),
			titularAcento: String(doc.titularAcento ?? sobrePaginaLocal.portada.titularAcento),
			entrada: String(doc.entrada ?? sobrePaginaLocal.portada.entrada),
			credito: String(doc.credito ?? sobrePaginaLocal.portada.credito),
			foto: foto
				? {src: foto.src, alt: foto.alt, ancho: foto.ancho, alto: foto.alto}
				: sobrePaginaLocal.portada.foto,
		},
		origen: {
			rotulo: String(doc.origenRotulo ?? sobrePaginaLocal.origen.rotulo),
			titular: String(doc.origenTitular ?? sobrePaginaLocal.origen.titular),
			parrafos: Array.isArray(doc.origenParrafos) && doc.origenParrafos.length
				? (doc.origenParrafos as string[])
				: sobrePaginaLocal.origen.parrafos,
			trayectoriaRotulo: String(
				doc.trayectoriaRotulo ?? sobrePaginaLocal.origen.trayectoriaRotulo,
			),
			trayectoria:
				Array.isArray(doc.trayectoria) && doc.trayectoria.length
					? (doc.trayectoria as string[])
					: sobrePaginaLocal.origen.trayectoria,
		},
		objetivos: {
			rotulo: String(doc.objetivosRotulo ?? sobrePaginaLocal.objetivos.rotulo),
			titular:
				Array.isArray(doc.objetivosTitular) && doc.objetivosTitular.length
					? (doc.objetivosTitular as string[])
					: sobrePaginaLocal.objetivos.titular,
			titularAcento: String(
				doc.objetivosTitularAcento ?? sobrePaginaLocal.objetivos.titularAcento,
			),
			lista:
				Array.isArray(doc.objetivos) && doc.objetivos.length
					? (doc.objetivos as typeof sobrePaginaLocal.objetivos.lista)
					: sobrePaginaLocal.objetivos.lista,
			cierre: String(doc.objetivosCierre ?? sobrePaginaLocal.objetivos.cierre),
		},
		galeria: {
			rotulo: String(doc.galeriaRotulo ?? sobrePaginaLocal.galeria.rotulo),
			titular: String(doc.galeriaTitular ?? sobrePaginaLocal.galeria.titular),
			fotos: galeria.length ? (galeria as typeof sobrePaginaLocal.galeria.fotos) : sobrePaginaLocal.galeria.fotos,
		},
	};
}
