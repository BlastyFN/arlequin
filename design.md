# Design system — Producciones Arlequín

Concepto: **sala a oscuras**. La página es un escenario apagado del que solo
emergen la luz del seguidor, el rojo del telón y el rombo del traje de arlequín.

## Colores

| Nombre     | Token           | HEX       | Uso                                        |
| ---------- | --------------- | --------- | ------------------------------------------ |
| Negro      | `--negro`       | `#050505` | Fondo base de todo el sitio                |
| Negro carta| `--negro-carta` | `#110C0E` | Superficies elevadas (tarjetas, paneles)   |
| Morado     | `--morado`      | `#3F0332` | Halos y degradados de ambiente             |
| Tinto      | `--tinto`       | `#420210` | Degradados de soporte, fondos de sección   |
| Rojo       | `--rojo`        | `#830018` | Acento primario, CTA, rombos               |
| Rojo luz   | `--rojo-luz`    | `#B31230` | Estados hover y foco                       |
| Hueso      | `--hueso`       | `#F3EDE4` | Texto principal (blanco cálido, no puro)   |
| Hueso medio| `--hueso-medio` | `#B3A89F` | Texto secundario                           |
| Hueso tenue| `--hueso-tenue` | `#7D736D` | Metadatos y rótulos apagados               |

El blanco puro se evita a propósito: sobre negro produce vibración y resta
calidez a una marca escénica.

## Tipografía

| Fuente              | Token              | Uso                                        |
| ------------------- | ------------------ | ------------------------------------------ |
| Headline News       | `--fuente-rotulo`  | Rótulos en mayúsculas, navbar, botones     |
| Archivo (Google)    | `--fuente-titular` | Titulares y cifras                         |
| Questa Slab Regular | `--fuente-cuerpo`  | Texto corrido                              |

> **Restricción importante.** `headline-news.woff` solo trae 93 glifos (ASCII
> básico): **no incluye acentos, Ñ, ¡ ni ¿**. Todo texto que use
> `--fuente-rotulo` debe escribirse sin diacríticos, o el navegador mezclará
> glifos de la fuente de reserva. Por eso los rótulos dicen `TEMPORADAS` y no
> `AÑOS`, y `REESTRENO` en vez de `REPOSICIÓN`.
>
> Archivo cubre el hueco en los titulares grandes, donde el español sí necesita
> acentos, y su peso condensado empata con el logotipo. Si en el futuro se
> consigue Headline News con set latino extendido, puede pasar a ser la fuente
> de titulares y Archivo desaparece.

## Motivo gráfico

El motivo del hero es la **sala**, no el traje. El cliente pidió alejarse del
arlequín y el bufón: la marca es profesionalización y cultura, así que el
lenguaje de formas viene del teatro a la italiana.

- **Arco de proscenio** (`ArcoProscenio.astro`): dos filetes de un píxel con la
  boca curva encuadran la escena y se desvanecen hacia abajo. Es la unidad que
  sustituye al rombo como textura del sistema.
- **Fondo de sala** (`FondoEscena.astro`): telón insinuado con pliegues en tinto
  a baja opacidad en los laterales y la bambalina, duela en fuga hecha con
  líneas finas y `rotateX`, y candilejas que suben desde el borde inferior. La
  luz entra desde el proscenio, nunca desde un seguidor cenital.
- **Ornamento de filete**: dos reglas finas que se desvanecen hacia fuera con el
  rombo rojo al centro. Recurso de imprenta clásica, usado en la cartelera y en
  el remate del pie.

Ambas propuestas comparten estos dos componentes, así que el ambiente de la sala
se toca en un solo sitio.

### El rombo, solo como puntuación

El rombo rojo se conserva como recurso reutilizable, pero **solo en tamaño de
signo**: nunca como textura ni como relleno. Sobrevive en el punto de la sección
activa en la navbar, en la viñeta de los rótulos (`.rombo`), como separador del
cintillo y al centro de los ornamentos de filete.

Lo que desapareció es la geometría que convertía la página en un traje de
arlequín:

| Antes                                   | Ahora                                       |
| --------------------------------------- | ------------------------------------------- |
| Retícula diagonal de rombos en el hero  | Telón, duela y candilejas                   |
| Damero en los carteles de obra          | Vitrina iluminada con pliegues de telón     |
| Damero de fondo en contacto             | Telón cerrado, pliegues verticales          |
| Cinta de rombos en el pie               | Filete doble con un rombo al centro         |

Regla práctica: si el rombo se repite para formar una trama, no va. Si puntúa un
rótulo o remata un filete, va.

## La vitrina del hero

`Cartelera.astro` es la vitrina del vestíbulo: una lámpara de cuadro arriba, el
haz cayendo sobre el cartel y el cristal reflejando de lado. Alterna entre dos
cuadros mediante un **apagón**, que es el gesto del teatro en lugar del volteo
de tarjeta que había antes:

1. **Programa** (6.5 s) — la función en cartelera, con foro, horarios y CTA.
2. **Sello** (4.2 s) — el icono de la casa y la temporada.

La luz baja con un rescoldo antes de irse, el cambio de cuadro ocurre a oscuras
y el encendido lleva el titubeo de filamento de una lámpara de tungsteno. Los
dos cuadros comparten celda de rejilla, así que la caja no cambia de altura.

Reglas de comportamiento:

- El ciclo se pausa al pasar el puntero o al entrar el foco, y solo se pausa con
  la luz encendida: un apagón siempre se completa para no dejar la vitrina a
  oscuras.
- Con `prefers-reduced-motion` no alterna: se queda encendida en el programa.
- Sin JS también se queda en el programa, porque el estado inicial viene en el
  HTML (`data-luz`, `data-escena`).

## Estructura de la home

1. **Hero** — sala a oscuras, arco de proscenio y la cartelera de la función.
2. **Cintillo** — marquesina en bucle con las líneas de trabajo.
3. **Sobre nosotros** — relato, valores y cifras.
4. **Obras** — una obra destacada más rejilla de repertorio.
5. **Prensa** — citas de medios.
6. **Contacto** — cierre con datos y redes.

## Contenido

Todo el texto vive en `src/data/home.ts`, listo para sustituirse por Sanity sin
tocar los componentes. La conexión a Sanity (`src/lib/sanity.ts`) sigue intacta
pero la home aún no la consume.

## Propuesta 2 — teatro clásico (`/propuesta2`)

Segunda dirección de hero pedida por el cliente: la marca es profesionalización
y cultura, así que la estética se aleja del arlequín y el bufón sin cambiar la
paleta. Mismos tokens de color, mismas fuentes, otro repertorio de formas.

Las dos propuestas comparten el fondo de sala y el arco. Lo que cambia es la
composición y el peso tipográfico del titular:

| Propuesta 1 (`/`)                        | Propuesta 2 (`/propuesta2`)         |
| ---------------------------------------- | ----------------------------------- |
| Composición asimétrica a dos columnas    | Eje central de programa de mano     |
| Titular en Archivo negra, en mayúsculas  | Titular en Questa Slab, peso regular |
| La función se anuncia en una vitrina     | La función se reparte en tres columnas al pie |
| Barra con panel móvil completo           | Barra reducida, sin menú en móvil   |

El titular de la propuesta 2 abandona la condensada negra y se compone con la
serif de la marca: es el gesto que más la aleja del cartel de feria. Los rótulos
siguen en Headline News, así que siguen sin acentos (`FORMACION`, `EN ESCENA`).

Contenido en `src/data/propuesta2.ts`; componentes aislados en
`src/components/propuesta2/` para que las dos propuestas convivan sin tocarse.
