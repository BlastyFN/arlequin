/**
 * Esquemas de referencia para Sanity Studio.
 * Cuando crees el studio (`npm create sanity@latest`), copia estos
 * archivos a `schemaTypes/` o úsalos como guía.
 */

export const siteSettings = {
	name: 'siteSettings',
	title: 'Ajustes del sitio',
	type: 'document',
	fields: [
		{ name: 'brandName', title: 'Marca', type: 'string' },
		{ name: 'tagline', title: 'Tagline', type: 'string' },
		{ name: 'headline', title: 'Titular', type: 'string' },
		{ name: 'supportingText', title: 'Texto de apoyo', type: 'text' },
		{ name: 'ctaLabel', title: 'CTA — etiqueta', type: 'string' },
		{ name: 'ctaHref', title: 'CTA — enlace', type: 'string' },
		{
			name: 'heroImage',
			title: 'Imagen hero',
			type: 'image',
			options: { hotspot: true },
			fields: [{ name: 'alt', title: 'Texto alternativo', type: 'string' }],
		},
	],
};

export const post = {
	name: 'post',
	title: 'Publicación',
	type: 'document',
	fields: [
		{ name: 'title', title: 'Título', type: 'string' },
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: { source: 'title' },
		},
		{ name: 'excerpt', title: 'Extracto', type: 'text' },
		{ name: 'publishedAt', title: 'Publicado', type: 'datetime' },
		{
			name: 'mainImage',
			title: 'Imagen principal',
			type: 'image',
			options: { hotspot: true },
			fields: [{ name: 'alt', title: 'Texto alternativo', type: 'string' }],
		},
		{
			name: 'body',
			title: 'Cuerpo',
			type: 'array',
			of: [{ type: 'block' }],
		},
	],
};
