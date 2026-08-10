/** Documento singleton `siteSettings` — esquema de referencia en sanity/schemas */
export const siteSettingsQuery = `*[_type == "siteSettings"][0]{
  brandName,
  tagline,
  headline,
  supportingText,
  ctaLabel,
  ctaHref,
  heroImage
}`;

export const postsQuery = `*[_type == "post"] | order(publishedAt desc)[0...6]{
  _id,
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  mainImage
}`;
