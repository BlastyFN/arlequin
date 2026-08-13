/**
 * Oficios fuera del repertorio: talleres, conferencias y pastorelas a la medida.
 * Sustituible por Sanity sin tocar los componentes.
 *
 * Nota tipográfica: los campos marcados como "rótulo" se pintan con Headline
 * News, que no incluye acentos ni Ñ. Escribirlos en mayúsculas sin diacríticos.
 * Titulares de apoyo y párrafos van en Questa Slab, así que sí llevan acentos.
 */

const FOTOS = 'https://produccionesarlequin.com/wp-content/uploads';

export const paginaServicios = {
	portada: {
		rotulo: 'OFICIO FUERA DE ESCENA',
		titular: 'SERVICIOS',
		entrada:
			'Talleres, conferencias y espectáculos a la medida. El mismo oficio de la escena, aplicado a equipos de trabajo, artistas en formación y empresas.',
		credito: 'PRODUCCIONES ARLEQUIN · CELAYA, GTO.',
		foto: {
			src: `${FOTOS}/2025/07/Producciones-Arlequin-15-de-19-1024x731.jpg`,
			alt: 'Elenco de Producciones Arlequín en escena durante una función',
			ancho: 1024,
			alto: 731,
		},
	},
	oficios: {
		rotulo: 'TALLERES Y CONFERENCIAS',
		titular: {
			lineas: ['CAPACITAR,', 'FORMAR,'],
			remate: 'PROFESIONALIZAR.',
		},
		lista: [
			{
				titulo: 'CAPACITACIONES',
				texto:
					'Llevamos el oficio de la escena a equipos de trabajo: dinámicas de team building, ejercicios de presencia, escucha y colaboración. El teatro como herramienta para que un grupo se reconozca y trabaje mejor junto.',
			},
			{
				titulo: 'FORMACIONES',
				texto:
					'Talleres de formación artística para quienes quieren acercarse a la actuación, la escena o los oficios del teatro. Espacios prácticos, a veces a la medida, para estimular la creación y la colaboración entre talentos.',
			},
			{
				titulo: 'PROFESIONALIZACION',
				texto:
					'Conferencias y talleres sobre profesionalización artística: cómo sostener una carrera, producir con oficio y transitar el medio con rigor. Pensados para artistas en formación y en las primeras etapas de su desarrollo profesional.',
			},
		],
	},
	pastorela: {
		rotulo: 'TEMPORADA NAVIDENA',
		titulo: 'PASTORELAS',
		subtitulo: 'CORPORATIVAS',
		entrada: 'Personalizadas.',
		parrafos: [
			'Cada diciembre montamos pastorelas de repertorio. Para empresas hacemos otra cosa: un espectáculo navideño escrito a la medida.',
			'Humor, nombres y dinámica interna de la organización, para la posada, el cierre de año o el evento de fin de temporada. Un montaje con el sello de la casa, pensado para su gente.',
		],
		cta: {
			etiqueta: 'SOLICITAR PROPUESTA',
			href: '/#contacto',
		},
	},
	cierre: {
		rotulo: 'CONTACTANOS',
		lineas: [
			[
				{ texto: 'BUSCAS UN ' },
				{ texto: 'TALLER', acento: true },
				{ texto: ', UNA ' },
				{ texto: 'CONFERENCIA', acento: true },
				{ texto: ' O UNA ' },
			],
			[
				{ texto: 'PASTORELA', acento: true },
				{ texto: ' A LA MEDIDA?' },
			],
			[
				{ texto: 'ESCRIBENOS', acento: true },
				{ texto: ' PARA SOLICITAR UNA ' },
				{ texto: 'PROPUESTA PERSONALIZADA', acento: true },
				{ texto: '!' },
			],
		],
		acciones: {
			principal: { etiqueta: 'HABLEMOS', href: '/#contacto' },
		},
	},
};
