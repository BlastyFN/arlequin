export interface SiteSettings {
	brandName: string;
	tagline: string;
	headline: string;
	supportingText: string;
	ctaLabel: string;
	ctaHref: string;
	heroImage?: {
		asset?: { _ref: string };
		alt?: string;
	} | null;
}

export interface PostPreview {
	_id: string;
	title: string;
	slug: string;
	excerpt?: string;
	publishedAt?: string;
	mainImage?: {
		asset?: { _ref: string };
		alt?: string;
	} | null;
}

/** Contenido local para visualizar el esqueleto sin proyecto Sanity */
export const fallbackSettings: SiteSettings = {
	brandName: 'Arlequin',
	tagline: 'Sitio + Sanity',
	headline: 'Historias con ritmo propio',
	supportingText:
		'Esqueleto Astro listo para conectar con Sanity CMS. Configura tu project ID y el contenido empieza a vivir aquí.',
	ctaLabel: 'Ver el inicio',
	ctaHref: '#contenido',
};
