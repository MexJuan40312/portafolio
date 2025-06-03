import type { ReactNode } from "react"
import { cn } from "@/app/lib/utils"

/**
 * ATOM: Typography Components
 *
 * Componentes de tipografía reutilizables que mantienen consistencia
 * visual en todo el proyecto.
 */

interface TypographyProps {
  children: ReactNode
  className?: string
}

// Título principal - usado para encabezados importantes
export const Heading1 = ({ children, className }: TypographyProps) => (
  <h1
    className={cn(
      "text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent leading-tight",
      className,
    )}
  >
    {children}
  </h1>
)

// Subtítulo - usado para secciones
export const Heading2 = ({ children, className }: TypographyProps) => (
  <h2 className={cn("text-2xl md:text-3xl font-semibold text-purple-300 mb-4", className)}>{children}</h2>
)

// Texto de párrafo - usado para contenido general
export const Paragraph = ({ children, className }: TypographyProps) => (
  <p className={cn("text-gray-300 leading-relaxed", className)}>{children}</p>
)

// Texto destacado - usado para información importante
export const HighlightText = ({ children, className }: TypographyProps) => (
  <span className={cn("text-purple-400 font-medium", className)}>{children}</span>
)
