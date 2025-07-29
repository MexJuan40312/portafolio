import type { Project } from "@/types/index"
import { ProjectCard } from "@/components/molecules/ProjectCard"

interface ProjectsSectionProps {
  projects: Project[]
}

export const ProjectsSection = ({ projects }: ProjectsSectionProps) => {
  return (
    <section id="proyectos" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Mis Proyectos</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Una colección de proyectos que demuestran mis habilidades en desarrollo web, desde aplicaciones full-stack
            hasta sitios web modernos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
