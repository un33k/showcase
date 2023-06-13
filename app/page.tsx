import ContactUs from "@sc/components/server/contactus"
import { Container } from "@sc/components/server/container"
import Hero from "@sc/components/server/hero"
import Navbar from "@sc/components/server/navbar"
import Testimonials from "@sc/components/server/testimonials"
import { ViewPortIndicator } from "@sc/libs/ui/debug"

export default function Home() {
  return (
    <>
      <Hero />
      <Testimonials />
      <ContactUs />
    </>
  )
}
