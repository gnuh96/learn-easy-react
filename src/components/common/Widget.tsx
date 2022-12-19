import React, { ReactNode } from "react"

export interface WidgetProps {
  title: string
  children: ReactNode
}

export function Widget({ title, children }: WidgetProps) {
  return (
    <div>
      <p>{title}</p>

      <div>{children}</div>
    </div>
  )
}
