import type { Education } from "@/app/types"

interface EducationSectionProps {
  education: Education[]
}

export const EducationSection = ({ education }: EducationSectionProps) => {
  return (
    <section id="educacion" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Educación</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Mi formación académica en tecnología y desarrollo de sistemas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-gray-700 hover:border-purple-500 transition-all duration-300"
            >
              <div className="mb-4">
                <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                <p className="text-purple-400 font-semibold mb-2">{edu.institution}</p>
                <span className="text-gray-400 bg-gray-700 px-3 py-1 rounded-full text-sm">{edu.period}</span>
              </div>
              {edu.description && <p className="text-gray-300 leading-relaxed">{edu.description}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
