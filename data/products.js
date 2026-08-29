// Catálogo de Productos extraído en orden estricto de:
// "Catálogo día del maestro G&M.pdf"

const CATALOG_DATA = [
  {
    id: 1,
    category: "Agendas 2027",
    title: "Agenda semanal 2027",
    description: "¡Toda tu semana a la vista y mucho más fácil de organizar! Las Agendas Clásicas 2027 combinan diseño, practicidad y detalles hermosos para planificar tus días.",
    price: 20999,
    image: "img/producto-01.jpg",
    badge: "Clásica"
  },
  {
    id: 2,
    category: "Agendas 2027",
    title: "Agenda semanal 2027 Edición Exclusiva Docentes",
    description: "Pensada especialmente para docentes: vista semanal de 7 a 22 hs, 176 hojas + 13 separadores, registro de alumnos, seguimiento docente, sección de gastos, 3 planchas de stickers, elástico con charm metálico.",
    price: 35099,
    image: "img/producto-02.jpg",
    badge: "Exclusiva Docente"
  },
  {
    id: 3,
    category: "Agendas 2027",
    title: "Agenda Diaria 2027 BELLE",
    description: "Delicada y elegante con tapa de lino con stamping dorado y charm metálico de mariposa. Horarios de 6 a 23 hs, 12 separadores mensuales con solapa, planner mensual + anual y stickers.",
    price: 36399,
    image: "img/producto-03.jpg",
    badge: "Edición Belle"
  },
  {
    id: 4,
    category: "Agendas 2027",
    title: "Agenda 2 días x hoja 2027",
    description: "Diseño clásico y práctico. Dos días en cada hoja para tener una agenda más compacta y cómoda para llevar a todos lados.",
    price: 18799,
    image: "img/producto-04.jpg",
    badge: "2 días por hoja"
  },
  {
    id: 5,
    category: "Agendas 2027",
    title: "Agenda semanal pocket 2027",
    description: "Formato bolsillo de 16.5 x 9.5 cm. Vista semanal de 7 a 21 hs, 96 hojas en papel de 80 gr. Práctica y liviana.",
    price: 12799,
    image: "img/producto-05.jpg",
    badge: "Pocket"
  },
  {
    id: 6,
    category: "Agendas 2027",
    title: "Agenda Mooving 2027 (10x15 2 días x hoja)",
    description: "Mismo diseño Mooving en formato compacto 10x15 con 2 días por hoja. Incluye carátulas mensuales, 1 pág de stickers, sobre de papel y sticky notes.",
    price: 21699,
    image: "img/producto-06.jpg",
    badge: "Mooving 10x15"
  },
  {
    id: 7,
    category: "Agendas 2027",
    title: "Agenda Mooving 2027 (10x15 Diaria)",
    description: "Formato 10x15 un día por página. Incluye carátulas mensuales, stickers, sobre de papel y notas adhesivas.",
    price: 25699,
    image: "img/producto-07.jpg",
    badge: "Mooving 10x15"
  },
  {
    id: 8,
    category: "Agendas 2027",
    title: "Agenda Mooving 2027 (15x21 Semanal)",
    description: "Formato clásico 15x21 con vista semanal completa. Carátulas mensuales con pestaña, sobre de papel y notas adhesivas.",
    price: 25699,
    image: "img/producto-08.jpg",
    badge: "Mooving 15x21"
  },
  {
    id: 9,
    category: "Agendas 2027",
    title: "Agenda Mooving 2027 (15x21 Diaria)",
    description: "Formato 15x21 vista diaria completa. Máximo espacio de anotación diaria con todos los accesorios Mooving.",
    price: 36899,
    image: "img/producto-09.jpg",
    badge: "Mooving 15x21"
  },
  {
    id: 10,
    category: "Agendas 2027",
    title: "Agenda Perpetua 2027 (Estilo Gamusado)",
    description: "Estilo gamusado premium con bolígrafo propio incluido. Un diseño clásico ideal para docentes que buscan elegancia y practicidad sin fecha fija.",
    price: 11299,
    image: "img/producto-10.jpg",
    badge: "Perpetua"
  },
  {
    id: 11,
    category: "Agendas 2027",
    title: "Agenda Perpetua 2027 (Estilo Entelado)",
    description: "Estilo entelado clásico, delicada y duradera. Excelente opción para uso diario o regalo.",
    price: 7499,
    image: "img/producto-11.jpg",
    badge: "Perpetua"
  },
  {
    id: 12,
    category: "Cuadernos y Anotadores",
    title: "Anotador anillado A6",
    description: "Tamaño A6 con 50 hojas de 70 gr. Ideal para llevar en la cartera o mochila y complementar con un bolígrafo clásico.",
    price: 3199,
    image: "img/producto-12.jpg",
    badge: "Anotador"
  },
  {
    id: 13,
    category: "Cuadernos y Anotadores",
    title: "Anotador anillado forma de corazón",
    description: "Formato 12x12 cm con 20 hojas. Diseño tierno y original, ideal para complementar con bolígrafo de diseño.",
    price: 2999,
    image: "img/producto-13.jpg",
    badge: "Diseño Corazón"
  },
  {
    id: 14,
    category: "Cuadernos y Anotadores",
    title: "Libretas NOR PAC (11x17 cm)",
    description: "Diseños variados y súper delicados en medida 11x17 cm. Excelente terminación.",
    price: 4199,
    image: "img/producto-14.jpg",
    badge: "Nor Pac"
  },
  {
    id: 15,
    category: "Cuadernos y Anotadores",
    title: "Cuaderno Positive Energy A5",
    description: "Cuaderno tamaño A5 con elástico de cierre y diseño motivacional.",
    price: 6499,
    image: "img/producto-15.jpg",
    badge: "A5 Elástico"
  },
  {
    id: 16,
    category: "Cuadernos y Anotadores",
    title: "Cuaderno de Diseño A5 con separadores",
    description: "Tamaño A5 con separadores internos para organizar secciones, terminaciones extra cute.",
    price: 9299,
    image: "img/producto-16.jpg",
    badge: "Con Separadores"
  },
  {
    id: 17,
    category: "Cuadernos y Anotadores",
    title: "Cuaderno Inteligente A5",
    description: "Tamaño A5 con sistema de discos/hojas reutilizables o removibles. Varios modelos disponibles.",
    price: 8499,
    image: "img/producto-17.jpg",
    badge: "Inteligente"
  },
  {
    id: 18,
    category: "Cuadernos y Anotadores",
    title: "Set de 4 Cuadernos Especiales",
    description: "Incluye 4 cuadernos: hojas rayadas, cuadriculadas, lisas y bullet. 32 hojas c/u (80 g), 148x210 mm, tapa blanda 250 g con laminado soft touch, stamping y lomo cosido.",
    price: 10699,
    image: "img/producto-18.jpg",
    badge: "Set x4"
  },
  {
    id: 19,
    category: "Cuadernos y Anotadores",
    title: "Cuaderno con Canopla integrada",
    description: "Incluye canopla incorporada, notas adhesivas tipo post-it y bolígrafo a juego.",
    price: 9799,
    image: "img/producto-19.jpg",
    badge: "Con Canopla"
  },
  {
    id: 20,
    category: "Cuadernos y Anotadores",
    title: "Cuaderno Notebook A5 (Colores Lisos)",
    description: "Tamaño A5, variedad de colores lisos con 192 páginas rayadas de 80 gr y elástico de cierre.",
    price: 5699,
    image: "img/producto-20.jpg",
    badge: "192 Páginas"
  },
  {
    id: 21,
    category: "Cuadernos y Anotadores",
    title: "Cuaderno Notebook A5 Clásico",
    description: "Estilo clásico con tira señaladora de tela y elástico de cierre.",
    price: 6099,
    image: "img/producto-21.jpg",
    badge: "Clásico"
  },
  {
    id: 22,
    category: "Cuadernos y Anotadores",
    title: "Cuaderno Notebook A5 Símil Cuero",
    description: "Estilo elegante símil cuero con botón de cierre metálico/a presión.",
    price: 8699,
    image: "img/producto-22.jpg",
    badge: "Símil Cuero"
  },
  {
    id: 23,
    category: "Cuadernos y Anotadores",
    title: "Cuaderno NOR-PAC A5 Hojas Removibles",
    description: "Súper tendencia: hojas lisas de colores, rayadas, planchas de stickers, bolsillos internos y tira de cierre.",
    price: 12399,
    image: "img/producto-23.jpg",
    badge: "Hojas Removibles"
  },
  {
    id: 24,
    category: "Cuadernos y Anotadores",
    title: "Cuaderno de Notas A6 Tapa Dura",
    description: "Hermoso diseño en tamaño A6 con tapa dura y 120 hojas.",
    price: 5599,
    image: "img/producto-24.jpg",
    badge: "A6 Tapa Dura"
  },
  {
    id: 25,
    category: "Cuadernos y Anotadores",
    title: "Cuadernos A5 Marca Cuenco",
    description: "Variedad de diseños de autor, tamaño A5 con 80 hojas rayadas.",
    price: 7199,
    image: "img/producto-25.jpg",
    badge: "Cuenco"
  },
  {
    id: 26,
    category: "Cuadernos y Anotadores",
    title: "Cuaderno Temático Harry Potter (16x21 cm)",
    description: "Para los amantes de Harry Potter: tapa dura con espiral, 16x21 cm y 80 hojas de pura magia.",
    price: 11799,
    image: "img/producto-26.jpg",
    badge: "Harry Potter"
  },
  {
    id: 27,
    category: "Cuadernos y Anotadores",
    title: "Cuadernos NOR-PAC Tonos Pastel",
    description: "Hojas removibles en tamaño A5, 90 hojas en delicados tonos pastel.",
    price: 11799,
    image: "img/producto-27.jpg",
    badge: "Pastel"
  },
  {
    id: 28,
    category: "Cuadernos y Anotadores",
    title: "Cuaderno NOR-PAC Fantasía",
    description: "Tapa dura con diseños fantasía, tamaño A5 con 80 hojas.",
    price: 11199,
    image: "img/producto-28.jpg",
    badge: "Fantasía"
  },
  {
    id: 29,
    category: "Escritura y Accesorios",
    title: "Bolígrafo FW de Diseño en Caja con Visor",
    description: "Tinta color azul, acabado brilloso, presentado en su caja individual de diseño con visor.",
    price: 11699,
    image: "img/producto-29.jpg",
    badge: "FW"
  },
  {
    id: 30,
    category: "Escritura y Accesorios",
    title: "Bolígrafo Sabonis en Caja Individual",
    description: "Viene en su propia caja rígida. Colores disponibles: plateado, negro, azul o rojo.",
    price: 6899,
    image: "img/producto-30.jpg",
    badge: "Sabonis"
  },
  {
    id: 31,
    category: "Escritura y Accesorios",
    title: "Bolígrafo de Giro Bouquet Flor",
    description: "Mecanismo de giro: de un lado logo y del otro una hermosa flor decorativa para acompañar agendas y cuadernos.",
    price: 6699,
    image: "img/producto-31.jpg",
    badge: "Bouquet"
  },
  {
    id: 32,
    category: "Escritura y Accesorios",
    title: "Bolígrafo FW Glam con Brillantes",
    description: "Toque de glam con brillantes en el cuerpo, delicado y elegante, en caja individual de regalo.",
    price: 18299,
    image: "img/producto-32.jpg",
    badge: "FW Glam"
  },
  {
    id: 33,
    category: "Escritura y Accesorios",
    title: "Bolígrafo Sabonis Ejecutivo en Caja",
    description: "Estilo, elegancia y presencia en un solo producto, presentado en estuche de regalo.",
    price: 11299,
    image: "img/producto-33.jpg",
    badge: "Sabonis Ejecutivo"
  },
  {
    id: 34,
    category: "Escritura y Accesorios",
    title: "Bolígrafo Sabonis en Estuche Clásico",
    description: "Variedad de colores y acabados en un clásico estuche de regalo.",
    price: 12799,
    image: "img/producto-34.jpg",
    badge: "Sabonis Clásico"
  },
  {
    id: 35,
    category: "Escritura y Accesorios",
    title: "Set de Escritorio FW Premium",
    description: "Caja rígida forrada con papel texturado. Incluye 20 hojas A6 impresas, 20 sobres impresos (4 diseños), 20 sellos autoadhesivos y bolígrafo premium con charm.",
    price: 21499,
    image: "img/producto-35.jpg",
    badge: "Set Papelería"
  },
  {
    id: 36,
    category: "Escritura y Accesorios",
    title: "Lapiceros FW Organizadores",
    description: "Lapicero de diseño FW en dos versiones (rosa o marrón) para mantener el escritorio ordenado con estilo.",
    price: 33199,
    image: "img/producto-36.jpg",
    badge: "Lapicero"
  },
  {
    id: 37,
    category: "Escritura y Accesorios",
    title: "Set de Papelería Sabonis Completo",
    description: "Incluye 1 cuaderno A5 con planchas de stickers, 6 bolígrafos a tono y 4 binder clips en presentación de regalo.",
    price: 34099,
    image: "img/producto-37.jpg",
    badge: "Set Sabonis"
  },
  {
    id: 38,
    category: "Kits y Combos Armados",
    title: "Combo 1: Block Imantado + Lapicera Bouquet",
    description: "Opción accesible y hermosa: block de notas imantado para heladera/escritorio + bolígrafo floral Bouquet.",
    price: 8999,
    image: "img/producto-38.jpg",
    badge: "Combo Regalo"
  },
  {
    id: 39,
    category: "Kits y Combos Armados",
    title: "Combo 2: Block Imantado + Libreta Corazón + Lapicera Bouquet",
    description: "Incluye block de notas imantado, libreta anillada con forma de corazón y bolígrafo bouquet.",
    price: 12999,
    image: "img/producto-39.jpg",
    badge: "Combo Regalo"
  },
  {
    id: 40,
    category: "Kits y Combos Armados",
    title: "Combo 3: Cuadernos A5 x 4 + Lapicera Bouquet",
    description: "Pack de 4 cuadernos A5 variados más bolígrafo Bouquet con detalle floral.",
    price: 16299,
    image: "img/producto-40.jpg",
    badge: "Combo Regalo"
  },
  {
    id: 41,
    category: "Kits y Combos Armados",
    title: "Combo 4: Cuaderno Diseño A5 + Lapicera FW Bouquet",
    description: "Cuaderno de diseño A5 con separadores internos combinado con lapicera FW Bouquet.",
    price: 16399,
    image: "img/producto-41.jpg",
    badge: "Combo Regalo"
  },
  {
    id: 42,
    category: "Kits y Combos Armados",
    title: "Combo 5: Cuaderno Diseño A5 + Lapicera en Caja con Visor",
    description: "Cuaderno de diseño A5 con separadores más bolígrafo de diseño presentado en caja individual con visor.",
    price: 21299,
    image: "img/producto-42.jpg",
    badge: "Combo Regalo"
  },
  {
    id: 43,
    category: "Kits y Combos Armados",
    title: "Combo 6: Cuaderno A5 + Lapicera en Caja + Anotador Corazón",
    description: "Cuaderno A5 con separadores + bolígrafo en caja con visor + anotador anillado forma de corazón.",
    price: 25299,
    image: "img/producto-43.jpg",
    badge: "Combo Regalo"
  },
  {
    id: 44,
    category: "Kits y Combos Armados",
    title: "Combo 7: Cuaderno A5 + Lapicera en Caja + Anotador Corazón + Block Imantado",
    description: "Cuaderno con separadores + lapicera en caja + anotador corazón + block de notas imantado.",
    price: 27599,
    image: "img/producto-44.jpg",
    badge: "Combo Completo"
  },
  {
    id: 45,
    category: "Kits y Combos Armados",
    title: "Combo 8: Agenda Semanal 2027 + Lapicera en Caja con Visor",
    description: "Agenda semanal 2027 a elección combinada con lapicera de diseño en estuche con visor.",
    price: 32999,
    image: "img/producto-45.jpg",
    badge: "Combo Agenda"
  },
  {
    id: 46,
    category: "Kits y Combos Armados",
    title: "Combo 9: Agenda 2027 + Lapicera en Caja + Resaltadores Pastel x4",
    description: "Agenda semanal 2027 + lapicera de diseño en caja + set de 4 resaltadores en tonos pastel.",
    price: 36399,
    image: "img/producto-46.jpg",
    badge: "Combo Agenda"
  },
  {
    id: 47,
    category: "Kits y Combos Armados",
    title: "Combo 10: Agenda + Lapicera + Resaltadores + Block Imantado",
    description: "Agenda semanal 2027 + lapicera en caja + set 4 resaltadores pastel + block de notas imantado.",
    price: 38699,
    image: "img/producto-47.jpg",
    badge: "Combo Grupal"
  },
  {
    id: 48,
    category: "Kits y Combos Armados",
    title: "Combo 11: Agenda + Lapicera + Resaltadores + Block + Libreta Corazón",
    description: "Agenda semanal 2027 + bolígrafo en caja + resaltadores pastel x4 + block imantado + anotador corazón.",
    price: 42699,
    image: "img/producto-48.jpg",
    badge: "Combo Grupal"
  },
  {
    id: 49,
    category: "Kits y Combos Armados",
    title: "Combo 12 Super Premium: Agenda + Lapicera + Resaltadores + Block + Libreta Corazón + Notas Adhesivas",
    description: "El regalo más completo para el Día del Maestro: Agenda 2027 + bolígrafo en caja + 4 resaltadores pastel + block imantado + libreta corazón + bloc de notas adhesivas. Listo para regalar.",
    price: 44999,
    image: "img/producto-49.jpg",
    badge: "Super Premium"
  }
];

// Configuración general de la tienda
const STORE_CONFIG = {
  storeName: "G&M Librería & Artística",
  campaignTitle: "Catálogo Especial Día del Maestro - Agendas 2027",
  location: "Barrio Las Magnolias, Zona Norte, Córdoba Capital",
  whatsappNumber: "5493513958014", // Número internacional para WhatsApp Web / App
  displayPhone: "3513958014",
  giftPackagingNotice: "¡Entregamos todos nuestros productos hermosamente empaquetados y listos para regalar! Podés armar tus propias combinaciones."
};
