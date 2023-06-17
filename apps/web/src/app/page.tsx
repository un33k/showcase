import { log } from "logger"
import { CounterButton, NewTabLink } from "ui"

export const metadata = {
  title: "Store | Kitchen Sink",
}

export default function Store() {
  log("Hey! This is Home.")
  return (
    <div className="container">
      <h1 className="title">
        Store <br />
        <span>Kitchen Sink</span>
      </h1>
      <CounterButton />
      <p className="description m-10">
        Built With{" "}
        <NewTabLink href="https://turbo.build/repo">Turborepo</NewTabLink> +{" "}
        <NewTabLink href="https://nextjs.org/">Next.js</NewTabLink>
        <NewTabLink href="/about">About Us</NewTabLink>
      </p>
    </div>
  )
}
