"use client"

import { Heading2, Paragraph } from "@/app/components/atoms/typography"
import { ProjectCard } from "@/app/components/molecules/project-card"
import { Button } from "@/app/components/atoms/button"
import { Github } from "lucide-react"

/**
 * ORGANISM: Projects Section Component
 *
 * Sección que muestra los proyectos destacados del desarrollador.
 * Incluye filtros, grid responsive y enlaces a repositorios.
 *
 * @param projects - Array de proyectos para mostrar
 * @param githubUrl - URL del perfil de GitHub
 */

interface ProjectsSectionProps {
  projects?: Array<{
    title: string
    description: string
    image: string
    technologies: string[]
    githubUrl?: string
    liveUrl?: string
    featured?: boolean
  }>
  githubUrl?: string
}

export const ProjectsSection = ({ projects, githubUrl }: ProjectsSectionProps) => {
  // Proyectos por defecto si no se proporcionan
  const defaultProjects = [
    {
      title: "E-commerce Moderno",
      description:
        "Plataforma de comercio electrónico completa con carrito de compras, pagos integrados y panel de administración. Incluye autenticación, gestión de inventario y analytics en tiempo real.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Next.js", "TypeScript", "Stripe", "Prisma", "PostgreSQL"],
      githubUrl: "https://github.com/tu-usuario/ecommerce-project",
      liveUrl: "https://tu-ecommerce-demo.vercel.app",
      featured: true,
    },
    {
      title: "Dashboard Analytics",
      description:
        "Dashboard interactivo para visualización de datos con gráficos dinámicos, filtros avanzados y exportación de reportes. Optimizado para grandes volúmenes de datos.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React", "D3.js", "Node.js", "MongoDB", "Socket.io"],
      githubUrl: "https://github.com/tu-usuario/analytics-dashboard",
      liveUrl: "https://tu-dashboard-demo.vercel.app",
      featured: true,
    },
    {
      title: "App de Gestión de Tareas",
      description:
        "Aplicación colaborativa para gestión de proyectos con funcionalidades de tiempo real, asignación de tareas y seguimiento de progreso.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Vue.js", "Express", "Socket.io", "Redis", "Docker"],
      githubUrl: "https://github.com/tu-usuario/task-manager",
      liveUrl: "https://tu-tasks-demo.vercel.app",
    },
    {
      title: "API REST Escalable",
      description:
        "API robusta con autenticación JWT, rate limiting, documentación automática y tests completos. Diseñada para alta concurrencia.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Node.js", "Express", "JWT", "Swagger", "Jest"],
      githubUrl: "https://github.com/tu-usuario/scalable-api",
    },
    {
      title: "Landing Page Interactiva",
      description:
        "Sitio web corporativo con animaciones avanzadas, formularios de contacto y optimización SEO. Puntuación perfecta en Lighthouse.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["Next.js", "Framer Motion", "Tailwind", "Vercel"],
      githubUrl: "https://github.com/tu-usuario/interactive-landing",
      liveUrl: "https://tu-landing-demo.vercel.app",
    },
    {
      title: "Chat en Tiempo Real",
      description:
        "Aplicación de mensajería instantánea con salas privadas, compartir archivos y notificaciones push. Interfaz moderna y responsive.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React", "Socket.io", "Node.js", "MongoDB", "PWA"],
      githubUrl: "https://github.com/tu-usuario/realtime-chat",
      liveUrl: "https://tu-chat-demo.vercel.app",
    },
  ]

  const projectsToShow = projects && projects.length > 0 ? projects : defaultProjects

  // Separar proyectos destacados y regulares
  const featuredProjects = projectsToShow.filter((project) => project.featured)
  const regularProjects = projectsToShow.filter((project) => !project.featured)

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado de la sección */}
        <div className="text-center mb-16">
          <Heading2>Mis Proyectos</Heading2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-purple-600 mx-auto mt-4 mb-6"></div>
          <Paragraph className="text-lg max-w-3xl mx-auto">
            Una selección de proyectos que demuestran mis habilidades técnicas y creatividad. Cada proyecto representa
            un desafío único y una oportunidad de aprendizaje.
          </Paragraph>
        </div>

        {/* Proyectos destacados */}
        {featuredProjects.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-purple-300 mb-8 text-center">🌟 Proyectos Destacados</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <ProjectCard key={index} project={project} className="md:col-span-1" />
              ))}
            </div>
          </div>
        )}

        {/* Otros proyectos */}
        {regularProjects.length > 0 && (
          <div>
            <h3 className="text-2xl font-semibold text-purple-300 mb-8 text-center">💼 Otros Proyectos</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </div>
        )}

        {/* Enlace a GitHub */}
        {githubUrl && (
          <div className="text-center mt-16">
            <Paragraph className="mb-6">¿Quieres ver más? Explora todos mis proyectos en GitHub</Paragraph>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => window.open(githubUrl, "_blank", "noopener,noreferrer")}
              className="group"
            >
              <Github className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Ver más en GitHub
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
