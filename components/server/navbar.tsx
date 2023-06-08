"use client"

import { mdiClose, mdiDotsVertical, mdiMenu } from "@mdi/js"
import Icon from "@mdi/react"
import RotateComponent from "@sc/libs/animation/rotate"
import RotateSwapComponent from "@sc/libs/animation/rotateSwap"

export default function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-none">
        <RotateSwapComponent onRotate={() => console.log("Component rotated!")}>
          <button className="btn btn-circle btn-ghost">
            <Icon path={mdiMenu} title="Menu" />
          </button>
          <button className="btn btn-circle btn-ghost">
            <Icon path={mdiClose} title="Close" />
          </button>
        </RotateSwapComponent>
      </div>
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div className="flex-none">
        <RotateComponent
          rotationDegrees={90}
          onRotate={() => console.log("Component rotated!")}
        >
          <button className="btn btn-circle btn-ghost">
            <Icon path={mdiDotsVertical} title="Options" />
          </button>
        </RotateComponent>
      </div>
    </div>
  )
}
