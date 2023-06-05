import { Inter, Lora, Work_Sans } from "next/font/google"

export const interFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

export const loraFont = Lora({
  variable: "--font-title",
  subsets: ["latin"],
  weight: "600",
  display: "swap",
})
