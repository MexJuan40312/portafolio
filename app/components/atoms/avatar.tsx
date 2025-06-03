import Image from "next/image"
import { cn } from "@/app/lib/utils"

/**
 * ATOM: Avatar Component
 *
 * Componente para mostrar la imagen de perfil del usuario.
 * Incluye fallback y diferentes tamaños.
 *
 * @param src - URL de la imagen
 * @param alt - Texto alternativo para accesibilidad
 * @param size - Tamaño del avatar
 * @param className - Clases CSS adicionales
 */

interface AvatarProps {
  src?: string
  alt: string
  size?: "sm" | "md" | "lg" | "xl"
  className?: string
}

export const Avatar = ({ src = "/placeholder.svg?height=200&width=200", alt, size = "md", className }: AvatarProps) => {
  // Tamaños disponibles para el avatar
  const sizes = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
    xl: "w-32 h-32",
  }

  return (
    <div
      className={cn(
        "relative rounded-full overflow-hidden ring-2 ring-purple-500/30 hover:ring-purple-400/50 transition-all duration-300",
        sizes[size],
        className,
      )}
    >
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  )
}
