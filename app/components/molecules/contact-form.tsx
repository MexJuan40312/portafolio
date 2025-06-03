"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/app/components/atoms/button"
import { Send } from "lucide-react"
import { cn } from "@/app/lib/utils"

/**
 * MOLECULE: Contact Form Component
 *
 * Formulario de contacto visual (solo frontend).
 * No incluye funcionalidad de envío real.
 */

interface ContactFormProps {
  className?: string
}

interface FormData {
  name: string
  email: string
  message: string
}

export const ContactForm = ({ className }: ContactFormProps) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  })

  // Manejar cambios en los inputs
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  // Manejar "envío" del formulario (solo visual)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(
      "Este es un portafolio de demostración. Para contacto real, usa los enlaces de redes sociales o email directo.",
    )
  }

  return (
    <form onSubmit={handleSubmit} className={cn("space-y-6", className)}>
      {/* Campo Nombre */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-purple-300 mb-2">
          Nombre *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 hover:border-gray-500 rounded-lg text-white placeholder-gray-400 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          placeholder="Tu nombre completo"
        />
      </div>

      {/* Campo Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-purple-300 mb-2">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 hover:border-gray-500 rounded-lg text-white placeholder-gray-400 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          placeholder="tu_correo@email.com"
        />
      </div>

      {/* Campo Mensaje */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-purple-300 mb-2">
          Mensaje *
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleInputChange}
          className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 hover:border-gray-500 rounded-lg text-white placeholder-gray-400 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-vertical"
          placeholder="Cuéntame sobre tu proyecto o idea..."
        />
      </div>

      {/* Botón de envío */}
      <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto">
        <Send className="w-4 h-4 mr-2" />
        Enviar Mensaje (Demo)
      </Button>

      {/* Nota informativa */}
      <div className="text-sm text-gray-400 bg-gray-800/30 p-3 rounded-lg">
        💡 <strong>Nota:</strong> Este es un formulario de demostración. Para contacto real, utiliza los enlaces de
        redes sociales o email directo.
      </div>
    </form>
  )
}
