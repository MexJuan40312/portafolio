import type { ButtonHTMLAttributes, ReactNode } from "react"
import { cn } from "@/lib/utils"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: "primary" | "secondary" | "outline"
  size?: "sm" | "md" | "lg"
}

export const Button = ({ children, variant = "primary", size = "md", className, ...props }: ButtonProps) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900"

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

  return (
    <button className={cn(baseStyles, variants[variant], sizes[size], className)} {...props}>
      {children}
    </button>
  )
}
