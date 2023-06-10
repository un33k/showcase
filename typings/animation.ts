import { ReactNode } from "react"

export interface RotateComponentProps {
  children: ReactNode
  rotationDegrees?: number
  rotationDuration?: number
  onClick?: () => void
}
