import { Github, Linkedin, Instagram, Mail, Phone, Youtube } from "lucide-react"
import type { PersonalInfo, Project } from "@/types"

interface SocialLinksProps {
  personalInfo: PersonalInfo
  showLabels?: boolean
}

export const SocialLinks = ({ personalInfo, showLabels = false }: SocialLinksProps) => {
  const links = [
    {
      icon: Github,
      href: personalInfo.github,
      label: "GitHub",
      color: "hover:text-gray-300",
    },
    {
      icon: Linkedin,
      href: personalInfo.linkedin,
      label: "LinkedIn",
      color: "hover:text-blue-400",
    },
    {
      icon: Instagram,
      href: personalInfo.instagram,
      label: "Instagram",
      color: "hover:text-pink-400",
    },
    {
      icon: Youtube,
      href: "https://www.youtube.com/@Mex_juamba",
      label: "YouTube",
      color: "hover:text-red-600",
    },
    {
      icon: Mail,
      href: `mailto:${personalInfo.email}`,
      label: "Email",
      color: "hover:text-purple-400",
    },
    {
      icon: Phone,
      href: `tel:${personalInfo.phone}`,
      label: "Teléfono",
      color: "hover:text-green-400",
    },
  ]

  return (
    <div className="flex flex-wrap gap-4">
      {links.map((link, index) => {
        const Icon = link.icon
        return (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 text-gray-400 transition-colors duration-200 ${link.color}`}
          >
            <Icon size={20} />
            {showLabels && <span className="text-sm">{link.label}</span>}
          </a>
        )
      })}
    </div>
  )
}

