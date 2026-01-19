"use client"

import Image from "next/image"
import type { PersonalInfo } from "@/types"
import { SocialLinks } from "@/components/molecules/SocialLinks"
import { Button } from "@/components/atoms/Button"
import { Download, ChevronDown } from "lucide-react"

interface HeroSectionProps {
  personalInfo: PersonalInfo
}

export const HeroSection = ({ personalInfo }: HeroSectionProps) => {
  const scrollToProjects = () => {
    const element = document.querySelector("#proyectos")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Fondo con gradiantes */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-gray-900 to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Imagen de perfil */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-purple-500/30 shadow-2xl shadow-purple-500/20">
                <Image
                  src="/nutritec_inicio.png"
                  alt={personalInfo.name}
                  width={320}
                  height={320}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-purple-800 rounded-full opacity-20 blur-xl"></div>
            </div>
          </div>

          {/* Contenido */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="block">{personalInfo.name}</span>
              <span className="block text-2xl md:text-3xl bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mt-2">
                {personalInfo.title}
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
              Pasante de Ingeniería en sistemas computacionales, con +3 años de experiencia en desarrollo web Full Stack en Frameworks modernos como Next.js, 
              express.js y Laravel, bases de datos SQL y NoSQL, microservicios e integración de inteligencia artificial.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button variant="primary" size="lg" onClick={scrollToProjects} className="flex items-center gap-2">
                Ver Proyectos
                <ChevronDown size={20} />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.open("/documents/CV_JR_Ing.pdf", "_blank")}
                className="flex items-center gap-2"
              >
                <Download size={20} />
                Descargar CV
              </Button>
            </div>

            <div className="flex justify-center lg:justify-start">
              <SocialLinks personalInfo={personalInfo} />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-purple-400" size={24} />
      </div>
    </section>
  )
}
