export interface EducationItem {
    title: string
    period: string
    institution: string
    additionalInfo: string[]
  }
  
  export interface ExperienceItem {
    institution: string
    title: string
    period: string
    company: string
    additionalInfo: string[]
  }
  
  export type TimelineItemProps = (ExperienceItem) & {
    isLast: boolean
  }
  
  