import { log } from "logger";

import AboutContent from "../components/page";

export default function About() {
  log("Hey! This is About Us.");
  return <AboutContent />;
}
