'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Sparkles } from 'lucide-react'
import ParticleBackground from './ui/ParticleBackground'
import GlowButton from './ui/GlowButton'
import dynamic from 'next/dynamic'

const Typewriter = dynamic(() => import('typewriter-effect'), {
  ssr: false,
})

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null)

  const scrollToProjects = () => {
    const element = document.querySelector('#projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const openChatbot = () => {
    const event = new CustomEvent('openChatbot')
    window.dispatchEvent(event)
  }

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <ParticleBackground />
      
      <div className="relative z-10 max-width-container section-padding text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="inline-flex items-center gap-2 px-4 py-2 glass-effect rounded-full text-sm"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-gray-700 dark:text-gray-300">
              Welcome to my digital space
            </span>
          </motion.div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
            <span className="block mb-2">I turn ideas into</span>
            <span className="gradient-text inline-block min-h-[1.2em]">
              <Typewriter
                options={{
                  strings: [
                    'interactive experiences',
                    'AI-powered applications',
                    'elegant solutions',
                    'digital products',
                    'creative tools',
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                  delay: 80,
                }}
              />
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Software Engineer | Management Engineering Graduate @ Waterloo
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <GlowButton onClick={scrollToProjects}>
              View Projects
            </GlowButton>
            <button
              onClick={openChatbot}
              className="px-8 py-3 border-2 border-primary text-primary rounded-full font-medium hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105"
            >
              Chat With Me
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ArrowDown className="w-6 h-6 text-gray-400" />
          </motion.div>
        </motion.div>
      </div>

      {/* Gradient overlays */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
    </section>
  )
}