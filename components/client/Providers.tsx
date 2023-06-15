"use client"

import React, { ReactNode } from "react"
import { ThemeProvider } from "next-themes"

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider defaultTheme="light" enableSystem={true} attribute="class">
      {children}
    </ThemeProvider>
  )
}

export default Providers
