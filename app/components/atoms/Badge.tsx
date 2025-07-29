import type { ReactNode } from "react"
import { cn } from "@/app/lib/utils"

interface BadgeProps {
  children: ReactNode
  variant?: "default" | "purple" | "gray"
  className?: string
}

export const Badge = ({ children, variant = "default", className }: BadgeProps) => {
  const variants = {
    default: "bg-purple-900/50 text-purple-300 border-purple-700",
    purple: "bg-purple-600 text-white",
    gray: "bg-gray-700 text-gray-300 border-gray-600",
  }

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border",
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  )
}
