import { CardProjectT } from "../types";

export const projects: CardProjectT[] = [
  {
    id: 1,
    img: "/Projects/xPress.webp",
    title: "xPress",
    description:
      "Un Sistema de Gestión de Mantenimiento Computarizado (CMMS) diseñado para optimizar procesos y monitorear trabajos de mantenimiento personal e inventario ",
    technologies: [
        "Laravel-PHP",
        "Vue3-JS",
        "VueRouter",
        "WebScokets",
        "Pusher",
        "TailwindCSS",
        "PostgreSQL",
        "Pinia",
        "Vuetify"
    ],
  },
  {
    id: 2,
    img: "/Projects/TechReserve.webp",
    title: "TechReserve",
    description:
      "Una aplicación innovadora para la gestión de reservas de laboratorios, que combina funcionalidad y diseño intuitivo.",
      technologies: [
        "Laravel-PHP",
        "Vue3-JS",
        "VueRouter",
        "TailwindCSS",
        "PostgreSQL",
        "Pinia",
        "Vuetify"
      ]
  },
  {
    id: 3,
    img: "/Projects/UpTask.webp",
    title: "UpTask",
    description:
      "Una potente aplicación colaborativa para gestionar tareas en equipo, basada en el stack MERN.",
    technologies: [
        "MongoDB",
        "Express-TS",
        "React-TS",
        "Node.js",
        "TanStackQuery",
        "Zustand"
    ]
  },
  {
    id: 4,
    img: "/Projects/NextCommerce.webp",
    title: "NextCommerce",
    description: "Tienda electrónica para videojuegos de diferentes plataformas, incluye el método de pago con Paypal",
    technologies: [
      "Strapi",
      "Next.js-Ts",
      "SQLite",
      "SCSS"
    ]
  },
  {
    id: 5,
    img: "/Projects/MusicEl.webp",
    title: "MusicEl",
    description: "Aplicación de escritorio para poder subir y reproducir canciones de diefrentes artistas",
    technologies: [
      "React-JS",
      "Electron.js",
      "Firebase",
      "SCSS",
      "Chakra UI"
    ]
  },
  {
    id: 6,
    img: "/Projects/AeroVue.webp",
    title: "AeroVue",
    description: "Sistema de punto de venta para administrar ventas de tienda de ropa",
    technologies: [
      "Vue-JS",
      "Vue-Router",
      "Pinia",
      "Firebase",
    ]
  }
];
