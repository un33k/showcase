import React, { ReactNode, useState } from "react"

interface RotatingComponentProps {
  children: ReactNode
  degree?: number
  onRotate?: () => void
}

const RotatingComponent: React.FC<RotatingComponentProps> = ({
  children,
  degree = 180,
  onRotate,
}) => {
  const [rotation, setRotation] = useState<number>(degree)

  const handleClick = () => {
    const newRotation = rotation === 0 ? degree : 0
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

export default RotatingComponent
