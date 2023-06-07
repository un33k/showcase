import Navbar from "@sc/components/server/navbar"
import { ViewPortIndicator } from "@sc/libs/ui/debug"

export default function Home() {
  return (
    <div className="flex flex-col p-2 border-2  border-red-500">
      <Navbar />
    </div>
  )
}
