"use client"

import { MoonIcon, SunIcon } from "@heroicons/react/24/outline"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import React from "react"

export function ThemeSwitcher({
  size = "icon-lg",
  variant = "outline",
  ...props
}: React.ComponentProps<typeof Button>) {
  const [mounted, setMounted] = React.useState(false)
  const { theme, setTheme } = useTheme()

  // useEffect runs only on the client, after hydration is complete
  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button
        size="icon-lg"
        variant="outline"
        aria-label="Switch theme"
        className="backdrop-blur-xs"
        {...props}
      />
    )
  }

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light"
    setTheme(nextTheme)
  }

  return (
    <Button
      size={size}
      variant={variant}
      aria-label="Switch theme"
      className="backdrop-blur-xs"
      onClick={toggleTheme}
      {...props}
    >
      {theme === "light" ? <SunIcon /> : <MoonIcon />}
    </Button>
  )
}
