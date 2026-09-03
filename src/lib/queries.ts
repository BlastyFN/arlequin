const imagen = /* groq */ `
  asset->{
    _id,
    url,
    metadata { dimensions { width, height } }
  },
  alt,
  pie,
  hotspot,
  crop
`

const obraBase = /* groq */ `
  _id,
  titulo,
  tituloCompleto,
  subtitulo,
  "slug": slug.current,
  etiquetas,
  publico,
  tematica,
  duracion,
  genero,
  festivales,
  sinopsis,
  cartel { ${imagen} },
  fondo { ${imagen} },
  fotos[] { ${imagen} },
  videoUrl,
  videoTitulo,
  videoPoster { ${imagen} },
  dossier { asset->{ url, originalFilename } }
`

export const settingsQuery = /* groq */ `*[_id == "settings"][0]{
  nombre,
  ciudad,
  correo,
  telefono,
  fundacion,
  facebook,
  instagram,
  contactoTitular,
  contactoParrafos[]{ partes[]{ texto, acento } },
  viaCorreoRotulo,
  viaTelefonoRotulo,
  viaUbicacionRotulo
}`

export const homePageQuery = /* groq */ `*[_id == "homePage"][0]{
  titularLinea,
  titularRemate,
  entrada,
  accionPrincipal,
  accionSecundaria,
  funcionRotulo,
  funcionObra->{ tituloCompleto, titulo, "slug": slug.current },
  funcionTitulo,
  funcionAutor,
  funcionLugar,
  funcionHorario,
  funcionCta,
  sello,
  cintillo,
  sobreTitular,
  sobreParrafo,
  sobreCta,
  sobreFotos[]{ ${imagen} },
  obrasTitular,
  obrasParrafo,
  obrasCta,
  obrasDestacadas[]->{
    tituloCompleto,
    titulo,
    "slug": slug.current,
    fondo { ${imagen} },
    cartel { ${imagen} }
  },
  testimonios[]{ cita, medio, autor, fecha },
  respaldosTitular,
  respaldos[]{ nombre, marca, logo { ${imagen} } }
}`

export const obrasQuery = /* groq */ `*[_type == "obra" && defined(slug.current)] | order(tituloCompleto asc){
  ${obraBase}
}`

export const obraBySlugQuery = /* groq */ `*[_type == "obra" && slug.current == $slug][0]{
  ${obraBase}
}`

export const obrasPageQuery = /* groq */ `*[_id == "obrasPage"][0]{
  portadaTitular,
  portadaFoto { ${imagen} },
  cierreRotulo,
  cierreLineas[]{ partes[]{ texto, acento } },
  cierreCta
}`

export const notasQuery = /* groq */ `*[_type == "notaPrensa"] | order(fechaISO desc){
  medio,
  fecha,
  fechaISO,
  titulo,
  tituloCompleto,
  entrada,
  etiqueta,
  href,
  imagen { ${imagen} }
}`

export const pressPageQuery = /* groq */ `*[_id == "pressPage"][0]{
  titular,
  mediosRotulo,
  mediosTexto,
  mediosEtiqueta,
  cierreRotulo,
  cierreLineas[]{ partes[]{ texto, acento } },
  cierreCta,
  cierreCtaSecundaria
}`

export const servicesPageQuery = /* groq */ `*[_id == "servicesPage"][0]{
  portadaRotulo,
  portadaTitular,
  portadaEntrada,
  portadaCredito,
  portadaFoto { ${imagen} },
  oficiosRotulo,
  oficiosTitularLineas,
  oficiosTitularRemate,
  oficios[]{ titulo, texto },
  pastorelaRotulo,
  pastorelaTitulo,
  pastorelaSubtitulo,
  pastorelaEntrada,
  pastorelaParrafos,
  pastorelaFoto { ${imagen} },
  pastorelaCta,
  cierreRotulo,
  cierreLineas[]{ partes[]{ texto, acento } },
  cierreCta
}`

export const aboutPageQuery = /* groq */ `*[_id == "aboutPage"][0]{
  rotulo,
  titular,
  titularAcento,
  entrada,
  credito,
  foto { ${imagen} },
  origenRotulo,
  origenTitular,
  origenParrafos,
  trayectoriaRotulo,
  trayectoria,
  objetivosRotulo,
  objetivosTitular,
  objetivosTitularAcento,
  objetivos[]{ inicio, destacado, final },
  objetivosCierre,
  galeriaRotulo,
  galeriaTitular,
  galeria[]{ titulo, imagen { ${imagen} } }
}`
