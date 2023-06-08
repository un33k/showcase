import React, { ReactNode, useState } from "react"

interface RotateComponentProps {
  children: ReactNode
  rotationDegrees?: number
  onRotate?: () => void
}

const RotateComponent: React.FC<RotateComponentProps> = ({
  children,
  rotationDegrees = 180,
  onRotate,
}) => {
  const [rotation, setRotation] = useState<number>(0)

  const handleClick = () => {
    const newRotation = rotation === 0 ? rotationDegrees : 0
    setRotation(newRotation)

    if (onRotate) {
      onRotate()
    }
  }

  return (
    <div
      onClick={handleClick}
      style={{
        transition: "transform 0.6s",
        transform: `rotate(${rotation}deg)`,
        transformOrigin: "center",
      }}
    >
      {children}
    </div>
  )
}

export default RotateComponent
