import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

/**
 * Root Layout
 *
 * Layout raíz de la aplicación Next.js que define la estructura HTML base
 * y configuraciones globales como fuentes y metadatos.
 */

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Portafolio web",
  description: "Portafolio profesional de desarrollador web especializado en React, Next.js y tecnologías modernas.",
  keywords: ["desarrollador web", "react", "next.js", "typescript", "portafolio"],
  authors: [{ name: "Juan Raúl Gonzalez Narvaez" }],
  viewport: "width=device-width, initial-scale=1",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
