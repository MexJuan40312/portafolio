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
    "Mongo DB Atlas",
    "PostgreSql",
    "Vite",
    "Python",
    "Django"
  ]

  const certifications = [
    "CISCO CCNA - Redes Empresariales",
    "Sistemas basados en Linux",
    "Desarrollo de bases de datos",
    "Metodologías ágiles de desarrollo",
  ]

  const personalSkills = [
   "Trabajo en equipo", 
   "Proactividad",
   "Buenas prácticas",
   "Seguridad",
   "Aprendizaje continúo",
   "Diseños escalables",
   "Comunicación clara y objetiva",
   "Búsqueda de soluciones"
  ]

  const languages = ["Español (Nativo)", "Inglés (Conversacional)"]

  return (
    <section id="sobre-mi" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Sobre Mí</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ingeniero en sistemas computacionales, con gran pasión por resolver problemas mediante estrategias estructuradas. Apasionado por le tecnología y aprender.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">Mi Historia</h3>
              <div className="space-y-4 text-gray-300 leading-relaxed text-justify">
                <p>
                  Egresado en 2026 de la carrera de Ingeniería en sistemas Computacionales, soy una persona autodidacta y autónoma que siempre ha tenido mucha pasión por la tecnología, enfocado en dar soluciones óptimas
                  a los problemas que se presentan. 
                </p>
                <p>
                  Mi camino en la tecnología comenzó a temprana edad tomando clases de electrónica en una secundaria técnica y posteriormente  de 2018 a 2021, animación digital en el bachillerato. Fue aquí cuando comencé a 
                  desarrollar proyectos para diferentes compañeros, destacando algunos como el desarrollo de un videojuego en 2D y páginas web.  A mediados del 2021, entré a la carrera de Ingeniería en sistemas 
                  Computacionales con el objetivo de desarrollarme profesionalmente, mejorar mis habilidades y descubrir algunas otras. Actualmente he tenido experiencia desarrollando aplicaciones de impacto real 
                  en diferentes empresas e instituciones, lo que me ha dejado con la seguridad de decir que soy bueno en lo mío.
                </p>
                <p>
                  Me gusta trabajar en proyectos de impacto real aplicando mis conocimientos y habilidades, enfocandote en construir la mejor solución posible teniendo siempre en cuenta buenas prácticas de 
                  desarrollo, priorizando la calidad sobre la cantidad pues mi metodología de trabajo es anallizar el problema, planear, actuar, probar la solución
                </p>
                <p>
                  Actualmente trabajo como Desarrollador de Software e ingeniero de datos, así como desarrollador Freeelancer ofreciendo sistemas de análisis y exposición de marca.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-gray-700">
              <SkillSection title="Tecnologías" skills={technicalSkills} />
              <SkillSection title="Certificaciones y aptitudes" skills={certifications} />
              <SkillSection title="Fortalezas" skills={personalSkills} />
              <SkillSection title="Idiomas" skills={languages} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
