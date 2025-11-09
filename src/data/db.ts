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
  },
  {
    id: 7,
    img: "/Projects/medidor_app.png",
    title: "MedidorApp",
    description: "Aplicación móvil para registrar y monitorear las lecturas de medidores de servicios públicos, facilitando el seguimiento del consumo y la gestión eficiente de los datos, en Ecuador. Los datos se guardan localmente en SQLite y se puede sincronizar con un servidor backend.",
    technologies: [
      "React-Native",
      "Nest.js",
      "Autenticación-JWT",
      "PostgreSQL",
      "SQLite",
      "TypeORM",
      "Expo",
      "GitHub",
    ],
    gitHubLink: [
      {
        title: "FrontEnd - Repositorio privado",
        link: "https://github.com/PDC2198/AppAgiledeploy.git"
      },
      {
        title: "BackEnd - Repositorio público",
        link: "https://github.com/Israel14Ec/app_guano_backend.git"
      },
      
    ]
  },
  {
    id: 8,
    img: "/Projects/appreserv.png",
    title: "AppReserv",
    link: "https://drive.google.com/file/d/1fdwCrZY3kqNdu-AeX7R5aidcVxqvp2eT/view",
    description: "Aplicación web para gestionar reservas de citas médicas, con código QR para facilitirar la creación de citas",
    technologies: [
      "Next.js",
      "Nest.js",
      "TypeScript",
      "ShadcnUI",
      "Zustand",
      "React-Query",
      "Autenticación-JWT",
      "MySQL",
      "TypeORM",
      "GitHub",
      "Mailtrap",
    ],
    gitHubLink: [
      {
        title: "FrontEnd",
        link: "https://github.com/Israel14Ec/app_reserv_frontend"
      },
      {
        title: "BackEnd - Repositorio público",
        link: "https://github.com/Israel14Ec/app_reserv_backend.git"
      },
      
    ]
  },
  {
    id: 9,
    img: "/Projects/api_ecommerce.png",
    title: "API Ecommerce",
    description: "API RESTful para gestionar un sistema de comercio electrónico, incluyendo productos, usuarios, roles y autenticación JWT.",
    technologies: [
      "C#",
      ".NET Core",
      "WEP APi",
      "SQL Server",
      "Swagger",
      "Azure",
    ],
    gitHubLink: [
      {
        title: "Backend",
        link: "https://github.com/Israel14Ec/app_reserv_frontend"
      },
    ]
  }
];
