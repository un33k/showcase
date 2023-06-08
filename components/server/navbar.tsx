"use client"

import { mdiClose, mdiDelete, mdiDotsVertical, mdiMenu } from "@mdi/js"
import Icon from "@mdi/react"
import RotatingComponent from "@sc/libs/animation/rotate"
import { useMorph } from "react-morph"

export default function Navbar() {
  const morph = useMorph()
  return (
    <div className="navbar bg-base-100">
      <div className="flex-none">
        <RotatingComponent>
          <button className="btn btn-square btn-ghost">
            <Icon path={mdiMenu} title="Menu" />
          </button>
        </RotatingComponent>

        {/* <button {...morph} className="btn btn-square btn-ghost">
          <Icon path={mdiClose} title="Menu" />
        </button> */}
      </div>
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div className="flex-none">
        <RotatingComponent>
          <button className="btn btn-square btn-ghost">
            <Icon path={mdiDotsVertical} title="Options" />
          </button>
        </RotatingComponent>
      </div>
    </div>
  )
}
