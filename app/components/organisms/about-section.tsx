import { Heading2, Paragraph } from "@/app/components/atoms/typography"
import { SkillCard } from "@/app/components/molecules/skill-card"
import { Code, Database, Zap } from "lucide-react"

/**
 * ORGANISM: About Section Component
 *
 * Sección que presenta información detallada sobre el desarrollador,
 * incluyendo biografía, habilidades técnicas y experiencia.
 *
 * @param aboutInfo - Información personal y profesional
 * @param skills - Array de habilidades técnicas
 */

interface AboutSectionProps {
  aboutInfo: {
    biography: string
    experience: string
    passion: string
  }
  skills: Array<{
    title: string
    description: string
    level: "Básico" | "Intermedio" | "Avanzado" | "Experto"
    category: "frontend" | "backend" | "database" | "tools"
  }>
}

export const AboutSection = ({ aboutInfo, skills }: AboutSectionProps) => {
  // Iconos para diferentes categorías de habilidades
  const skillIcons = {
    frontend: <Code className="w-6 h-6" />,
    backend: <Database className="w-6 h-6" />,
    database: <Database className="w-6 h-6" />,
    tools: <Zap className="w-6 h-6" />,
  }

  // Habilidades predeterminadas si no se proporcionan
  const defaultSkills = [
    {
      title: "Frontend Development",
      description: "React, Next.js, TypeScript, Tailwind CSS",
      level: "Avanzado" as const,
      category: "frontend" as const,
    },
    {
      title: "Backend Development",
      description: "Node.js, Express, API REST, GraphQL",
      level: "Intermedio" as const,
      category: "backend" as const,
    },
    {
      title: "Base de Datos",
      description: "PostgreSQL, MongoDB, Prisma ORM",
      level: "Intermedio" as const,
      category: "database" as const,
    },
    {
      title: "Herramientas",
      description: "Git, Docker, Vercel, AWS",
      level: "Intermedio" as const,
      category: "tools" as const,
    },
  ]

  const skillsToShow = skills.length > 0 ? skills : defaultSkills

  return (
    <section id="about" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado de la sección */}
        <div className="text-center mb-16">
          <Heading2>Acerca de Mí</Heading2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-purple-600 mx-auto mt-4"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Información personal */}
          <div className="space-y-8">
            {/* Biografía */}
            <div>
              <h3 className="text-xl font-semibold text-purple-300 mb-4">Mi Historia</h3>
              <Paragraph className="text-lg leading-relaxed">
                {aboutInfo.biography ||
                  "Soy un desarrollador web apasionado por crear experiencias digitales excepcionales. Mi viaje en el desarrollo comenzó hace varios años y desde entonces he estado constantemente aprendiendo y mejorando mis habilidades."}
              </Paragraph>
            </div>

            {/* Experiencia */}
            <div>
              <h3 className="text-xl font-semibold text-purple-300 mb-4">Experiencia</h3>
              <Paragraph className="leading-relaxed">
                {aboutInfo.experience ||
                  "He trabajado en diversos proyectos, desde aplicaciones web pequeñas hasta sistemas complejos. Mi enfoque siempre está en escribir código limpio, mantenible y eficiente."}
              </Paragraph>
            </div>

            {/* Pasión */}
            <div>
              <h3 className="text-xl font-semibold text-purple-300 mb-4">Mi Pasión</h3>
              <Paragraph className="leading-relaxed">
                {aboutInfo.passion ||
                  "Me apasiona resolver problemas complejos a través del código y crear soluciones que realmente impacten la vida de las personas. Siempre estoy buscando nuevas tecnologías y mejores formas de hacer las cosas."}
              </Paragraph>
            </div>
          </div>

          {/* Habilidades técnicas */}
          <div>
            <h3 className="text-xl font-semibold text-purple-300 mb-8">Habilidades Técnicas</h3>

            <div className="grid gap-6">
              {skillsToShow.map((skill, index) => (
                <SkillCard
                  key={index}
                  icon={skillIcons[skill.category]}
                  title={skill.title}
                  description={skill.description}
                  level={skill.level}
                  className="hover:transform hover:scale-105 transition-all duration-300"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Estadísticas o logros (opcional) */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-purple-400">50+</div>
            <div className="text-gray-400">Proyectos Completados</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-purple-400">3+</div>
            <div className="text-gray-400">Años de Experiencia</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-purple-400">20+</div>
            <div className="text-gray-400">Tecnologías</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-purple-400">100%</div>
            <div className="text-gray-400">Satisfacción</div>
          </div>
        </div>
      </div>
    </section>
  )
}
