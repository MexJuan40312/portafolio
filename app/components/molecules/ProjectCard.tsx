"use client"

import { Github } from "lucide-react"
import type { Project } from "@/app/types"
import { Button } from "@/app/components/atoms/Button"
import { Badge } from "@/app/components/atoms/Badge"
import Image from "next/image"

interface ProjectCardProps {
  project: Project
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
      <div className="flex flex-col h-full">
        {/* Project Image */}
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={project.imageUrl || "/placeholder.svg?height=192&width=400&text=Project+Preview"}
            alt={`Preview del proyecto ${project.title}`}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech, index) => (
                <Badge key={index} variant="purple">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex gap-3">
            <Button
              variant="primary"
              size="sm"
              onClick={() => window.open(project.githubUrl, "_blank")}
              className="flex items-center gap-2"
            >
              <Github size={16} />
              Ver Código
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
