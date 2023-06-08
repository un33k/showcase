"use client"

import { mdiClose, mdiDelete, mdiDotsVertical, mdiMenu } from "@mdi/js"
import Icon from "@mdi/react"
import RotatingComponent from "@sc/libs/animation/rotate"

export default function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-none">
        <RotatingComponent onRotate={() => console.log("Component rotated!")}>
          <button className="btn btn-square btn-ghost">
            <Icon path={mdiMenu} title="Menu" />
          </button>
        </RotatingComponent>
      </div>
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div className="flex-none">
        <RotatingComponent
          rotationDegrees={90}
          onRotate={() => console.log("Component rotated!")}
        >
          <button className="btn btn-square btn-ghost">
            <Icon path={mdiDotsVertical} title="Options" />
          </button>
        </RotatingComponent>
      </div>
    </div>
  )
}
