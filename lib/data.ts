import type { PersonalInfo, Project, Experience, Education } from "@/types"


export const personalInfo: PersonalInfo = {
  name: "Juan Raul Gonzalez Narvaez",
  title: "Pasante de Ingeniería en Sistemas con experiencia en Desarrollo de web, Bases de datos, Diseño UX/UI y Microservicios",
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
    title: "Instructor - Taller de Desarrollo Front-End (Next.js)",
    period: "2025",
    description: [
      "Planificación y facilitación de un taller para +25 estudiantes sobre desarrollo moderno en frontend.",
      "Enseñanza de conceptos clave como React, Next.js, Tailwind CSS y despliegue en Vercel.",
    ],
  },
  {
    title: "Técnico en mantenimiento de equipos de cómputo",
    period: "2023 - Presente",
    description: [
      "Mantenimiento preventivo y correctivo que optimizó el rendimiento de equipos.",
      "Instalación y configuración de software y controladores permitiendo la mejora de la productividad y compatibilidad con nuevas tecnologías.",
    ],
  },
  {
    title: "Creador de contenido tecnológico en YouTube",
    period: "2023 - Presente",
    description: [
      "Producción de material educativo sobre desarrollo web, ciberseguridad y programación.",
      "Divulgación de conocimientos técnicos de prácticas escolares y personales haciendo uso de diversas herramientas.",],
  },
  {
    title: "Prácticas profesionales",
    period: "2025 - Presente",
    description: [
      "Desarrollo de un chatbot para WhatsApp con Inteligencia artificial utilizando la arquitectura RAG.",
      "Creación y mantenimiento de bases de datos en MySQL para la gestión de equipo recursos de la dependencia.",
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
    period: "2019-2021",
    description: "",
  },
]