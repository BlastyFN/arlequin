/**
 * Contenido de la propuesta 2 (dirección "teatro clásico").
 * Texto de muestra: sustituible por Sanity sin tocar los componentes.
 *
 * Nota tipográfica: los campos marcados como "rótulo" se pintan con
 * Headline News, que no incluye acentos ni Ñ. Escribirlos sin diacríticos.
 */

export const navegacion = [
	{ etiqueta: 'REPERTORIO', href: '#' },
	{ etiqueta: 'LA CASA', href: '#' },
	{ etiqueta: 'FORMACION', href: '#' },
	{ etiqueta: 'PRENSA', href: '#' },
	{ etiqueta: 'CONTACTO', href: '#' },
];

export const heroeClasico = {
	rotulo: 'TEATRO DE REPERTORIO / FORMACION / CIUDAD DE MEXICO',
	titular: {
		linea: 'Rigor clásico,',
		remate: 'mirada contemporánea.',
	},
	entrada:
		'Casa escénica dedicada al repertorio, a la formación de intérpretes y a la circulación del teatro por todo el país. Diecisiete temporadas de trabajo sostenido.',
	acciones: [
		{ etiqueta: 'VER REPERTORIO', href: '#', principal: true },
		{ etiqueta: 'CONTACTO', href: '#', principal: false },
	],
	programa: [
		{
			rotulo: 'EN ESCENA',
			valor: 'La casa de los espejos rotos',
			nota: 'Dramaturgia de Elena Vargas',
		},
		{
			rotulo: 'TEMPORADA',
			valor: 'Jueves a domingo, 20:00 h',
			nota: 'Hasta el 14 de junio de 2026',
		},
		{
			rotulo: 'SEDE',
			valor: 'Foro Escena Viva',
			nota: 'Roma Norte, Ciudad de México',
		},
	],
};
