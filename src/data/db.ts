import { CardProjectT } from "../types";

export const projects: CardProjectT[] = [
  {
    id: 1,
    img: "/Projects/xPress.webp",
    title: "xPress",
    description:
      "Un Sistema de Gestión de Mantenimiento Computarizado (CMMS) diseñado para optimizar procesos y monitorear trabajos de mantenimiento, también se puede administrar el personal e inventario.",
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
    gitHubLink: [
      {
        title: "FrontEnd",
        link: "https://github.com/Israel14Ec/xPress_front.git"
      },
      {
        title: "BackEnd",
        link:  "https://github.com/Israel14Ec/xPress_back.git"
      }
    ]
  },
  {
    id: 2,
    img: "/Projects/TechReserve.webp",
    title: "TechReserve",
    description:
      "Una aplicación diseñada para gestionar las reservas de laboratorios de computación en una institución, permitiendo la administración eficiente de reservas, profesores y horarios.",
      technologies: [
        "Laravel-PHP",
        "Vue3-JS",
        "VueRouter",
        "TailwindCSS",
        "PostgreSQL",
        "Pinia",
        "Vuetify"
      ],
    gitHubLink: [
      {
        title: "FrontEnd",
        link: "https://github.com/Israel14Ec/tech_reserve-front.git"
      },
      {
        title: "BackEnd",
        link: "https://github.com/Israel14Ec/tech_reserve_back.git"
      }
    ]
  },
  {
    id: 3,
    img: "/Projects/UpTask.webp",
    title: "UpTask",
    description:
      "Aplicación basada en el stack MERN para gestionar proyectos y agregar colaboradores de manera eficiente.",
    technologies: [
        "MongoDB",
        "Express-TS",
        "React-TS",
        "Node.js",
        "TanStackQuery",
        "Zustand"
    ],
    gitHubLink: [
      {
        title: "FrontEnd",
        link: "https://github.com/Israel14Ec/UpTask_front.git"
      },
      {
        title: "BackEnd",
        link: "https://github.com/Israel14Ec/upTask_back.git"
      }
    ]
  },
  {
    id: 4,
    img: "/Projects/NextCommerce.webp",
    title: "NextCommerce",
    description: "Tienda electrónica especializada en la venta de videojuegos para diversas plataformas, ofreciendo una amplia variedad de títulos. La plataforma de pago es Paypal.",
    technologies: [
      "Strapi",
      "Next.js-Ts",
      "SQLite",
      "SCSS"
    ],
    gitHubLink: [
      {
        title: "FrontEnd",
        link: "https://github.com/Israel14Ec/next_commerce_frontend.git"
      },
      {
        title: "BackEnd",
        link: "https://github.com/Israel14Ec/next_commerce_backend.git"
      }
    ]
  },
  {
    id: 5,
    img: "/Projects/MusicEl.webp",
    title: "MusicEl",
    description: "Aplicación de escritorio diseñada para subir y reproducir canciones de diversos artistas, permitiendo a los usuarios crear su propia biblioteca musical y compartir sus gustos.",
    technologies: [
      "React-JS",
      "Electron.js",
      "Firebase",
      "SCSS",
      "Chakra UI"
    ],
    
    gitHubLink: [
      {
        title: "Proyecto",
        link: "https://github.com/Israel14Ec/MusicEl.git"
      }
    ],
    linkDownload: "https://drive.google.com/drive/folders/1jcnxzzyA3I5PWIt6c4Cyj6O2NruvKT-R?usp=sharing"
    
  },
  {
    id: 6,
    img: "/Projects/AeroVue.webp",
    title: "AeroVue",
    description: "Sistema de punto de venta diseñado para gestionar las ventas en una tienda de ropa, facilitando la administración de inventarios y control de stock, todo desde una aplicación fácil de usar",
    link: "https://aerovue.vercel.app",   
    technologies: [
      "Vue-JS",
      "Vue-Router",
      "Pinia",
      "Firebase",
    ],
    gitHubLink: [
      {
        title: "Proyecto",
        link: "https://github.com/Israel14Ec/aero_vue.git"
      }
    ]
  }
];
