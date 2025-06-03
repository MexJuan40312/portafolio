import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Utility function para combinar clases de Tailwind CSS
 *
 * Esta función combina clsx y tailwind-merge para:
 * - Manejar clases condicionales con clsx
 * - Resolver conflictos de Tailwind con twMerge
 *
 * @param inputs - Array de clases CSS o valores condicionales
 * @returns String con las clases CSS combinadas y optimizadas
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
