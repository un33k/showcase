"use client"

import { mdiClose, mdiDotsVertical, mdiMenu } from "@mdi/js"
import Icon from "@mdi/react"
import RotateComponent from "@sc/libs/animation/rotate"
import RotateSwapComponent from "@sc/libs/animation/rotateSwap"

export default function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-none">
        <RotateSwapComponent onClick={() => console.log("Component rotated!")}>
          <button className="btn btn-circle btn-ghost">
            <Icon path={mdiMenu} title="Menu" size={1} />
          </button>
          <button className="btn btn-circle btn-ghost">
            <Icon path={mdiClose} title="Close" size={1} />
          </button>
        </RotateSwapComponent>
      </div>
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div className="flex-none">
        <RotateComponent
          rotationDegrees={90}
          onClick={() => console.log("Component rotated!")}
        >
          <button className="btn btn-circle btn-ghost">
            <Icon path={mdiDotsVertical} title="Options" size={1} />
          </button>
        </RotateComponent>
      </div>
    </div>
  )
}
