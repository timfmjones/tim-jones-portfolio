'use client'

import { useState, useEffect } from 'react'

interface TypingTextProps {
  strings: string[]
  typeSpeed?: number
  deleteSpeed?: number
  delaySpeed?: number
}

export default function TypingText({ 
  strings, 
  typeSpeed = 50, 
  deleteSpeed = 30,
  delaySpeed = 2000 
}: TypingTextProps) {
  const [currentStringIndex, setCurrentStringIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentString = strings[currentStringIndex]
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (currentText !== currentString) {
          setCurrentText(currentString.slice(0, currentText.length + 1))
        } else {
          // Finished typing, wait then start deleting
          setTimeout(() => setIsDeleting(true), delaySpeed)
        }
      } else {
        // Deleting
        if (currentText === '') {
          setIsDeleting(false)
          setCurrentStringIndex((prev) => (prev + 1) % strings.length)
        } else {
          setCurrentText(currentText.slice(0, -1))
        }
      }
    }, isDeleting ? deleteSpeed : typeSpeed)

    return () => clearTimeout(timeout)
  }, [currentText, currentStringIndex, isDeleting, strings, typeSpeed, deleteSpeed, delaySpeed])

  return (
    <span className="gradient-text">
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  )
}