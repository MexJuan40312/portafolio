import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react"
import { cn } from "@/lib/utils"

// 1. Definimos las props visuales (comunes a ambos)
interface ButtonBaseProps {
  children: ReactNode
  variant?: "primary" | "secondary" | "outline"
  size?: "sm" | "md" | "lg"
  className?: string
}

// 2. Definimos las props para cuando actúa como <button>
// "href?: never" asegura que no puedas pasarle href a un botón por error
type ButtonAsButton = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never
  }

// 3. Definimos las props para cuando actúa como <a>
// "href: string" es obligatorio aquí
type ButtonAsLink = ButtonBaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string
  }

// 4. Unimos los tipos
type ButtonProps = ButtonAsButton | ButtonAsLink

export const Button = ({ 
  children, 
  variant = "primary", 
  size = "md", 
  className, 
  ...props 
}: ButtonProps) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:pointer-events-none"

  const variants = {
    primary:
      "bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white shadow-lg hover:shadow-purple-500/25",
    secondary: "bg-gray-800 hover:bg-gray-700 text-white border border-gray-700",
    outline: "border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white",
  }

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  }

  const combinedStyles = cn(baseStyles, variants[variant], sizes[size], className)

  // Lógica de Polimorfismo:
  // Si existe 'href' en las props, renderizamos un <a>
  if ("href" in props && props.href) {
    return (
      <a className={combinedStyles} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    )
  }

  // Si no, renderizamos un <button>
  return (
    <button className={combinedStyles} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  )
}