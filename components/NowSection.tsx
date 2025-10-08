'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { BookOpen, Code2, Target, Coffee, Headphones, Zap } from 'lucide-react'

const nowItems = [
  {
    icon: Code2,
    title: 'Building',
    description: 'A SaaS tool for developer productivity with AI-powered code reviews',
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
  },
  {
    icon: BookOpen,
    title: 'Learning',
    description: 'Advanced ML techniques and exploring Web3 technologies',
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10',
  },
  {
    icon: Target,
    title: 'Goal',
    description: 'Contributing to major open-source projects this year',
    color: 'text-green-500',
    bgColor: 'bg-green-500/10',
  },
  {
    icon: Coffee,
    title: 'Reading',
    description: '"Designing Data-Intensive Applications" by Martin Kleppmann',
    color: 'text-orange-500',
    bgColor: 'bg-orange-500/10',
  },
  {
    icon: Headphones,
    title: 'Listening',
    description: 'Lex Fridman Podcast & Syntax.fm for tech insights',
    color: 'text-pink-500',
    bgColor: 'bg-pink-500/10',
  },
  {
    icon: Zap,
    title: 'Exploring',
    description: 'AI-powered creative tools and generative art',
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-500/10',
  },
]

export default function NowSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="now" className="section-padding">
      <div className="max-width-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            What I'm Doing <span className="gradient-text">Now</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A glimpse into my current projects, learning journey, and interests
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {nowItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-6 glass-effect rounded-2xl hover:scale-[1.02] transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className={`p-3 ${item.bgColor} rounded-xl group-hover:scale-110 transition-transform`}>
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Status Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12"
        >
          <div className="max-w-2xl mx-auto p-6 glass-effect rounded-2xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">Current Status</h3>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Available for opportunities
                </span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-400">Location</span>
                <span className="font-medium">Toronto, ON 🇨🇦</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-400">Time Zone</span>
                <span className="font-medium">EST (UTC-5)</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-400">Preferred Stack</span>
                <span className="font-medium">Next.js + TypeScript + Tailwind</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600 dark:text-gray-400">Coffee Count Today</span>
                <span className="font-medium">☕️☕️☕️ (3 and counting...)</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}