'use client'

import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, ChevronRight, Calendar, Users, Layers } from 'lucide-react'
import Image from 'next/image'

const projects = [
  {
    id: 1,
    title: 'Dream Journal App',
    subtitle: 'AI-Powered Dream Analysis',
    description: 'A React + Node.js application that helps users log, track, and interpret their dreams using AI. Features include mood tracking, dream patterns analysis, and Pixar-inspired storytelling elements.',
    longDescription: 'This full-stack application revolutionizes dream journaling by combining psychological insights with AI interpretation. Built with a focus on user privacy and meaningful insights, it helps users understand their subconscious patterns and emotional states through their dreams.',
    image: '/images/dream-journal.png', // Add your image
    tech: ['React', 'Node.js', 'Express', 'Supabase', 'OpenAI API', 'Tailwind CSS'],
    features: [
      'AI-powered dream interpretation and analysis',
      'Mood and emotion tracking with visual charts',
      'Pattern recognition across dream entries',
      'Secure cloud storage with end-to-end encryption',
      'Beautiful, intuitive UI inspired by Pixar aesthetics',
    ],
    stats: {
      users: '500+',
      dreams: '10,000+',
      rating: '4.8/5',
    },
    liveLink: 'https://dreamjournal.app',
    githubLink: 'https://github.com/timjones/dream-journal',
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 2,
    title: 'Project Management Suite',
    subtitle: 'Real-time Collaboration Platform',
    description: 'A comprehensive project management tool with real-time collaboration, task tracking, and team communication features. Built with React and powered by Prisma for robust data management.',
    longDescription: 'Designed for modern teams, this platform brings together project planning, resource management, and team collaboration in one seamless interface. Features WebSocket-based real-time updates and a powerful notification system.',
    image: '/images/project-management.png', // Add your image
    tech: ['React', 'TypeScript', 'Prisma', 'PostgreSQL', 'Socket.io', 'Redis'],
    features: [
      'Real-time collaborative editing and updates',
      'Kanban, Gantt, and Calendar views',
      'Advanced permission and role management',
      'Integrated chat and video conferencing',
      'Automated workflow and task dependencies',
    ],
    stats: {
      teams: '50+',
      tasks: '25,000+',
      uptime: '99.9%',
    },
    liveLink: 'https://projecthub.app',
    githubLink: 'https://github.com/timjones/project-hub',
    color: 'from-blue-500 to-cyan-500',
  },
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="projects" className="section-padding">
      <div className="max-width-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Showcasing my best work in full-stack development, AI integration, and user experience design
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-2xl glass-effect hover:scale-[1.02] transition-all duration-500">
                {/* Project Image */}
                <div className={`h-64 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl opacity-50">
                      {project.id === 1 ? '🌙' : '📊'}
                    </span>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-4">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5 text-white" />
                      </a>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                      >
                        <Github className="w-5 h-5 text-white" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
                    <p className="text-primary text-sm font-medium">{project.subtitle}</p>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-mono bg-gray-100 dark:bg-gray-800 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-3 py-1 text-xs font-mono bg-gray-100 dark:bg-gray-800 rounded-full">
                        +{project.tech.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Stats */}
                  <div className="flex justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {project.stats.users}
                      </span>
                      <span className="flex items-center gap-1">
                        <Layers className="w-4 h-4" />
                        {project.id === 1 ? project.stats.dreams : project.stats.tasks}
                      </span>
                    </div>
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex items-center gap-1 text-primary hover:gap-2 transition-all"
                    >
                      View Details
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="max-w-3xl w-full max-h-[90vh] overflow-y-auto bg-white dark:bg-dark-card rounded-2xl p-8"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="space-y-6">
                  <div>
                    <h3 className="text-3xl font-bold mb-2">{selectedProject.title}</h3>
                    <p className="text-primary font-medium">{selectedProject.subtitle}</p>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {selectedProject.longDescription}
                  </p>

                  <div>
                    <h4 className="font-semibold mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <ChevronRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Technology Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm font-mono bg-gray-100 dark:bg-gray-800 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4 pt-6">
                    <a
                      href={selectedProject.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-6 py-3 bg-primary text-white rounded-full text-center hover:scale-105 transition-transform"
                    >
                      View Live Site
                    </a>
                    <a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-6 py-3 border-2 border-primary text-primary rounded-full text-center hover:bg-primary hover:text-white transition-all"
                    >
                      View on GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}