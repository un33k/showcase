import { mdiDotsVertical, mdiMenu } from "@mdi/js"
import Icon from "@mdi/react"

import { appConfig } from "@/config/app"

export default function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-none">
        <button className="btn btn-square btn-ghost">
          <Icon
            path={mdiMenu}
            title="Menu"
            size={1}
            horizontal
            vertical
            color="red"
          />
        </button>
      </div>
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div className="flex-none">
        <button className="btn btn-square btn-ghost">
          <Icon
            path={mdiDotsVertical}
            title="Options"
            size={1}
            horizontal
            vertical
            color="red"
          />
        </button>
      </div>
    </div>
  )
}
