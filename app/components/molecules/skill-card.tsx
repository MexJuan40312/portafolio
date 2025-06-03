import type { ReactNode } from "react"
import { cn } from "@/app/lib/utils"

/**
 * MOLECULE: Skill Card Component
 *
 * Combina tipografía e iconos para mostrar habilidades técnicas.
 * Incluye animaciones y efectos hover para mejor UX.
 *
 * @param icon - Icono representativo de la habilidad
 * @param title - Nombre de la habilidad
 * @param description - Descripción breve de la habilidad
 * @param level - Nivel de competencia (opcional)
 */

interface SkillCardProps {
  icon: ReactNode
  title: string
  description: string
  level?: "Básico" | "Intermedio" | "Avanzado" | "Experto"
  className?: string
}

export const SkillCard = ({ icon, title, description, level, className }: SkillCardProps) => {
  // Colores para diferentes niveles de habilidad
  const levelColors = {
    Básico: "text-yellow-400 bg-yellow-400/10",
    Intermedio: "text-blue-400 bg-blue-400/10",
    Avanzado: "text-green-400 bg-green-400/10",
    Experto: "text-purple-400 bg-purple-400/10",
  }

  return (
    <div
      className={cn(
        "group p-6 rounded-xl bg-gray-800/50 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/10",
        className,
      )}
    >
      {/* Icono con efecto de escala en hover */}
      <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-purple-500/10 text-purple-400 group-hover:bg-purple-500/20 transition-colors">
        {icon}
      </div>

      {/* Título de la habilidad */}
      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">{title}</h3>

      {/* Descripción */}
      <p className="text-gray-400 text-sm mb-3 leading-relaxed">{description}</p>

      {/* Badge de nivel si se proporciona */}
      {level && (
        <span className={cn("inline-block px-2 py-1 rounded-full text-xs font-medium", levelColors[level])}>
          {level}
        </span>
      )}
    </div>
  )
}
