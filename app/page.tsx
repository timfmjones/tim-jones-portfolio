'use client'

import { useEffect, useState } from 'react'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import NowSection from '../components/NowSection'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Chatbot from '../components/Chatbot'
// Remove this line if using integrated theme toggle in Navigation
// import ThemeToggle from '../components/ThemeToggle'
import { motion } from 'framer-motion'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <main className="min-h-screen bg-white dark:bg-dark-bg transition-colors duration-300">
      <Navigation />
      {/* Remove this line if using integrated theme toggle in Navigation */}
      {/* <ThemeToggle /> */}
      
      {mounted ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Hero />
          <About />
          <Projects />
          <Skills />
          <NowSection />
          <Contact />
          <Footer />
        </motion.div>
      ) : (
        <div>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <NowSection />
          <Contact />
          <Footer />
        </div>
      )}

      <Chatbot />
    </main>
  )
}