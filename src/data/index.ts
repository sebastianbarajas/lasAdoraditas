import { getImageUrl } from "@/lib/utils";

export const images = [
  getImageUrl("carrousel/promo1.jpg"),
  getImageUrl("carrousel/promo2.jpg"),
  getImageUrl("carrousel/promo3.jpg"),
];

export const itemsMenuFood = [
  {
    title: "Menú Adoraditas\nPide Aquí",
    href: `${import.meta.env.BASE_URL}menu-adoraditas`,
    bgImage: getImageUrl("/menu_adoraditas.png"),
  },
  {
    title: "Menú Combos\nPide Aquí",
    href: `${import.meta.env.BASE_URL}menu-combos`,
    bgImage: getImageUrl("/menu_combos.png"),
  },
];

export const imgGalleryHome = [
  getImageUrl("/galleryHome/gallery1.jpg"),
  getImageUrl("/galleryHome/gallery2.jpg"),
  getImageUrl("/galleryHome/gallery3.jpg"),
  getImageUrl("/galleryHome/gallery4.jpg"),
  getImageUrl("/galleryHome/gallery5.jpg"),
  getImageUrl("/galleryHome/gallery6.jpg"),
];

export const sucursales = [
  {
    id: 1,
    title: "CENTRO 2",
    address: "C. 56 x 63 y 61. Col. Centro",
    phones: ["(999) 221 2705", "(999) 923 2282"],
    schedule: [
      { days: "Lunes a Viernes", hours: "7:00 am - 9:00 pm" },
      { days: "Sábado", hours: "7:00 am - 8:00 pm" },
      { days: "Domingo", hours: "7:00 am - 5:00 pm" },
    ],
    mapUrl: "#",
  },
  {
    id: 2,
    title: "CENTRO 2",
    address: "C. 63 x 54 y 56. Col. Centro",
    phones: ["(999) 156 2096", "(999) 923 3610"],
    schedule: [
      { days: "Lunes a Sábado", hours: "7:00 am - 5:00 pm" },
      { days: "Domingo", hours: "7:00 am - 3:00 pm" },
    ],
    mapUrl: "#",
  },
  {
    id: 3,
    title: "CAUCEL",
    address: "C. 62 x 37 y 39A. Fracc. La Herradura",
    phones: ["(999) 419 1589", "(999) 492 9878"],
    schedule: [
      { days: "Lunes a Sábado", hours: "7:00 am - 4:00 pm" },
      { days: "Domingo", hours: "7:00 am - 3:00 pm" },
    ],
    mapUrl: "#",
  },
  {
    id: 4,
    title: "FCO. DE MONTEJO",
    address: "C. 44 x 51 y 53 Fracc. Fco. Montejo",
    phones: ["(999) 492 9868", "(999) 195 0659"],
    schedule: [
      { days: "Lunes a Sábado", hours: "7:00 am - 4:00 pm" },
      { days: "Domingo", hours: "7:00 am - 3:00 pm" },
    ],
    mapUrl: "#",
  },
  {
    id: 5,
    title: "LAS AMÉRICAS",
    address: "C. 67A x 72 y 74 Fracc. Las Américas",
    phones: ["(999) 492 9874", "(999) 941 0104"],
    schedule: [
      { days: "Lunes a Sábado", hours: "7:00 am - 4:00 pm" },
      { days: "Domingo", hours: "7:00 am - 3:00 pm" },
    ],
    mapUrl: "#",
  },
  {
    id: 6,
    title: "FIESTA",
    address: "C. 3 x D2 y esquina 6. Felipe Carrillo Puerto",
    phones: ["(999) 492 9881", "(999) 688 9587"],
    schedule: [
      { days: "Lunes a Sábado", hours: "7:00 am - 4:00 pm" },
      { days: "Domingo", hours: "7:00 am - 3:00 pm" },
    ],
    mapUrl: "#",
  },
  {
    id: 7,
    title: "MONTECRISTO",
    address: "C. 22 x 3 y 7. San Antonio Cinta",
    phones: ["(999) 114 0028", "(999) 948 6661"],
    schedule: [
      { days: "Lunes a Sábado", hours: "7:00 am - 4:00 pm" },
      { days: "Domingo", hours: "7:00 am - 3:00 pm" },
    ],
    mapUrl: "#",
  },
  {
    id: 8,
    title: "CHOLUL",
    address: "Km. 1.7 Cholul Motul Gasolinera Abimerhi",
    phones: ["(999) 114 0028", "(999) 948 6661"],
    schedule: [
      { days: "Lunes a Sábado", hours: "7:00 am - 4:00 pm" },
      { days: "Domingo", hours: "7:00 am - 3:00 pm" },
    ],
    mapUrl: "#",
    logo: getImageUrl("/logos/abimerhi.svg"),
  },
  {
    id: 9,
    title: "PERIFÉRICO ORIENTE",
    address: "C. 25 Col. Benito Juárez Oriente. Cruz anillo periférico",
    phones: ["(999) 996 2779", "(999) 982 5127"],
    schedule: [
      { days: "Lunes a Sábado", hours: "7:00 am - 10:00 pm" },
      { days: "Domingo", hours: "7:00 am - 8:00 pm" },
    ],
    mapUrl: "#",
    logo: getImageUrl("/logos/lagas.svg"),
  },
  {
    id: 10,
    title: "PERISUR",
    address: "Perif. de Mérida Lic. Manuel Berzunza. Tablaje 18955",
    phones: ["(999) 991 4362"],
    schedule: [
      { days: "Lunes a Sábado", hours: "7:00 am - 5:00 pm" },
      { days: "Domingo", hours: "7:00 am - 3:00 pm" },
    ],
    mapUrl: "#",
    logo: getImageUrl("/logos/abimerhi.svg"),
  },
];

export const adoraditas = [
  {
    id: 1,
    title: "CLÁSICA",
    description: "Pastel pimiento, queso manchego y aderezo de la casa",
    price: "$27",
    image: getImageUrl("/adoraditas/clasica.png"),
  },
  {
    id: 2,
    title: "HUEVO CON LONGANIZA",
    description: "Huevos revueltos con longaniza y frijol colado",
    price: "$34",
    image: getImageUrl("/adoraditas/huevo-longaniza.png"),
  },
  {
    id: 3,
    title: "QUESO DAISY",
    description: "Pastel pimiento, queso daisy y aderezo de la casa",
    price: "$34",
    image: getImageUrl("/adoraditas/queso-daisy.png"),
  },
  {
    id: 4,
    title: "PIZZA",
    description: "Salami, queso manchego y aderezo italiano",
    price: "$34",
    image: getImageUrl("/adoraditas/pizza.png"),
  },
  {
    id: 5,
    title: "ITALIANA",
    description:
      "Jamón pechuga de pavo, salami, queso manchego y aderezo italiano",
    price: "$48",
    image: getImageUrl("/adoraditas/italiana.png"),
  },
  {
    id: 6,
    title: "ESPECIAL",
    description:
      "Jamón pechuga de pavo, queso manchego o daisy, salami y aderezo de la casa",
    price: "$48",
    image: getImageUrl("/adoraditas/especial.png"),
  },
  {
    id: 7,
    title: "QUESO DE BOLA",
    description:
      "Jamón pechuga de pavo, auténtico queso de bola y aderezo de la casa",
    price: "$55",
    image: getImageUrl("/adoraditas/queso-bola.png"),
  },
  {
    id: 8,
    title: "CARNE ASADA",
    description:
      "Carne asada, aderezo de la casa, frijol, cebolla asada, pico de gallo y salsita roja",
    price: "$50",
    image: getImageUrl("/adoraditas/carne-asada.png"),
  },
  {
    id: 9,
    title: "PECHUGA EMPANIZADA",
    description:
      "Pechuga de pollo empanizada, aderezo de la casa, frijol, pico de gallo y salsita roja",
    price: "$50",
    image: getImageUrl("/adoraditas/pechuga-empanizada.png"),
  },
  {
    id: 10,
    title: "PARMESANA CON PHILADELPHIA",
    description:
      "Pechuga de pollo empanizada rellena de jamón y queso philadelphia, aderezo de la casa y pico de gallo",
    price: "$64",
    image: getImageUrl("/adoraditas/parmesana.png"),
  },
  {
    id: 11,
    title: "PIERNA",
    description:
      "Pierna, jamón pechuga de pavo, queso daisy, aderezo de la casa, cebolla asada y tomate",
    price: "$99",
    image: getImageUrl("/adoraditas/pierna.png"),
  },
  {
    id: 12,
    title: "SUPER ESPECIAL",
    description:
      "Jamón pechuga de pavo, salami, pastel pimiento, asado o empanizado, queso manchego, aderezo de la casa, cebolla asada, pico de gallo, salsa roja y frijol colado",
    price: "$72",
    image: getImageUrl("/adoraditas/super-especial.png"),
  },
  {
    id: 13,
    title: "TRES QUESOS",
    description:
      "Queso de bola, queso daisy, queso manchego y aderezo de la casa",
    price: "$55",
    image: getImageUrl("/adoraditas/tres-quesos.png"),
  },
  {
    id: 14,
    title: "CLÁSICA SALCHICHA ASADERA",
    description:
      "Pastel pimiento, queso manchego, aderezo de la casa y salchicha asadera",
    price: "$40",
    image: getImageUrl("/adoraditas/salchicha-asadera.png"),
  },
  {
    id: 15,
    title: "HUEVO LONGANIZA QUESO BOLA",
    description:
      "Huevos revueltos con longaniza, frijol colado y extra queso de bola",
    price: "$??",
    image: getImageUrl("/adoraditas/huevo-longaniza-bola.png"),
  },
];

export const locations = [
  { whatsApp: "5219992212705", label: "CENTRO 1" },
  { whatsApp: "5219991562096", label: "CENTRO 2" },
  { whatsApp: "5219994191589", label: "CAUCEL" },
  { whatsApp: "5219994929868", label: "FCO. DE MONTEJO" },
  { whatsApp: "5219994929874", label: "LAS AMÉRICAS" },
  { whatsApp: "5219994929881", label: "FIESTA" },
  { whatsApp: "5219991140028", label: "MONTECRISTO" },
  { whatsApp: "5219991140028", label: "CHOLUL" },
  { whatsApp: "5219999962779", label: "PERIFÉRICO ORIENTE" },
  { whatsApp: "5219999914362", label: "PERISUR" },
];

export const navLinks = [
  {
    label: "Aviso De Privacidad",
    url: `${import.meta.env.BASE_URL}privacidad`,
  },
  { label: "Preguntas Frecuentes", url: `${import.meta.env.BASE_URL}faq` },
  { label: "Restaurantes", url: `${import.meta.env.BASE_URL}restaurntes` },
  { label: "Contacto", url: `${import.meta.env.BASE_URL}contacto` },
];

export const socialLinks = [
  { name: "X", url: "https://x.com", icon: getImageUrl("/logos/x.svg") },
  {
    name: "Facebook",
    url: "https://facebook.com",
    icon: getImageUrl("/logos/facebook.svg"),
  },
  {
    name: "TikTok",
    url: "https://tiktok.com",
    icon: getImageUrl("/logos/tiktok.svg"),
  },
];

export const deliveryApps = [
  {
    name: "Rappi",
    url: "https://rappi.com",
    icon: getImageUrl("/logos/rappi.svg"),
  },
  {
    name: "Uber Eats",
    url: "https://ubereats.com",
    icon: getImageUrl("/logos/uber.svg"),
  },
  {
    name: "Didi Food",
    url: "https://didi.com",
    icon: getImageUrl("/logos/didi.svg"),
  },
];

export const combos = [
  {
    id: 1,
    title: "COMBO LUNCH",
    description: "Dos adoraditas clásicas + agua fresca",
    price: "$74",
    image: getImageUrl("/combos/lunch.png"),
  },
  {
    id: 2,
    title: "COMBO LONGANIZA, PIZZA O DAISY",
    description: "Dos adoraditas (pueden ser combinadas) + agua fresca",
    price: "$87",
    image: getImageUrl("/combos/longaniza-pizza-daisy.png"),
  },
  {
    id: 3,
    title: "COMBO 3 QUESOS O QUESO DE BOLA",
    description: "Dos adoraditas (pueden ser combinadas) + agua fresca",
    price: "$126",
    image: getImageUrl("/combos/3quesos-bola.png"),
  },
  {
    id: 4,
    title: "COMBO ITALIANA O ESPECIAL",
    description: "Dos adoraditas + agua fresca",
    price: "$114",
    image: getImageUrl("/combos/italiana-especial.png"),
  },
  {
    id: 5,
    title: "COMBO ASADO Y EMPANIZADO",
    description: "Dos adoraditas (pueden ser combinadas) + agua fresca",
    price: "$117",
    image: getImageUrl("/combos/asado-empanizado.png"),
  },
  {
    id: 6,
    title: "COMBO SÚPER",
    description: "Dos adoraditas súper (asado o empanizado) + agua fresca",
    price: "$159",
    image: getImageUrl("/combos/super.png"),
  },
  {
    id: 7,
    title: "COMBO PARMESANO",
    description:
      "Dos adoraditas de pechuga parmesana con philadelphia + agua fresca",
    price: "$144",
    image: getImageUrl("/combos/parmesano.png"),
  },
  {
    id: 8,
    title: "COMBO ITALIANO O ESPECIAL COMPLETO",
    description: "Agua + 1 galleta + papas",
    price: "$105",
    image: getImageUrl("/combos/italiano-especial-completo.png"),
  },
  {
    id: 9,
    title: "COMBO PIERNA COMPLETO",
    description: "Agua + galletas + papas",
    price: "$156",
    image: getImageUrl("/combos/pierna-completo.png"),
  },
  {
    id: 10,
    title: "COMBO CLÁSICA COMPLETO",
    description: "Agua + galletas + papas",
    price: "$83",
    image: getImageUrl("/combos/clasica-completo.png"),
  },
  {
    id: 11,
    title: "COMBO ASADO O EMPANIZADO COMPLETO",
    description: "Agua + galletas + papas",
    price: "$107",
    image: getImageUrl("/combos/asado-empanizado-completo.png"),
  },
  {
    id: 12,
    title: "COMBO PIZZA/DAISY/HUEVO COMPLETO",
    description: "Agua + galletas + papas",
    price: "$91",
    image: getImageUrl("/combos/pizza-daisy-huevo-completo.png"),
  },
  {
    id: 13,
    title: "COMBO PARMIGIANA COMPLETO",
    description: "Agua + galletas + papas",
    price: "$121",
    image: getImageUrl("/combos/parmigiana-completo.png"),
  },
  {
    id: 14,
    title: "COMBO SÚPER COMPLETO",
    description: "Agua + galletas + papas",
    price: "$129",
    image: getImageUrl("/combos/super-completo.png"),
  },
  {
    id: 15,
    title: "COMBO QUESO BOLA/3 QUESOS COMPLETO",
    description: "Agua + galletas + papas",
    price: "$112",
    image: getImageUrl("/combos/queso-bola-3quesos-completo.png"),
  },
  {
    id: 16,
    title: "COMBO 2 PIERNA COMPLETO",
    description: "2 adoraditas + agua fresca",
    price: "$211",
    image: getImageUrl("/combos/2pierna-completo.png"),
  },
];
