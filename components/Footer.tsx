'use client'

import { Heart, Code } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 border-t border-gray-200 dark:border-gray-800">
      <div className="max-width-container px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <span>© {currentYear} Tim Jones</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              Built with <Heart className="w-3 h-3 text-red-500" /> and <Code className="w-3 h-3 text-primary" />
            </span>
          </div>
          
          <div className="flex items-center gap-4 text-sm">
            <a
              href="/tim-jones-resume.pdf"
              className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
            >
              Resume
            </a>
            <a
              href="https://github.com/timfmjones"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/tim-jones-647930178/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
        
        <div className="mt-4 text-center text-xs text-gray-500 dark:text-gray-500">
          <p>Designed & developed in Toronto 🍁</p>
        </div>
      </div>
    </footer>
  )
}