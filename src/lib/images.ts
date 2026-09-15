import {urlFor} from './sanity';
import type {SanityImageSource} from '@sanity/image-url';

type Hotspot = {x?: number; y?: number};

export type SanityImage = {
	asset?: {
		_id?: string;
		url?: string;
		metadata?: {dimensions?: {width?: number; height?: number}};
	} | null;
	alt?: string;
	pie?: string;
	hotspot?: Hotspot;
} | null;

export type ImagenWeb = {
	src: string;
	alt: string;
	ancho: number;
	alto: number;
	pie?: string;
	foco?: string;
};

export function toImagen(
	source: SanityImage,
	ancho = 1600,
	opciones?: {sinRecorte?: boolean},
): ImagenWeb | null {
	if (!source?.asset) return null;

	let src: string;
	try {
		let cadena = urlFor(source as SanityImageSource).width(ancho);
		if (opciones?.sinRecorte) cadena = cadena.ignoreImageParams();
		src = cadena.url();
	} catch {
		src = source.asset.url ?? '';
	}
	if (!src) return null;

	const dim = source.asset.metadata?.dimensions;
	const foco =
		source.hotspot?.x != null && source.hotspot?.y != null
			? `${Math.round(source.hotspot.x * 100)}% ${Math.round(source.hotspot.y * 100)}%`
			: undefined;

	return {
		src,
		alt: source.alt ?? '',
		ancho: dim?.width ?? ancho,
		alto: dim?.height ?? Math.round(ancho * 0.66),
		pie: source.pie,
		foco,
	};
}

export function toImagenOr(
	source: SanityImage,
	fallback: ImagenWeb,
	ancho = 1600,
): ImagenWeb {
	return toImagen(source, ancho) ?? fallback;
}
