/**
 * Notas publicadas en medios, recogidas del sitio vigente.
 * Sustituible por Sanity sin tocar los componentes.
 *
 * Nota tipográfica: `medio`, `fecha`, `etiqueta` y `titulo` se pintan con
 * Headline News, que no incluye acentos ni Ñ. Escribirlos en mayúsculas sin
 * diacríticos. `tituloCompleto` y `entrada` sí llevan acentos.
 */

export interface NotaMedio {
	/* Rótulo: nombre del medio, sin diacríticos */
	medio: string;
	/* Rótulo: fecha abreviada para la plana */
	fecha: string;
	/* Fecha de publicación de la nota original, para el atributo datetime */
	fechaISO: string;
	/* Headline News: mayúsculas sin diacríticos */
	titulo: string;
	/* Versión acentuada para aria-labels y metadatos */
	tituloCompleto: string;
	/* Sumario redactado a partir de la nota original */
	entrada: string;
	/* Rótulo: montaje o festival del que habla la nota */
	etiqueta: string;
	href: string;
	imagen: {
		src: string;
		alt: string;
		ancho: number;
		alto: number;
	};
}

const FOTOS = 'https://produccionesarlequin.com/wp-content/uploads';

/* El orden es el de la plana: la primera nota abre la página. */
export const notas: NotaMedio[] = [
	{
		medio: 'GOBIERNO DE GUANAJUATO',
		fecha: '01 JUL 2024',
		fechaISO: '2024-07-01',
		titulo: 'ATERRIZA EN EL CERVANTES "EL PLANETA BUMARA", OBRA TEATRAL CONTRA LA VIOLENCIA',
		tituloCompleto:
			'Aterriza en el Cervantes “El planeta Bumara”, obra teatral contra la violencia',
		entrada:
			'Función única y gratuita en el Teatro Cervantes dentro de Rutas Escénicas Estatales, el programa con el que el Centro Cultural Helénico y el Instituto Estatal de la Cultura llevan producciones guanajuatenses a nuevos públicos.',
		etiqueta: 'EL PLANETA BUMARA',
		href: 'https://boletines.guanajuato.gob.mx/2024/07/01/aterriza-en-el-cervantes-el-planeta-bumara-obra-teatral-contra-la-violencia/',
		imagen: {
			src: `${FOTOS}/2024/10/IMG_4921-1024x683.jpg`,
			alt: 'Miyoko y Bucoro, los dos personajes de El planeta Bumara, en escena bajo luz azul',
			ancho: 1024,
			alto: 683,
		},
	},
	{
		medio: 'EL SOL DEL BAJIO',
		fecha: '02 JUL 2024',
		fechaISO: '2024-07-02',
		titulo:
			'PRESENTAN OBRA DE TEATRO SOBRE EL BULLYING ORIENTADA A VIVIR EN UNA CULTURA DE PAZ',
		tituloCompleto:
			'Presentan obra de teatro sobre el bullying orientada a vivir en una cultura de paz',
		entrada:
			'El diario anuncia la función del 5 de julio y el ángulo del montaje: hablar del acoso escolar con el público infantil desde la cultura de paz.',
		etiqueta: 'EL PLANETA BUMARA',
		href: 'https://www.elsoldelbajio.com.mx/circulos/presentan-obra-de-teatro-sobre-el-bullying-orientada-a-vivir-en-una-cultura-de-paz-12178257.html',
		imagen: {
			src: `${FOTOS}/2024/10/Fer-y-Marifer.jpeg`,
			alt: 'Dos integrantes de Producciones Arlequín en la redacción de El Sol del Bajío',
			ancho: 768,
			alto: 479,
		},
	},
	{
		medio: 'INFORMATIVO AGORA',
		fecha: '26 JUN 2022',
		fechaISO: '2022-06-26',
		titulo: 'EL PLANETA BUMARA: UNA PROPUESTA TEATRAL CONTRA LA VIOLENCIA',
		tituloCompleto: 'El planeta Bumara: una propuesta teatral contra la violencia',
		entrada:
			'Ágora describe la obra como un espejo que hace reflexionar sobre la manera en que nos comunicamos con los demás.',
		etiqueta: 'EL PLANETA BUMARA',
		href: 'https://agoragto.com/musica-y-cultura/el-planeta-bumara-una-propuesta-teatral-ante-la-violencia/',
		imagen: {
			src: `${FOTOS}/2024/10/IMG_4907-1024x683.jpg`,
			alt: 'Bucoro, personaje de El planeta Bumara, sentado en el escenario entre humo y luz morada',
			ancho: 1024,
			alto: 683,
		},
	},
	{
		/* El enlace original del medio responde 404: confirmar con la compañía
		   si la nota cambió de dirección antes de publicar. */
		medio: 'ENTORNO NOTICIAS',
		fecha: '22 ABR 2022',
		fechaISO: '2022-04-22',
		titulo: 'LLEGA A CELAYA: EL PLANETA BUMARA',
		tituloCompleto: 'Llega a Celaya: El planeta Bumara',
		entrada:
			'El medio celayense da cuenta de la llegada del montaje a la ciudad después de su paso por la Ciudad de México.',
		etiqueta: 'EL PLANETA BUMARA',
		href: 'https://entornonoticias.mx/inicio/2022/04/22/llega-desde-la-cdmx-a-celaya-el-planeta-bumara/',
		imagen: {
			src: `${FOTOS}/2024/10/IMG_4917-1024x683.jpg`,
			alt: 'Dos intérpretes de El planeta Bumara en escena, con planetas colgados sobre el escenario',
			ancho: 1024,
			alto: 683,
		},
	},
	{
		medio: 'EL SOL DEL BAJIO',
		fecha: '21 SEP 2022',
		fechaISO: '2022-09-21',
		titulo: 'PRESENTAN PUESTA EN ESCENA "ABSOLUCION FINAL"',
		tituloCompleto: 'Presentan puesta en escena “Absolución Final”',
		entrada:
			'La obra sobre Miguel Hidalgo, escrita y dirigida por Omar Arévalo Zarco, en la sección de teatro del diario del Bajío.',
		etiqueta: 'ABSOLUCION FINAL',
		href: 'https://www.elsoldelbajio.com.mx/cultura/teatro/presentan-puesta-en-escena-absolucion-final-8920544.html',
		imagen: {
			src: `${FOTOS}/2024/06/244762314_195600952713235_2506839290923249544_n-1024x768.jpg`,
			alt: 'Elenco de Absolución Final en escena, iluminado en rojo',
			ancho: 1024,
			alto: 768,
		},
	},
	{
		medio: 'INFORMATIVO AGORA',
		fecha: '09 NOV 2022',
		fechaISO: '2022-11-09',
		titulo: 'SE REUNEN POR PRIMERA VEZ COMPANIAS DE TEATRO INDEPENDIENTE DE CELAYA',
		tituloCompleto:
			'Se reúnen por primera vez compañías de teatro independiente de Celaya',
		entrada:
			'La cuarta edición del festival Enteatrarte, del 12 de noviembre al 2 de diciembre, junta por primera vez a las compañías independientes de la ciudad.',
		etiqueta: 'FESTIVAL ENTEATRARTE',
		href: 'https://agoragto.com/musica-y-cultura/se-reunen-por-primera-vez-companias-de-teatro-independiente-de-celaya-en-4-a-edicion-de-enteatrarte/',
		imagen: {
			src: `${FOTOS}/2024/06/440149573_743481071320529_1112561554461312458_n-edited-1024x576.jpg`,
			alt: 'Actor sentado en una banca durante una función de teatro independiente en Celaya',
			ancho: 1024,
			alto: 576,
		},
	},
];

export const paginaPrensa = {
	cabecera: {
		titular: 'PRENSA',
	},
	listado: {
		leer: 'LEER LA NOTA',
		apertura: 'NOTA DE APERTURA',
	},
	/* Recuadro de servicio: cierra la rejilla de notas */
	medios: {
		rotulo: 'PARA MEDIOS',
		texto:
			'Entrevistas, fotografías en alta resolución y ficha técnica de cualquiera de nuestros montajes.',
		etiqueta: 'ESCRIBENOS',
	},
	cierre: {
		rotulo: 'DESCUBRE NUESTRAS OBRAS',
		lineas: [
			[
				{ texto: 'DESDE HISTORIAS DEL ' },
				{ texto: 'PASADO', acento: true },
				{ texto: ' HASTA BATALLAS' },
			],
			[
				{ texto: 'INTERGALACTICAS', acento: true },
				{ texto: ' POR SALVAR EL MUNDO.' },
			],
		],
		acciones: {
			principal: { etiqueta: 'CONOCE LAS OBRAS', href: '/obras' },
			secundaria: { etiqueta: 'SOBRE NOSOTROS', href: '/sobre-nosotros' },
		},
	},
};
