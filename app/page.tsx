// app/page.tsx
import { HomeTemplate } from "@/components/templates/HomeTemplate"
import { personalInfo, projects, experiences, education } from "@/lib/data" 

export default function Home() {
  return (
    <HomeTemplate 
      personalInfo={personalInfo} 
      projects={projects} 
      experiences={experiences} 
      education={education} 
    />
  )
}