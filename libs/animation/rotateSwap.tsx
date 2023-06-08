import React, { ReactNode, useState } from "react"
import classNames from "classnames"

import { tm } from "../util/style/merge"

interface RotateSwapComponentProps {
  children: ReactNode
  rotationDegrees?: number
  onRotate?: () => void
}

const RotateSwapComponent: React.FC<RotateSwapComponentProps> = ({
  children,
  rotationDegrees = 180,
  onRotate,
}) => {
  const [rotation, setRotation] = useState(0)
  const [currentChildIndex, setCurrentChildIndex] = useState(0)

  const handleClick = () => {
    const newRotation = rotation === 0 ? rotationDegrees : 0
    setRotation(newRotation)

    // Swap the child
    setCurrentChildIndex((currentChildIndex + 1) % 2)

    if (onRotate) {
      onRotate()
    }
  }

  return (
    <div
      onClick={handleClick}
      style={{
        transition: "transform 0.4s",
        transform: `rotate(${rotation}deg)`,
        transformOrigin: "center",
      }}
    >
      {React.Children.map(children, (child, index) => (
        <div
          key={index}
          className={tm({ hidden: index !== currentChildIndex })}
        >
          {child}
        </div>
      ))}
    </div>
  )
}

export default RotateSwapComponent
