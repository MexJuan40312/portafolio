export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  githubUrl: string
  imageUrl: string
}

export interface PersonalInfo {
  name: string
  title: string
  email: string
  phone: string
  linkedin: string
  github: string
  instagram: string
  youtube: string
}

export interface Experience {
  title: string
  period: string
  description: string[]
}

export interface Education {
  degree: string
  institution: string
  period: string
  description?: string
}
