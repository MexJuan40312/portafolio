import { Badge } from "@/app/components/atoms/Badge"

interface SkillSectionProps {
  title: string
  skills: string[]
}

export const SkillSection = ({ title, skills }: SkillSectionProps) => {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold text-white mb-3">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge key={index} variant="default">
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  )
}
