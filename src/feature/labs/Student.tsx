import { Student } from "@/models"
import * as React from "react"
// import { Student } from "../../models"

export interface StudentTagProps {
  student: Student
  onClick?: (student: Student) => void
}

export function StudentTag({ student, onClick }: StudentTagProps) {
  let { name, isHero } = student
  return (
    <div onClick={() => onClick?.(student)}>
      Student: {name} {isHero ? "hero" : "no-hero"}
    </div>
  )
}
