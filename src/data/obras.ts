/**
 * Repertorio de la compañía. Sinopsis tomadas del sitio vigente.
 * Sustituible por Sanity sin tocar los componentes.
 *
 * Nota tipográfica: `titulo`, `subtitulo` y `etiquetas` se pintan con Headline
 * News, que no incluye acentos ni Ñ. Escribirlos en mayúsculas sin diacríticos.
 * `tituloCompleto` es la versión acentuada para textos alternativos y metadatos.
 */

export interface ImagenObra {
	src: string;
	alt: string;
	ancho: number;
	alto: number;
	/** Punto focal para `object-position`, p. ej. `center 30%`. */
	foco?: string;
}

export interface Obra {
	slug: string;
	titulo: string;
	tituloCompleto: string;
	subtitulo?: string;
	/* Editoriales: conviene validarlas con la compañía antes de publicar */
	etiquetas: string[];
	/**
	 * PROVISIONAL. El sitio vigente no publica el palmarés por obra, así que
	 * estos festivales se repartieron desde la trayectoria general de la
	 * compañía. Hay que confirmarlos con Producciones Arlequín antes de
	 * publicar. Una obra sin festivales deja el bloque fuera.
	 */
	festivales: string[];
	/* El primer párrafo sirve de entrada en el listado; el resto alimenta la ficha */
	sinopsis: string[];
	cartel: {
		src: string;
		ancho: number;
		alto: number;
	};
	/** Fotografía de escena a pantalla completa en la ficha. En Sanity: imagen de fondo. */
	fondo: ImagenObra;
}

const CARTELES = 'https://produccionesarlequin.com/wp-content/uploads';

export const obras: Obra[] = [
	{
		slug: 'no-todas-las-ballenas-quieren-volver',
		titulo: 'NO TODAS LAS BALLENAS QUIEREN VOLVER',
		tituloCompleto: 'No todas las ballenas quieren volver',
		etiquetas: ['TEATRO FAMILIAR', 'UNIPERSONAL'],
		festivales: [],
		sinopsis: [
			'Ulises es un niño que vive en la costa, atrapado entre el silencio de una madre que ha olvidado cómo abrazar y la leyenda de un padre pirata que nunca regresó.',
			'Cada noche, el mismo sueño lo persigue: el lamento de una ballena gigante que ha perdido su rumbo en la inmensidad del océano.',
			'Tras una tormenta feroz que lo arrastra mar adentro, Ulises se encuentra cara a cara con la criatura de sus sueños. Pero esta ballena no busca ser rescatada; está cansada y carga un peso que el agua ya no puede sostener.',
			'En este encuentro imposible entre un niño que busca respuestas y un gigante que ha decidido callar, Ulises descubrirá que la aventura más valiente no es cruzar el océano, sino aprender a escuchar el silencio de su propio corazón.',
		],
		cartel: {
			src: `${CARTELES}/2026/07/Documento-1024x576.png`,
			ancho: 1024,
			alto: 576,
		},
		fondo: {
			src: `${CARTELES}/2026/07/IMGL8600-1024x683.jpg`,
			alt: 'Escena en escenario oscuro, muestra',
			ancho: 1024,
			alto: 683,
			foco: 'center 35%',
		},
	},
	{
		slug: 'el-planeta-bumara',
		titulo: 'EL PLANETA BUMARA',
		tituloCompleto: 'El planeta Bumara: una aventura interespacial',
		subtitulo: 'UNA AVENTURA INTERESPACIAL',
		etiquetas: ['TEATRO FAMILIAR', 'CULTURA DE PAZ'],
		festivales: [
			'Rutas Escénicas Estatales de Guanajuato · 2024',
			'Festival ENTEATRARTE · 2022',
		],
		sinopsis: [
			'En una galaxia muy muy lejana… Existe un planeta llamado Bumara. La guerra y el conflicto han puesto al planeta en un peligro que amenaza a todas sus especies inteligentes.',
			'La ciencia y la amistad son la última apuesta que hacen los científicos para salvar al planeta.',
			'Cuando parece que se acaba la esperanza de vivir en una sociedad en paz, el comando espacial emprende la misión de encontrar maneras de restaurar la fe entre los Bumarianos y así conseguir vivir en una cultura de paz.',
			'Miyoko y Bucoro son los únicos Bumarianos que llegan a la Tierra para buscar una solución a los problemas de terrible violencia en Bumara.',
		],
		cartel: {
			src: `${CARTELES}/2024/06/BUMWEB-01-1024x597.jpg`,
			ancho: 1024,
			alto: 597,
		},
		fondo: {
			src: `${CARTELES}/2026/03/Fotografia-2-%E2%80%93El-Planeta-Bumara-%E2%80%93-Alexis-Hernandez-1024x683.jpg`,
			alt: 'Escena de El planeta Bumara bajo luz escénica',
			ancho: 1024,
			alto: 683,
			foco: 'center 40%',
		},
	},
	{
		slug: 'absolucion-final',
		titulo: 'ABSOLUCION FINAL',
		tituloCompleto: 'Absolución final',
		etiquetas: ['TEATRO HISTORICO'],
		festivales: [
			'Encuentro Estatal de Teatro de Guanajuato · 2025',
			'Rutas Escénicas Estatales de Guanajuato · 2024',
			'Festival Cultural de Fundación de Celaya · 451 Aniversario',
		],
		sinopsis: [
			'La figura que todos conocemos de Don Miguel Hidalgo y Costilla; su historia, sus logros, sus derrotas, su consagración en las inmortales páginas de la historia. Todas estas sometidas a un proceso de encarnación, reflexión y constitución de Miguel como ser humano.',
			'Atormentado por sus demonios y consolado por sus convicciones, nos encontramos ante el proceso de deconstrucción personal de Miguel Gregorio Antonio Ignacio Hidalgo y Costilla Gallaga Mandarte y Villaseñor, que nos permite despojarnos de la imagen broncínea del héroe intachable para quedarnos con la necesaria visión de un hombre; con sus dudas, sus miedos y sus yerros.',
		],
		cartel: {
			src: `${CARTELES}/2026/07/ChatGPT-Image-8-jul-2026-12_39_20-1024x576.png`,
			ancho: 1024,
			alto: 576,
		},
		fondo: {
			src: `${CARTELES}/2025/09/Foto-10-1536x1026.jpg`,
			alt: 'Intérprete de Absolución final alza un estandarte bajo el seguidor',
			ancho: 1536,
			alto: 1026,
			foco: 'center 30%',
		},
	},
	{
		slug: 'el-abrazo-de-mi-luna',
		titulo: 'EL ABRAZO DE MI LUNA',
		tituloCompleto: 'El abrazo de mi luna',
		etiquetas: ['UNIPERSONAL', '28 MINUTOS', 'CON CHARLA'],
		festivales: ['Encuentro Estatal de Teatro de Guanajuato · 2025'],
		sinopsis: [
			'En 28 minutos voy a contarte la montaña rusa de emociones y niveles energéticos que experimenté en los últimos 28 días, durante mi ciclo menstrual.',
			'Junto a VULVI, la inteligencia artificial que me apoya a registrar y recordarme los cambios físicos, mentales, emocionales y energéticos, vamos a evidenciar los arquetipos que transito en mi ciclar femenino.',
			'La obra se acompaña por una charla informativa, en donde explicaré los Arquetipos del Ciclo Menstrual según la visión de Miranda Gray, con el objetivo de abrir el diálogo naturalizado y la reflexión amorosa entre las personas menstruantes, para trabajar en transformar el tabú que aún existe sobre este proceso tan poderoso que experimentamos más de la mitad de la población.',
			'Se entregarán herramientas prácticas para comenzar a integrar las virtudes de nuestro ciclar y convertir a la menstruación en nuestro súper poder.',
		],
		cartel: {
			src: `${CARTELES}/2025/07/POSTERPWEB-1.jpg`,
			ancho: 960,
			alto: 560,
		},
		fondo: {
			src: `${CARTELES}/2025/07/IMG_6376-1024x683.jpeg`,
			alt: 'Escena de El abrazo de mi luna en escenario',
			ancho: 1024,
			alto: 683,
			foco: 'center 45%',
		},
	},
	{
		slug: 'cuando-bajan-las-estrellas',
		titulo: 'CUANDO BAJAN LAS ESTRELLAS',
		tituloCompleto: 'Cuando bajan las estrellas',
		etiquetas: ['COMEDIA'],
		festivales: ['Festival Cultural de Fundación de Celaya · 451 Aniversario'],
		sinopsis: [
			'Óscar Arredondo Zárate es un famoso director de teatro, el cual está fervientemente emocionado por esta noche: el estreno de su última pieza. La prensa está ávida, los espectadores ansiosos, la crítica expectante, sus productores jocosos y su elenco… bueno, del elenco mejor ni hablamos.',
			'Nadie sabe realmente el fiasco, el fracaso, el fiambre que están a punto de presenciar.',
		],
		cartel: {
			src: `${CARTELES}/2025/09/POSTERPWEB.jpg`,
			ancho: 960,
			alto: 560,
		},
		fondo: {
			src: `${CARTELES}/2025/07/Producciones-Arlequin-37-de-24-1024x753.jpg`,
			alt: 'Escena cómica en escenario, muestra',
			ancho: 1024,
			alto: 753,
			foco: 'center 35%',
		},
	},
	{
		slug: 'arlequines-revoltosos',
		titulo: 'ARLEQUINES REVOLTOSOS',
		tituloCompleto: 'Arlequines revoltosos',
		etiquetas: ['COMEDIA', 'SKETCHES'],
		festivales: ['Festival de Fiestas Patrias de Celaya · 2022'],
		sinopsis: [
			'¡Viva la rebelión! ¡Viva el teatro! Los Arlequines, juntos pero no revueltos, presentan este programa de sketches cómicos con las sobras de siempre, ¡digo!, las obras de siempre. Porque recuerda: de Arlequín, Juglar, Payaso y Loco, todos tenemos un poco.',
		],
		cartel: {
			src: `${CARTELES}/2024/06/REVWEB.jpg`,
			ancho: 960,
			alto: 560,
		},
		fondo: {
			src: `${CARTELES}/2026/07/IMGL8590-1024x683.jpg`,
			alt: 'Arlequines en escena bajo luz cálida',
			ancho: 1024,
			alto: 683,
			foco: 'center 40%',
		},
	},
	{
		slug: 'otro-dia-con-mas-calma',
		titulo: 'OTRO DIA CON MAS CALMA',
		tituloCompleto: 'Otro día con más calma',
		etiquetas: ['COMEDIA'],
		festivales: ['Festival ENTEATRARTE · 2022'],
		sinopsis: [
			'Ven a reírte a carcajadas con la historia de Eugenio, un vendedor de enciclopedias (de muy buena calidad, por cierto) a quien está a punto de cambiarle la vida el tocar a la puerta de Silvia.',
		],
		cartel: {
			src: `${CARTELES}/2024/06/WhatsApp-Image-2024-06-04-at-5.11.56-PM-1024x597.jpeg`,
			ancho: 1024,
			alto: 597,
		},
		fondo: {
			src: `${CARTELES}/2025/07/IMG_6085-1024x683.jpeg`,
			alt: 'Escena de comedia en escenario, muestra',
			ancho: 1024,
			alto: 683,
			foco: 'center 38%',
		},
	},
];

export const paginaObras = {
	/* Banner corto: el telón se alza sobre la escena y descubre el titular */
	portada: {
		titular: 'OBRAS',
		foto: {
			src: `${CARTELES}/2025/09/Foto-10-1536x1026.jpg`,
			alt: 'Escena de Absolución final: el intérprete alza un estandarte bajo el seguidor',
			ancho: 1536,
			alto: 1026,
		},
	},
	listado: {
		verFicha: 'VER FICHA',
		palmares: 'Festivales y encuentros',
	},
	cierre: {
		rotulo: 'CONTACTANOS',
		lineas: [
			[
				{ texto: 'QUIERES UNA DE ESTAS ' },
				{ texto: 'OBRAS', acento: true },
				{ texto: ' EN TU ' },
				{ texto: 'ESPACIO', acento: true },
				{ texto: '?' },
			],
			[
				{ texto: 'ESCRIBENOS', acento: true },
				{ texto: ' PARA SOLICITAR UNA ' },
				{ texto: 'PROPUESTA PERSONALIZADA', acento: true },
				{ texto: '!' },
			],
		],
		acciones: {
			principal: { etiqueta: 'SOLICITAR PROPUESTA', href: '/#contacto' },
		},
	},
};

/**
 * Maqueta compartida de la ficha. Todas las rutas /obras/[slug] la usan
 * hasta que cada montaje tenga su propio material. El título y la sinopsis
 * sí salen de la obra clicada, para no romper la navegación.
 *
 * Rótulos en Headline News: sin diacríticos.
 */
export const fichaMuestra = {
	volver: 'TODAS LAS OBRAS',
	dossier: {
		etiqueta: 'DESCARGAR DOSSIER',
		href: '/dossiers/muestra.pdf',
		archivo: 'dossier-muestra.pdf',
	},
	simbolos: [
		{
			clave: 'publico' as const,
			rotulo: 'PUBLICO',
			valor: 'Familiar · 8 años',
		},
		{
			clave: 'tematica' as const,
			rotulo: 'TEMATICA',
			valor: 'Cultura de paz',
		},
		{
			clave: 'duracion' as const,
			rotulo: 'DURACION',
			valor: '60 minutos',
		},
		{
			clave: 'genero' as const,
			rotulo: 'GENERO',
			valor: 'Unipersonal',
		},
	],
	video: {
		rotulo: 'EN ESCENA',
		titulo: 'Trailer de muestra',
		poster: {
			src: `${CARTELES}/2025/09/Foto-10-1536x1026.jpg`,
			alt: 'Fotograma de muestra: intérprete bajo el seguidor',
			ancho: 1536,
			alto: 1026,
		},
		/* Prueba: trailer teatral público. En Sanity será la URL de YouTube
		   o Vimeo de cada obra; si va null, la sección no se pinta. */
		src: 'https://www.youtube.com/watch?v=ES6NGp8t1F4',
	},
	fotos: [
		{
			src: `${CARTELES}/2026/07/IMGL8600-1024x683.jpg`,
			alt: 'Fotografía de escena, muestra 1',
			ancho: 1024,
			alto: 683,
		},
		{
			src: `${CARTELES}/2026/07/IMGL8590-1024x683.jpg`,
			alt: 'Fotografía de escena, muestra 2',
			ancho: 1024,
			alto: 683,
		},
		{
			src: `${CARTELES}/2026/03/Fotografia-2-%E2%80%93El-Planeta-Bumara-%E2%80%93-Alexis-Hernandez-1024x683.jpg`,
			alt: 'Fotografía de escena, muestra 3',
			ancho: 1024,
			alto: 683,
		},
		{
			src: `${CARTELES}/2025/07/IMG_6376-1024x683.jpeg`,
			alt: 'Fotografía de escena, muestra 4',
			ancho: 1024,
			alto: 683,
		},
		{
			src: `${CARTELES}/2025/07/IMG_6093-1024x683.jpeg`,
			alt: 'Fotografía de escena, muestra 5',
			ancho: 1024,
			alto: 683,
		},
		{
			src: `${CARTELES}/2026/07/Firefly-1-1024x1024.jpg`,
			alt: 'Fotografía de escena, muestra 6',
			ancho: 1024,
			alto: 1024,
		},
	],
};
