import { mdiDotsVertical, mdiMenu } from "@mdi/js"
import Icon from "@mdi/react"

export default function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-none">
        <button className="btn btn-square btn-ghost">
          <Icon path={mdiMenu} title="Menu" />
        </button>
      </div>
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div className="flex-none">
        <button className="btn btn-square btn-ghost">
          <Icon path={mdiDotsVertical} title="Options" />
        </button>
      </div>
    </div>
  )
}
