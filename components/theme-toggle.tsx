'use client'
import { Moon, Sun } from 'lucide-react'
import { Button } from './ui/button'
import { useTheme } from '@/lib/theme-context'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="rounded-full"
    >
      {theme === 'light' ? (
        <Moon className="h-5 w-5" />
      ) : (
    <Sun className="h-5 w-5 text-blue-500" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}