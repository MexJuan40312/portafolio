"use client"

import { Button } from "@/app/components/atoms/button"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

/**
 * MOLECULE: Social Links Component
 *
 * Agrupa múltiples átomos (botones e iconos) para crear
 * una funcionalidad específica: enlaces a redes sociales.
 *
 * @param links - Objeto con URLs de redes sociales
 * @param variant - Estilo visual de los botones
 */

interface SocialLinksProps {
  links: {
    github?: string
    linkedin?: string
    twitter?: string
    email?: string
  }
  variant?: "primary" | "secondary" | "ghost"
}

export const SocialLinks = ({ links, variant = "ghost" }: SocialLinksProps) => {
  // Configuración de iconos y labels para cada red social
  const socialConfig = [
    {
      key: "github",
      icon: Github,
      label: "GitHub",
      url: links.github,
    },
    {
      key: "linkedin",
      icon: Linkedin,
      label: "LinkedIn",
      url: links.linkedin,
    },
    {
      key: "twitter",
      icon: Twitter,
      label: "Twitter",
      url: links.twitter,
    },
    {
      key: "email",
      icon: Mail,
      label: "Email",
      url: links.email ? `mailto:${links.email}` : undefined,
    },
  ]

  return (
    <div className="flex gap-4 flex-wrap">
      {socialConfig.map(({ key, icon: Icon, label, url }) => {
        // Solo renderizar si la URL existe
        if (!url) return null

        return (
          <Button
            key={key}
            variant={variant}
            size="sm"
            className="group"
            onClick={() => window.open(url, "_blank", "noopener,noreferrer")}
            aria-label={`Visitar perfil de ${label}`}
          >
            <Icon className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
            {label}
          </Button>
        )
      })}
    </div>
  )
}
