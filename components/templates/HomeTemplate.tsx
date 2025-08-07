import type { PersonalInfo, Project, Experience, Education } from "@/types"
import { Navbar } from "@/components/organisms/Navbar"
import { HeroSection } from "@/components/organisms/HeroSection"
import { AboutSection } from "@/components/organisms/AboutSection"
import { ExperienceSection } from "@/components/organisms/ExperienceSection"
import { ProjectsSection } from "@/components/organisms/ProjectsSection"
import { EducationSection } from "@/components/organisms/EducationSection"
import { Footer } from "@/components/organisms/Footer"

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
