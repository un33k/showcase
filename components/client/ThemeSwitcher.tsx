"use client"

import React, { useEffect, useState } from "react"
import { MoonIcon } from "@heroicons/react/20/solid"
import { SunIcon } from "@heroicons/react/24/outline"
import { useTheme } from "next-themes"

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div>
      {theme && (
        <button
          type="button"
          className="flex items-center pr-4 text-current cursor-pointer"
          onClick={() => {
            setTheme(theme === "dark" ? "light" : "dark")
          }}
        >
          {theme === "dark" ? (
            <MoonIcon className="w-6" />
          ) : theme === "light" ? (
            <SunIcon className="w-6" />
          ) : null}
        </button>
      )}
    </div>
  )
}
