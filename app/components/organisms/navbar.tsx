"use client"

import { useState, useEffect } from "react"
import { Button } from "@/app/components/atoms/button"
import { Avatar } from "@/app/components/atoms/avatar"
import { Menu, X, Download } from "lucide-react"
import { cn } from "@/app/lib/utils"

/**
 * ORGANISM: Navbar Component
 *
 * Barra de navegación principal que combina múltiples moléculas y átomos.
 * Incluye navegación responsive, scroll effects y descarga de CV.
 *
 * @param userInfo - Información básica del usuario
 * @param cvUrl - URL del archivo CV para descarga
 */

interface NavbarProps {
  userInfo: {
    name: string
    avatar?: string
  }
  cvUrl?: string
}

export const Navbar = ({ userInfo, cvUrl }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Detectar scroll para cambiar apariencia del navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Enlaces de navegación
  const navigationLinks = [
    { href: "#home", label: "Inicio" },
    { href: "#about", label: "Acerca de" },
    { href: "#projects", label: "Proyectos" },
    { href: "#contact", label: "Contacto" },
  ]

  // Función para scroll suave a secciones
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false) // Cerrar menú móvil después de navegar
    }
  }

  // Función para descargar CV
  const handleDownloadCV = () => {
    if (cvUrl) {
      const link = document.createElement("a")
      link.href = cvUrl
      link.download = `${userInfo.name}_CV.pdf`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-gray-900/95 backdrop-blur-md border-b border-gray-800/50 shadow-lg" : "bg-transparent",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Avatar y nombre */}
          <div className="flex items-center space-x-3">
            <Avatar src={userInfo.avatar} alt={userInfo.name} size="sm" />
            <span className="text-white font-semibold text-lg">{userInfo.name}</span>
          </div>

          {/* Navegación desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-gray-300 hover:text-purple-400 transition-colors duration-200 font-medium"
              >
                {link.label}
              </button>
            ))}

            {/* Botón de descarga de CV */}
            {cvUrl && (
              <Button variant="primary" size="sm" onClick={handleDownloadCV} className="ml-4">
                <Download className="w-4 h-4 mr-2" />
                Descargar CV
              </Button>
            )}
          </div>

          {/* Botón menú móvil */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Abrir menú de navegación"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Menú móvil */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-800/50">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="block w-full text-left px-3 py-2 text-gray-300 hover:text-purple-400 hover:bg-purple-500/10 rounded-md transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}

              {/* Botón CV en móvil */}
              {cvUrl && (
                <div className="pt-2">
                  <Button variant="primary" size="sm" onClick={handleDownloadCV} className="w-full">
                    <Download className="w-4 h-4 mr-2" />
                    Descargar CV
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
