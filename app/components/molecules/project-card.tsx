"use client"

import Image from "next/image"
import { Button } from "@/app/components/atoms/button"
import { ExternalLink, Github } from "lucide-react"
import { cn } from "@/app/lib/utils"

/**
 * MOLECULE: Project Card Component
 *
 * Tarjeta que muestra información de un proyecto individual.
 * Combina imagen, descripción y enlaces de acción.
 *
 * @param project - Información completa del proyecto
 * @param className - Clases CSS adicionales
 */

interface ProjectCardProps {
  project: {
    title: string
    description: string
    image: string
    technologies: string[]
    githubUrl?: string
    liveUrl?: string
    featured?: boolean
  }
  className?: string
}

export const ProjectCard = ({ project, className }: ProjectCardProps) => {
  return (
    <div
      className={cn(
        "group relative bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10",
        project.featured && "ring-2 ring-purple-500/30",
        className,
      )}
    >
      {/* Badge de proyecto destacado */}
      {project.featured && (
        <div className="absolute top-4 left-4 z-10 bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-medium">
          ⭐ Destacado
        </div>
      )}

      {/* Imagen del proyecto */}
      <div className="relative h-48 sm:h-56 overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={`Captura de pantalla de ${project.title}`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Overlay con botones de acción */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          {project.githubUrl && (
            <Button
              variant="secondary"
              size="sm"
              onClick={() => window.open(project.githubUrl, "_blank", "noopener,noreferrer")}
              className="backdrop-blur-sm"
            >
              <Github className="w-4 h-4 mr-2" />
              Código
            </Button>
          )}

          {project.liveUrl && (
            <Button
              variant="primary"
              size="sm"
              onClick={() => window.open(project.liveUrl, "_blank", "noopener,noreferrer")}
              className="backdrop-blur-sm"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Ver Demo
            </Button>
          )}
        </div>
      </div>

      {/* Contenido de la tarjeta */}
      <div className="p-6">
        {/* Título del proyecto */}
        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors">
          {project.title}
        </h3>

        {/* Descripción */}
        <p className="text-gray-400 mb-4 leading-relaxed line-clamp-3">{project.description}</p>

        {/* Tecnologías utilizadas */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-purple-500/10 text-purple-300 rounded-md text-xs font-medium border border-purple-500/20"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
