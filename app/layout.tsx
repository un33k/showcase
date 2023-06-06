import { ViewPortIndicator } from "@/libs/ui/debug"

import { interFont } from "@/styles/fonts"

import "@/styles/globals.css"

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${interFont.className}`}>{children}</body>
    </html>
  )
}
