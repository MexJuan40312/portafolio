import type { PersonalInfo } from "@/app/types"
import { SocialLinks } from "@/app/components/molecules/SocialLinks"

interface FooterProps {
  personalInfo: PersonalInfo
}

export const Footer = ({ personalInfo }: FooterProps) => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-4">{personalInfo.name}</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Estudiante de Ingeniería en Sistemas Computacionales especializado en desarrollo web. Siempre abierto a
            nuevas oportunidades y colaboraciones.
          </p>

          <div className="flex justify-center mb-8">
            <SocialLinks personalInfo={personalInfo} showLabels />
          </div>

          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} {personalInfo.name}. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
