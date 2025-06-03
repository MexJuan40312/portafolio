"use client"

import { Button } from "@/app/components/atoms/button"
import { Avatar } from "@/app/components/atoms/avatar"
import { Heading1, Paragraph, HighlightText } from "@/app/components/atoms/typography"
import { SocialLinks } from "@/app/components/molecules/social-links"
import { ChevronDown } from "lucide-react"

/**
 * ORGANISM: Hero Section Component
 *
 * Sección principal que combina múltiples componentes para crear
 * la primera impresión del portafolio. Incluye información personal,
 * llamadas a la acción y navegación.
 *
 * @param userInfo - Información completa del usuario
 * @param socialLinks - Enlaces a redes sociales
 */

interface HeroSectionProps {
  userInfo: {
    name: string
    title: string
    description: string
    avatar?: string
    location?: string
  }
  socialLinks: {
    github?: string
    linkedin?: string
    twitter?: string
    email?: string
  }
}

export const HeroSection = ({ userInfo, socialLinks }: HeroSectionProps) => {
  // Función para scroll suave a la siguiente sección
  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Función para scroll suave a contacto
  const scrollToContact = () => {
    const contactSection = document.querySelector("#contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-900 to-purple-900/20 pt-16 sm:pt-0 pb-16"
    >
      {/* Efectos de fondo decorativos */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Contenido textual */}
          <div className="text-center lg:text-left space-y-6 lg:space-y-8">
            {/* Saludo y ubicación - Oculto en móvil para evitar conflicto con navbar */}
            <div className="space-y-2 hidden sm:block">
              <p className="text-purple-400 font-medium text-lg">👋 Hola, soy</p>
              {userInfo.location && <p className="text-gray-400 text-sm">📍 {userInfo.location}</p>}
            </div>

            {/* Nombre principal */}
            <Heading1 className="animate-fade-in">{userInfo.name}</Heading1>

            {/* Título profesional */}
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl text-purple-300 font-semibold">
                <HighlightText>{userInfo.title}</HighlightText>
              </h2>

              {/* Descripción personal */}
              <Paragraph className="text-lg max-w-2xl">{userInfo.description}</Paragraph>
            </div>

            {/* Enlaces sociales */}
            <div className="flex flex-col sm:flex-row gap-4 items-center lg:items-start">
              <SocialLinks links={socialLinks} variant="secondary" />
            </div>

            {/* Botones de acción */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="primary" size="lg" onClick={scrollToContact} className="group">
                Trabajemos Juntos
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Button>

              <Button variant="ghost" size="lg" onClick={scrollToAbout}>
                Conoce más sobre mí
              </Button>
            </div>
          </div>

          {/* Avatar y elementos visuales */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Avatar principal con efectos */}
              <div className="relative z-10">
                <Avatar
                  src={userInfo.avatar}
                  alt={userInfo.name}
                  size="xl"
                  className="w-64 h-64 md:w-80 md:h-80 shadow-2xl shadow-purple-500/20"
                />
              </div>

              {/* Efectos decorativos alrededor del avatar */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-purple-600/20 rounded-full blur-2xl scale-110 animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Indicador de scroll */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToAbout}
            className="text-purple-400 hover:text-purple-300 transition-colors"
            aria-label="Desplazarse hacia abajo"
          >
            <ChevronDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  )
}
