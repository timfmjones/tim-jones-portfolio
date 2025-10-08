'use client'

import { ButtonHTMLAttributes, forwardRef } from 'react'
import { motion } from 'framer-motion'

interface GlowButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

const GlowButton = forwardRef<HTMLButtonElement, GlowButtonProps>(
  ({ children, className = '', ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`relative px-8 py-3 font-medium rounded-full transition-all ${className}`}
        {...props}
      >
        <span className="relative z-10 text-white">
          {children}
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
      </motion.button>
    )
  }
)

GlowButton.displayName = 'GlowButton'

export default GlowButton