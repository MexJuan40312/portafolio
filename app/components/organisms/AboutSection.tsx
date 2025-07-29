import { SkillSection } from "@/components/molecules/SkillSection"
export const AboutSection = () => {
  const technicalSkills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "Laravel",
    "PHP",
    "Oracle Database",
    "MySQL",
    "Tailwind CSS",
    "HTML5",
    "CSS3",
  ]

  const certifications = [
    "CISCO CCNA - Redes Empresariales",
    "Sistemas basados en Linux",
    "Desarrollo de bases de datos",
    "Metodologías ágiles de desarrollo",
  ]

  const languages = ["Español (Nativo)", "Inglés (Conversacional)"]

  return (
    <section id="sobre-mi" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Sobre Mí</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Soy un estudiante de Ingeniería en Sistemas Computacionales apasionado por la tecnología y el desarrollo de
            soluciones innovadoras.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">Mi Historia</h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Como estudiante de Ingeniería en Sistemas Computacionales, he desarrollado una sólida base en
                  tecnologías web modernas y metodologías de desarrollo ágil.
                </p>
                <p>
                  Mi experiencia abarca desde el mantenimiento de hardware hasta el desarrollo de aplicaciones web
                  completas, siempre buscando integrar creatividad y funcionalidad en cada proyecto.
                </p>
                <p>
                  Me especializo en crear soluciones digitales que no solo cumplan con los requisitos técnicos, sino que
                  también ofrezcan una excelente experiencia de usuario.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-gray-700">
              <SkillSection title="Tecnologías" skills={technicalSkills} />
              <SkillSection title="Certificaciones" skills={certifications} />
              <SkillSection title="Idiomas" skills={languages} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
