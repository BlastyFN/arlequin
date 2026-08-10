import { createClient, type SanityClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url';

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID as string | undefined;
const dataset = (import.meta.env.PUBLIC_SANITY_DATASET as string) || 'production';
const apiVersion =
	(import.meta.env.PUBLIC_SANITY_API_VERSION as string) || '2025-01-01';
const useCdn = import.meta.env.PUBLIC_SANITY_USE_CDN !== 'false';

export const isSanityConfigured = Boolean(projectId);

export const sanityClient: SanityClient | null = isSanityConfigured
	? createClient({
			projectId: projectId!,
			dataset,
			apiVersion,
			useCdn,
		})
	: null;

const builder = sanityClient ? imageUrlBuilder(sanityClient) : null;

export function urlFor(source: SanityImageSource) {
	if (!builder) {
		throw new Error('Sanity no está configurado: falta PUBLIC_SANITY_PROJECT_ID');
	}
	return builder.image(source);
}

export async function sanityFetch<T>(
	query: string,
	params: Record<string, unknown> = {},
): Promise<T | null> {
	if (!sanityClient) return null;
	return sanityClient.fetch<T>(query, params);
}
