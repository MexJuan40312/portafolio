import type { ButtonHTMLAttributes, ReactNode } from "react"
import { cn } from "@/app/lib/utils"

/**
 * ATOM: Button Component
 *
 * Componente básico reutilizable para botones.
 * Sigue el principio de responsabilidad única y es altamente configurable.
 *
 * @param variant - Estilo visual del botón (primary, secondary, ghost)
 * @param size - Tamaño del botón (sm, md, lg)
 * @param children - Contenido del botón
 * @param className - Clases CSS adicionales
 */

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost"
  size?: "sm" | "md" | "lg"
  children: ReactNode
  className?: string
}

export const Button = ({ variant = "primary", size = "md", children, className, ...props }: ButtonProps) => {
  // Estilos base del botón con transiciones suaves
  const baseStyles =
    "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"

  // Variantes de estilo usando colores morados luminosos
  const variants = {
    primary:
      "bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white shadow-lg hover:shadow-purple-500/25",
    secondary: "bg-gray-800 hover:bg-gray-700 text-purple-300 border border-purple-500/30 hover:border-purple-400",
    ghost: "text-purple-300 hover:text-purple-200 hover:bg-purple-500/10",
  }

  // Tamaños del botón
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  }

  return (
    <button className={cn(baseStyles, variants[variant], sizes[size], className)} {...props}>
      {children}
    </button>
  )
}
