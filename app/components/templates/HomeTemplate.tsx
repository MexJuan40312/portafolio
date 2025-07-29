import type { PersonalInfo, Project, Experience, Education } from "@/app/types"
import { Navbar } from "@/app/components/organisms/Navbar"
import { HeroSection } from "@/app/components/organisms/HeroSection"
import { AboutSection } from "@/app/components/organisms/AboutSection"
import { ExperienceSection } from "@/app/components/organisms/ExperienceSection"
import { ProjectsSection } from "@/app/components/organisms/ProjectsSection"
import { EducationSection } from "@/app/components/organisms/EducationSection"
import { Footer } from "@/app/components/organisms/Footer"

interface HomeTemplateProps {
  personalInfo: PersonalInfo
  projects: Project[]
  experiences: Experience[]
  education: Education[]
}

export const HomeTemplate = ({ personalInfo, projects, experiences, education }: HomeTemplateProps) => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <HeroSection personalInfo={personalInfo} />
      <AboutSection />
      <ExperienceSection experiences={experiences} />
      <ProjectsSection projects={projects} />
      <EducationSection education={education} />
      <Footer personalInfo={personalInfo} />
    </div>
  )
}
