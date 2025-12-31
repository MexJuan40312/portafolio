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
            Soy un estudiante de Ingeniería en Sistemas Computacionales apasionado por la tecnología y el desarrollo de
            soluciones innovadoras, interesado por aprender más en el desarrollo de proyectos reales con impacto real en el área.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">Mi Historia</h3>
              <div className="space-y-4 text-gray-300 leading-relaxed text-justify">
                <p>
                  Soy un estudiante de Ingeniería en Sistemas Computacionales, cerca de terminar la carrera apasionado por crear soluciones tecnológicas 
                  que realmente aporten valor. A lo largo de mi formación y experiencia, he desarrollado una base sólida en 
                  desarrollo web, bases de datos y metodologías ágiles, pero también una profunda curiosidad por entender cómo 
                  funcionan las cosas y cómo optimizarlas.
                </p>
                <p>
                  Mi camino en la tecnología comenzó desde la niñez jugando videojuegos de forma constante pero con el tiempo mi curiosidad me llevó al porqué
                  de las cosas cuando jugaba como bugs, hacks, etc. Entonces esa curiosidad me llevó a aprender de manera autodidacta conceptos técnicos que 
                  evolucionaron hasta hacerme decidir integrarme a una carrera técnica en animación digital donde también conocí JavaScript como lenguaje de programación, 
                  con el tiempo, mi enfoque evolucionó hacia el desarrollo de web completas pero no solo en eso, si no en ciberseguridad, bases de datos, desarrollo 
                  de videojuegos y hasta diseño 2D y 3D.
                </p>
                <p>
                  Me gusta trabajar en proyectos donde pueda combinar análisis, estructura y buenas prácticas, siempre buscando mejorar 
                  el rendimiento, la arquitectura, escalabilidad y la experiencia del usuario. Disfruto aprender nuevas tecnologías, asumir retos y participar
                  en equipos donde se valore la mejora continua.
                </p>
                <p>
                  Actualmente me especializo en crear soluciones modernas que no solo cumplan con los requisitos técnicos, sino que también sean intuitivas, seguras 
                  y pensadas para el crecimiento futuro.
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
