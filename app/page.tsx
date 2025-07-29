import { HomeTemplate } from "./components/templates/HomeTemplate"
import type { PersonalInfo, Project, Experience, Education } from "./types/index"

const personalInfo: PersonalInfo = {
  name: "Juan Raul Gonzalez Narvaez",
  title: "Estudiante de Ingeniería en Sistemas Computacionales",
  email: "juanraul.gonzalez.narvaez@gmail.com",
  phone: "(+52) 729/009458",
  linkedin: "https://linkedin.com/in/juan-raul-gonzalez-narvaez",
  github: "https://github.com/juanraulgonzaleznarvaez",
  instagram: "https://instagram.com/mexjuan40312",
}

const projects: Project[] = [
  {
    id: "1",
    title: "Nutritec",
    description:
      "Plataforma nutricional completa desarrollada con tecnologías modernas. Incluye gestión de planes alimenticios, seguimiento de progreso y panel administrativo.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Express.js"],
    githubUrl: "https://github.com/juanraulgonzaleznarvaez/nutritec",
    imageUrl: "/images/projects/nutritec-preview.png",
  },
  {
    id: "2",
    title: "Homefinder",
    description:
      "Plataforma de bienes raíces que permite a los usuarios buscar, filtrar y contactar sobre propiedades. Sistema completo de gestión inmobiliaria.",
    technologies: ["Express.js", "Node.js", "MySQL", "HTML5", "CSS3"],
    githubUrl: "https://github.com/juanraulgonzaleznarvaez/homefinder",
    imageUrl: "/images/projects/homefinder-preview.png",
  },
  {
    id: "3",
    title: "TesjoJobs",
    description:
      "Plataforma de búsqueda de empleo que conecta candidatos con empleadores. Incluye sistema de aplicaciones, filtros avanzados y gestión de perfiles.",
    technologies: ["Laravel", "PHP", "MySQL", "Bootstrap"],
    githubUrl: "https://github.com/juanraulgonzaleznarvaez/tesjojobs",
    imageUrl: "/images/projects/tesjojobs-preview.png",
  },
  {
    id: "4",
    title: "TesjoDays",
    description:
      "Sistema de control y gestión para maestros desarrollado con PHP y Oracle Database. Permite el seguimiento de actividades académicas y administrativas.",
    technologies: ["PHP", "Oracle Database", "HTML5", "CSS3", "JavaScript"],
    githubUrl: "https://github.com/juanraulgonzaleznarvaez/tesjodays",
    imageUrl: "/images/projects/tesjodays-preview.png",
  },
  {
    id: "5",
    title: "SublimARTE",
    description:
      "Sitio web elegante para la visualización y presentación de productos artísticos. Diseño moderno y responsive sin backend, enfocado en la experiencia visual.",
    technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    githubUrl: "https://github.com/juanraulgonzaleznarvaez/sublimarte",
    imageUrl: "/images/projects/sublimarte-preview.png",
  },
]

const experiences: Experience[] = [
  {
    title: "Mantenimiento de equipos de cómputo",
    period: "2023 - Presente",
    description: [
      "Ensamblado de computadoras",
      "Mantenimiento y reparación de computadoras",
      "Instalación y actualización de software como controladores, aplicaciones y servicios",
    ],
  },
  {
    title: "Diseño para ventas",
    period: "2020 - Presente",
    description: [
      "Diseño y venta de contenido multimedia para pública general",
      "Diseño de elementos visuales para una imprenta de sublimado",
      "Publicidad en productos y viajes",
    ],
  },
  {
    title: "Desarrollo de software",
    period: "2023 - Presente",
    description: ["Desarrollo de aplicaciones web usando Express.js (Node), React, Next.js"],
  },
]

const education: Education[] = [
  {
    degree: "Ingeniería en Sistemas Computacionales",
    institution: "Tecnológico de Estudios Superiores de Jocotitlán",
    period: "2020 - Presente",
    description: "Especialización en desarrollo de software, bases de datos y sistemas computacionales.",
  },
  {
    degree: "Bachillerato Tecnológico Bivalente CECyTEM",
    institution: "Técnico en Animación Digital",
    period: "2019 - 2021",
    description: "Formación técnica en animación digital y diseño multimedia.",
  },
]

export default function Home() {
  return (
    <HomeTemplate personalInfo={personalInfo} projects={projects} experiences={experiences} education={education} />
  )
}
