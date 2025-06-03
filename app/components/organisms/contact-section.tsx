import { Heading2, Paragraph } from "@/app/components/atoms/typography"
import { ContactForm } from "@/app/components/molecules/contact-form"
import { SocialLinks } from "@/app/components/molecules/social-links"
import { MapPin, Mail, Phone, Clock } from "lucide-react"

/**
 * ORGANISM: Contact Section Component
 *
 * Sección de contacto completa que incluye formulario,
 * información de contacto y enlaces sociales.
 *
 * @param contactInfo - Información de contacto del desarrollador
 * @param socialLinks - Enlaces a redes sociales
 */

interface ContactSectionProps {
  contactInfo?: {
    email?: string
    phone?: string
    location?: string
    availability?: string
  }
  socialLinks: {
    github?: string
    linkedin?: string
    twitter?: string
    email?: string
  }
}

export const ContactSection = ({ contactInfo, socialLinks }: ContactSectionProps) => {
  // Información de contacto por defecto
  const defaultContactInfo = {
    email: "juanraul@correo.com",
    phone: "+1 (555) 123-4567",
    location: "Toluca, México",
    availability: "Disponible para proyectos freelance",
  }

  const contact = contactInfo || defaultContactInfo

  return (
    <section id="contact" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado de la sección */}
        <div className="text-center mb-16">
          <Heading2>Trabajemos Juntos</Heading2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-purple-600 mx-auto mt-4 mb-6"></div>
          <Paragraph className="text-lg max-w-3xl mx-auto">
            ¿Tienes un proyecto en mente? Me encantaría escuchar tus ideas y ayudarte a convertirlas en realidad. No
            dudes en contactarme para discutir cómo podemos trabajar juntos.
          </Paragraph>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Información de contacto */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-purple-300 mb-6">Información de Contacto</h3>

              <div className="space-y-6">
                {/* Email */}
                {contact.email && (
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Email</h4>
                      <a
                        href={`mailto:${contact.email}`}
                        className="text-gray-300 hover:text-purple-400 transition-colors"
                      >
                        {contact.email}
                      </a>
                    </div>
                  </div>
                )}

                {/* Teléfono */}
                {contact.phone && (
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Teléfono</h4>
                      <a
                        href={`tel:${contact.phone}`}
                        className="text-gray-300 hover:text-purple-400 transition-colors"
                      >
                        {contact.phone}
                      </a>
                    </div>
                  </div>
                )}

                {/* Ubicación */}
                {contact.location && (
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Ubicación</h4>
                      <p className="text-gray-300">{contact.location}</p>
                    </div>
                  </div>
                )}

                {/* Disponibilidad */}
                {contact.availability && (
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center">
                      <Clock className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Disponibilidad</h4>
                      <p className="text-gray-300">{contact.availability}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Enlaces sociales */}
            <div>
              <h3 className="text-xl font-semibold text-purple-300 mb-4">Sígueme en Redes</h3>
              <SocialLinks links={socialLinks} variant="secondary" />
            </div>

            {/* Tiempo de respuesta */}
            <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-6">
              <h4 className="text-purple-300 font-medium mb-2">⚡ Respuesta Rápida</h4>
              <p className="text-gray-300 text-sm">
                Normalmente respondo dentro de las primeras 24 horas. Para proyectos urgentes, no dudes en llamarme
                directamente.
              </p>
            </div>
          </div>

          {/* Formulario de contacto */}
          <div>
            <div className="bg-gray-800/30 rounded-xl p-8 border border-gray-700/50">
              <h3 className="text-2xl font-semibold text-purple-300 mb-6">Envíame un Mensaje</h3>
              <ContactForm />
            </div>
          </div>
        </div>

        {/* Call to action adicional */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-purple-500/10 to-purple-600/10 rounded-xl border border-purple-500/20">
          <h3 className="text-xl font-semibold text-white mb-4">¿Prefieres una llamada directa?</h3>
          <Paragraph className="mb-6">
            A veces es más fácil hablar directamente. Agenda una llamada de 15 minutos para discutir tu proyecto sin
            compromiso.
          </Paragraph>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {contact.phone && (
              <a
                href={`tel:${contact.phone}`}
                className="inline-flex items-center justify-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors"
              >
                <Phone className="w-4 h-4 mr-2" />
                Llamar Ahora
              </a>
            )}
            {contact.email && (
              <a
                href={`mailto:${contact.email}?subject=Consulta sobre proyecto`}
                className="inline-flex items-center justify-center px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-medium transition-colors"
              >
                <Mail className="w-4 h-4 mr-2" />
                Enviar Email
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
