'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { Code2, Rocket, Brain, Heart } from 'lucide-react'
import Image from 'next/image'

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const funFacts = [
    {
      icon: Code2,
      title: 'Code Enthusiast',
      description: 'Started coding at 18, haven\'t stopped since',
    },
    {
      icon: Rocket,
      title: 'Dream Builder',
      description: 'Built an AI powered dream journal app containing story generations and dream analysis',
    },
    {
      icon: Brain,
      title: 'AI Explorer',
      description: 'Integrating AI to create meaningful user experiences',
    },
    {
      icon: Heart,
      title: 'Design Lover',
      description: 'Obsessed with clean code and beautiful interfaces',
    },
  ]

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-dark-card/50">
      <div className="max-width-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Merging technology and creativity to build experiences that matter
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-2xl blur-2xl opacity-30" />
              <div className="relative w-full h-full glass-effect rounded-2xl p-2">
                <Image
                    src="/images/profile.jpeg"  // or .jpeg
                    alt="Tim Jones"
                    fill
                    className="rounded-xl object-cover"
                    priority
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="prose prose-lg dark:prose-invert">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Hey there! I'm <span className="font-semibold text-primary">Tim Jones</span>, 
                a software engineer with a passion for creating digital experiences that 
                leave a lasting impression.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                My journey began at the <span className="font-semibold">University of Waterloo</span>, 
                where I studied Management Engineering—a unique blend of technology, business, 
                and systems thinking. This interdisciplinary background shaped how I approach 
                problems: not just as technical challenges, but as opportunities to create 
                meaningful solutions.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                When I'm not coding, you'll find me exploring the intersection of AI and 
                human creativity, building tools that help people express themselves, or 
                diving deep into the latest web technologies. I believe the best software 
                doesn't just solve problems—it tells a story and creates connections.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-6">
              {funFacts.map((fact, index) => (
                <motion.div
                  key={fact.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="group"
                >
                  <div className="p-4 glass-effect rounded-xl hover:scale-105 transition-transform duration-300">
                    <fact.icon className="w-8 h-8 text-primary mb-2 group-hover:scale-110 transition-transform" />
                    <h4 className="font-semibold text-sm mb-1">{fact.title}</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      {fact.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}