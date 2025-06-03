import { PortfolioLayout } from "@/app/components/templates/portafolio-layout"
import { HeroSection } from "@/app/components/organisms/hero-section"
import { AboutSection } from "@/app/components/organisms/about-section"
import { ProjectsSection } from "@/app/components/organisms/projects-section"
import { ContactSection } from "@/app/components/organisms/contact-section"

/**
 * PAGE: Home Page
 *
 * Página principal del portafolio que combina todas las secciones
 * y utiliza la plantilla base para mantener consistencia.
 */

export default function HomePage() {
  // Información del usuario - En un proyecto real, esto vendría de una API o CMS
  const userInfo = {
    name: "Juan Raul González Narvaez",
    title: "Desarrollador Full Stack",
    description:
      "Creo experiencias web excepcionales combinando diseño elegante con código eficiente. Especializado en React, Next.js y tecnologías modernas.",
    avatar: "/images/profile/perfil.jpg?height=400&width=400",
    location: "Toluca, México",
  }

  // Enlaces sociales
  const socialLinks = {
    github: "https://github.com/tu-usuario",
    linkedin: "https://linkedin.com/in/tu-perfil",
    twitter: "https://twitter.com/tu-usuario",
    email: "tu-email@ejemplo.com",
  }

  // Información para la sección About
  const aboutInfo = {
    biography:
      "Soy un desarrollador web apasionado con más de 3 años de experiencia creando aplicaciones web modernas y eficientes. Mi viaje comenzó con curiosidad por entender cómo funcionan las páginas web, y se ha convertido en una carrera dedicada a resolver problemas complejos a través del código.",
    experience:
      "He trabajado con startups y empresas establecidas, desarrollando desde landing pages hasta aplicaciones web complejas. Mi experiencia abarca tanto frontend como backend, con un enfoque especial en la experiencia del usuario y el rendimiento.",
    passion:
      "Lo que más me motiva es la posibilidad de crear soluciones que realmente impacten la vida de las personas. Cada línea de código que escribo está pensada para hacer la web un lugar mejor, más accesible y más eficiente.",
  }

  // Habilidades técnicas
  const skills = [
    {
      title: "React & Next.js",
      description:
        "Desarrollo de aplicaciones web modernas con React y Next.js, incluyendo SSR, SSG y optimización de rendimiento.",
      level: "Avanzado" as const,
      category: "frontend" as const,
    },
    {
      title: "TypeScript",
      description: "Desarrollo tipado para mayor robustez y mantenibilidad del código.",
      level: "Avanzado" as const,
      category: "frontend" as const,
    },
    {
      title: "Node.js & Express",
      description: "Desarrollo de APIs REST y GraphQL, autenticación y manejo de bases de datos.",
      level: "Intermedio" as const,
      category: "backend" as const,
    },
    {
      title: "Bases de Datos",
      description: "PostgreSQL, MongoDB, Prisma ORM y optimización de consultas.",
      level: "Intermedio" as const,
      category: "database" as const,
    },
  ]

  return (
    <PortfolioLayout
      userInfo={userInfo}
      cvUrl="/cv-ejemplo.pdf" // Ruta al archivo CV
    >
      {/* Sección Hero - Primera impresión */}
      <HeroSection userInfo={userInfo} socialLinks={socialLinks} />

      {/* Sección About - Información detallada */}
      <AboutSection aboutInfo={aboutInfo} skills={skills} />

      {/* Sección Projects - Portafolio de proyectos */}
      <ProjectsSection
        githubUrl={socialLinks.github}
        // Puedes pasar proyectos personalizados aquí si los tienes
      />

      {/* Sección Contact - Formulario y información de contacto */}
      <ContactSection
        socialLinks={socialLinks}
        contactInfo={{
          email: socialLinks.email,
          phone: "+1 (555) 123-4567", // Cambia por tu número real
          location: userInfo.location,
          availability: "Disponible para proyectos freelance y colaboraciones",
        }}
      />
    </PortfolioLayout>
  )
}
