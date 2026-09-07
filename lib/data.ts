import type { PersonalInfo, Project, Experience, Education } from "@/types"


export const personalInfo: PersonalInfo = {
  name: "Juan Raul Gonzalez Narvaez",
  title: "Ingeniero en sistemas computacionales",
  email: "juanraulgonzaleznarvaez@gmail.com",
  phone: "7297005455",
  linkedin: "https://www.linkedin.com/in/juan-raul-gonzalez-narvaez-49a89a267/",
  github: "https://github.com/MexJuan40312",
  instagram: "https://www.instagram.com/juanr.gn",
  youtube: "https://www.youtube.com/@Mex_juamba",
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Sistema de recomendación de hábitos con IA | Habits_AI",
    description:
      "Aplicación que utiliza IA para generar recomendaciones personalizadas basadas en los hábitos del usuario.",
    technologies: ["FastAPI", "React", "Tailwind", "SQLite", "Python", "API"],
    githubUrl: "https://github.com/MexJuan40312/habits_ia",
    imageUrl: "/habits_inicio.png",
  },
  {
    id: "2",
    title: "Sistema de recomendación nutricional | NutriTec",
    description:
      "Aplicación web que genera planes nutricionales personalizados basado en los objetivos, características y estilo de vida de los usuarios utilizando IA.",
    technologies: ["Express", "Next.js", "TypeScript", "TypeScript", "MySQL"],
    githubUrl: "https://github.com/MexJuan40312/NutriTec",
    imageUrl: "/nutritec_inicio.png",
  },
  {
    id: "3",
    title: "Homefinder",
    description: "Aplicación web para encontrar y comparar propiedades inmobiliarias.",
    technologies: ["Express", "MySQL", "Pug", "Tailwind CSS"],
    githubUrl: "",
    imageUrl: "/homefinder_inicio.png",
  },
  {
    id: "4",
    title: "TesJobs",
    description: "Aplicación web para encontrar y comparar empleos",
    technologies: ["PHP", "MySQL", "Docker", "Linux", "Laravel", "Tailwind CSS"],
    githubUrl: "https://github.com/MexJuan40312/TesJobs",
    imageUrl: "/tesjobs_inicio.png",
  },
]

export const experiences: Experience[] = [
  {
    title: "Desarrollador de Software e Ingeniero de datos",
    period: "Marzo 2026 - Presente",
    description: [
      "Actualización y mantenimiento de aplicaciones Web en PHP como la tienda en linea.",
      "Migración y automatización de archivos .dbf a bases de datos de SQLServer para la creación de sistemas web.",
      "Desarrollo de aplicaciones web enfocadas en la optimización de procesos logísticos, producción y almacen.",
      "Creación y mantenimiento de tableros de PowerBI para el análisis del comportamiento de negocio y toma de decisiones."
    ],
  },
  {
    title: "Prácticas profesionales",
    period: "Septiembre del 2025 - Enero del 2026",
    description: [
      "Construcción de un Chatbot de Inteligencia Artificial para WhatsApp utilizando la arquitectura RAG, Meta API y Next.js.",
      "Desarrollo de un servidor de Elastix montado sobre Debian (Linux) para la implementación de un protocolo VOiP, en respuesta de la falta de un conmutador funcional.",],
  },
  {
    title: "Desarrollo Freelance",
    period: "2019 - Presente",
    description: [
      "Creación y venta de páginas Web con HTML, CSS y JavaScript, para clientes finales como estudiantes y comunidad cercana",
      "Desarrollo de videojuegos en 2D utilizando programación por bloques y C++ en motores como Unity",
      "Diseño de interfaces de usuario utilizando programas de edición como Corel Draw, Canva, Power Point y Figma",
      "Creación de contenido multimedia con fines educativos en YouTube"
    ],
  },
{
    title: "Participaciones en eventos",
    period: "2024",
    description: [
      "Instructor de un taller de desarrollo web utilizando React y TypeScript en el congreso Nacional de Ingeniería en Sistemas computacionales celebrado en el Tecnológico de Estudios Superiores de Jocotiltlá."
    ],
  }
]

export const education: Education[] = [
  {
    degree: "Ingeniería en sistemas computacionales",
    institution: "Tecnológico de Estudios Superiores de Jocotitlán",
    period: "2021-Presente",
    description: "",
  },
  {
    degree: "Técnico en animación digital",
    institution: "Bachillerato tecnológico bivalente CECYTEM",
    period: "2018-2021",
    description: "",
  },
]