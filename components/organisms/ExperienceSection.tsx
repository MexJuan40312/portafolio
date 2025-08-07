import type { Experience } from "@/types"

interface ExperienceSectionProps {
  experiences: Experience[]
}

export const ExperienceSection = ({ experiences }: ExperienceSectionProps) => {
  return (
    <section id="experiencia" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Experiencia Laboral</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Mi trayectoria profesional combinando tecnología, creatividad y resolución de problemas.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-gray-700 hover:border-purple-500 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-2xl font-bold text-white mb-2 md:mb-0">{experience.title}</h3>
                <span className="text-purple-400 font-semibold bg-purple-900/30 px-3 py-1 rounded-full text-sm">
                  {experience.period}
                </span>
              </div>
              <ul className="space-y-2">
                {experience.description.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-300 flex items-start">
                    <span className="text-purple-400 mr-2 mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
