/**
 * Contenido de la propuesta de home.
 * Texto de muestra: sustituible por Sanity sin tocar los componentes.
 *
 * Nota tipográfica: los campos marcados como "rótulo" se pintan con
 * Headline News, que no incluye acentos ni Ñ. Escribirlos sin diacríticos.
 */

export const marca = {
	nombre: 'Producciones Arlequín',
	ciudad: 'Celaya, Guanajuato, México',
	correo: 'arlequinerias@gmail.com',
	telefono: '+52 55 1234 5678',
	fundacion: 2020,
	redes: {
		facebook: null as string | null,
		instagram: null as string | null,
	},
};

export const heroe = {
	titular: {
		linea: 'EL AMOR POR LA ESCENA',
		remate: 'NOS MUEVE',
	},
	entrada:
		'Somos una productora escénica que monta historias con oficio y riesgo. Dramaturgia contemporánea, clásicos revisitados y giras por todo el país.',
	acciones: [
		{ etiqueta: 'VER OBRAS', href: '#obras', principal: true },
		{ etiqueta: 'HABLEMOS', href: '#contacto', principal: false },
	],
	funcion: {
		rotulo: 'EN CARTELERA',
		obra: 'La casa de los espejos rotos',
		autor: 'Dramaturgia de Elena Vargas',
		lugar: 'Foro Escena Viva',
		horario: 'Jue a Dom, 20:00 h',
		cta: 'VER FUNCIONES',
		ctaHref: '#obras',
	},
	/* Segundo cuadro de la vitrina: aparece cuando la luz vuelve a prender */
	sello: {
		slogan: 'El amor por la escena nos mueve.',
	},
};

export const cintillo = [
	'DRAMATURGIA',
	'PUESTA EN ESCENA',
	'GIRAS',
	'TEATRO FAMILIAR',
	'PASTORELAS',
	'FESTIVALES',
];

export const sobreNosotros = {
	titular: 'DESDE EL 2020 LEVANTANDO EL TELON.',
	parrafo:
		'Producciones Arlequín es una productora escénica que tiene como objetivos principales la gestión, creación, extensión y promoción de espectáculos escénicos de calidad y proyectos de profesionalización escénica para así ser agentes de cambio social por y para la comunidad, buscando generar una Cultura de Paz.',
	cta: {
		etiqueta: 'MAS SOBRE NOSOTROS',
		href: '/sobre-nosotros',
	},
	fotos: [
		{
			src: '/fotos/sobre/01.jpg',
			alt: 'Escenario iluminado antes de una función',
			pie: 'Antes de la función',
		},
		{
			src: '/fotos/sobre/02.jpg',
			alt: 'Actriz ensayando bajo el foco',
			pie: 'Ensayo general',
		},
		{
			src: '/fotos/sobre/03.jpg',
			alt: 'Público en la platea del teatro',
			pie: 'La platea',
		},
		{
			src: '/fotos/sobre/04.jpg',
			alt: 'Músicos en el foso durante un montaje',
			pie: 'En el foso',
		},
	],
};

/* Teaser de home: la ficha completa de cada obra vivirá en /obras. */
export interface FotoCollage {
	src: string;
	alt: string;
	titulo: string;
	href: string;
	rotacion?: number;
	escala?: number;
	desfase?: string;
	ancho?: string;
}

export const obrasInicio = {
	titular: 'HISTORIAS QUE MONTAMOS.',
	parrafo:
		'Montajes propios, giras y reestrenos. Un vistazo al repertorio que llevamos a escena.',
	cta: {
		etiqueta: 'VER TODAS LAS OBRAS',
		href: '/obras',
	},
	fotos: [
		{
			src: '/fotos/obras/01.jpg',
			alt: 'Intérprete bajo el foco durante un montaje',
			titulo: 'La casa de los espejos rotos',
			href: '/obras/la-casa-de-los-espejos-rotos',
			rotacion: -5,
			escala: 1.05,
			desfase: '1.5rem',
			ancho: '14rem',
		},
		{
			src: '/fotos/obras/02.jpg',
			alt: 'Público en la platea antes de una función',
			titulo: 'Obra 02',
			href: '/obras/obra-02',
			rotacion: 4,
			escala: 0.95,
			desfase: '-0.75rem',
			ancho: '12rem',
		},
		{
			src: '/fotos/obras/03.jpg',
			alt: 'Escena musical de un montaje en vivo',
			titulo: 'Obra 03',
			href: '/obras/obra-03',
			rotacion: -3,
			escala: 1.1,
			desfase: '0.5rem',
			ancho: '15rem',
		},
		{
			src: '/fotos/obras/01.jpg',
			alt: 'Intérprete bajo el foco durante un montaje',
			titulo: 'La casa de los espejos rotos',
			href: '/obras/la-casa-de-los-espejos-rotos',
			rotacion: 6,
			escala: 1,
			desfase: '-1rem',
			ancho: '13rem',
		},
		{
			src: '/fotos/obras/02.jpg',
			alt: 'Público en la platea antes de una función',
			titulo: 'Obra 02',
			href: '/obras/obra-02',
			rotacion: -7,
			escala: 1.08,
			desfase: '1.25rem',
			ancho: '14.5rem',
		},
		{
			src: '/fotos/obras/03.jpg',
			alt: 'Escena musical de un montaje en vivo',
			titulo: 'Obra 03',
			href: '/obras/obra-03',
			rotacion: 3,
			escala: 0.92,
			desfase: '0',
			ancho: '12.5rem',
		},
		{
			src: '/fotos/obras/01.jpg',
			alt: 'Intérprete bajo el foco durante un montaje',
			titulo: 'La casa de los espejos rotos',
			href: '/obras/la-casa-de-los-espejos-rotos',
			rotacion: -4,
			escala: 1.02,
			desfase: '-0.5rem',
			ancho: '13.5rem',
		},
		{
			src: '/fotos/obras/02.jpg',
			alt: 'Público en la platea antes de una función',
			titulo: 'Obra 02',
			href: '/obras/obra-02',
			rotacion: 5,
			escala: 1.06,
			desfase: '0.85rem',
			ancho: '14rem',
		},
	] satisfies FotoCollage[],
};

export interface Nota {
	cita: string;
	medio: string;
	autor: string;
	fecha: string;
}

export const prensa: Nota[] = [
	{
		cita: 'Arlequín no busca agradar: busca dejar una marca. Salí del foro con la sensación de haber presenciado algo que no volverá a repetirse igual.',
		medio: 'La Jornada',
		autor: 'Reseña de Marcela Ibáñez',
		fecha: 'Marzo 2026',
	},
	{
		cita: 'La compañía más consistente del circuito independiente mexicano. Su trabajo de dirección de actores es, sencillamente, ejemplar.',
		medio: 'Revista Proscenio',
		autor: 'Crítica de Daniel Ochoa',
		fecha: 'Noviembre 2025',
	},
	{
		cita: 'Diecisiete años después, siguen produciendo con el hambre de quien acaba de empezar.',
		medio: 'El Universal / Cultura',
		autor: 'Entrevista con la compañía',
		fecha: 'Agosto 2025',
	},
];

/* Sustituir estos placeholders por los archivos y nombres de aliados reales. */
export const respaldos = {
	titular: 'NOS RESPALDAN',
	logos: [
		{ marca: 'LOGO 01', nombre: 'Institución aliada 1' },
		{ marca: 'LOGO 02', nombre: 'Institución aliada 2' },
		{ marca: 'LOGO 03', nombre: 'Institución aliada 3' },
		{ marca: 'LOGO 04', nombre: 'Institución aliada 4' },
		{ marca: 'LOGO 05', nombre: 'Institución aliada 5' },
		{ marca: 'LOGO 06', nombre: 'Institución aliada 6' },
	],
};

export const contacto = {
	titular: 'CONTACTO',
	/* Headline News: sin diacríticos. `acento` pinta la palabra en rojo. */
	parrafos: [
		[
			{ texto: 'QUIERES LLEVAR UNA DE NUESTRAS ' },
			{ texto: 'OBRAS', acento: true },
			{ texto: ' A TU ' },
			{ texto: 'ESPACIO', acento: true },
			{ texto: '?' },
		],
		[
			{ texto: 'BUSCAS UN ' },
			{ texto: 'TALLER', acento: true },
			{ texto: ', UNA ' },
			{ texto: 'CONFERENCIA', acento: true },
			{ texto: ' O UNA ' },
			{ texto: 'EXPERIENCIA CULTURAL', acento: true },
			{ texto: ' A LA MEDIDA?' },
		],
		[
			{ texto: 'ESCRIBENOS', acento: true },
			{ texto: ' PARA AGENDAR UNA ' },
			{ texto: 'REUNION VIRTUAL', acento: true },
			{ texto: ' O SOLICITAR UNA ' },
			{ texto: 'PROPUESTA PERSONALIZADA', acento: true },
			{ texto: '!' },
		],
		[
			{ texto: 'CREEMOS JUNTOS ' },
			{ texto: 'ARTE CON PROPOSITO', acento: true },
			{ texto: '!' },
		],
	],
	vias: [
		{
			rotulo: 'CORREO',
			valor: 'hola@produccionesarlequin.mx',
			href: 'mailto:hola@produccionesarlequin.mx',
		},
		{
			rotulo: 'TELEFONO',
			valor: '+52 55 1234 5678',
			href: 'tel:+525512345678',
		},
		{
			rotulo: 'UBICACION',
			valor: 'Celaya, Guanajuato, México',
			href: null,
		},
	],
};
