import type { ReactNode } from "react"
import { Navbar } from "@/app/components/organisms/navbar"

/**
 * TEMPLATE: Portfolio Layout
 *
 * Plantilla principal que define la estructura base del portafolio.
 * Incluye el navbar y organiza el contenido de manera consistente.
 *
 * @param children - Contenido de las páginas
 * @param userInfo - Información del usuario para el navbar
 * @param cvUrl - URL del CV para descarga
 */

interface PortfolioLayoutProps {
  children: ReactNode
  userInfo: {
    name: string
    avatar?: string
  }
  cvUrl?: string
}

export const PortfolioLayout = ({ children, userInfo, cvUrl }: PortfolioLayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navegación principal */}
      <Navbar userInfo={userInfo} cvUrl={cvUrl} />

      {/* Contenido principal */}
      <main className="relative">{children}</main>

      {/* Footer simple */}
      <footer className="bg-gray-900 border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">© 2024 {userInfo.name}. Hecho con ❤️ y mucho ☕</p>
        </div>
      </footer>
    </div>
  )
}
