'use client'

import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'dark' | 'light'

type ThemeProviderProps = {
  children: React.ReactNode
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeProviderContext = createContext<ThemeProviderState | undefined>(
  undefined
)

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>('dark')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Get theme from localStorage or system preference
    const storedTheme = localStorage.getItem('theme') as Theme
    if (storedTheme) {
      setTheme(storedTheme)
      document.documentElement.classList.remove('light', 'dark')
      document.documentElement.classList.add(storedTheme)
    } else {
      // Check system preference
      if (window.matchMedia('(prefers-color-scheme: light)').matches) {
        setTheme('light')
        document.documentElement.classList.remove('dark')
        document.documentElement.classList.add('light')
      } else {
        setTheme('dark')
        document.documentElement.classList.remove('light')
        document.documentElement.classList.add('dark')
      }
    }
  }, [])

  const updateTheme = (newTheme: Theme) => {
    setTheme(newTheme)
    
    // Update DOM
    document.documentElement.classList.remove('light', 'dark')
    document.documentElement.classList.add(newTheme)
    
    // Save to localStorage
    localStorage.setItem('theme', newTheme)
    
    console.log('Theme updated to:', newTheme) // Debug log
  }

  const value = {
    theme,
    setTheme: updateTheme,
  }

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)
  if (context === undefined)
    throw new Error('useTheme must be used within a ThemeProvider')
  return context
}