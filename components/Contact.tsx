'use client'

import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, Twitter, Send, CheckCircle, AlertCircle } from 'lucide-react'

const socialLinks = [
  {
    name: 'Email',
    icon: Mail,
    href: 'mailto:timfmjones@gmail.com',
    color: 'hover:text-red-500',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/tim-jones-647930178/',
    color: 'hover:text-blue-600',
  },
  {
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com/timfmjones',
    color: 'hover:text-gray-800 dark:hover:text-white',
  },
  {
    name: 'Twitter',
    icon: Twitter,
    href: 'https://twitter.com/timjones',
    color: 'hover:text-sky-500',
  },
]

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Get Formspree endpoint from environment variable
  const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')
    
    // Safety check
    if (!FORMSPREE_ENDPOINT) {
      setError('Form configuration error. Please email me directly at timfmjones@gmail.com')
      setIsSubmitting(false)
      return
    }
    
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      })
      
      if (response.ok) {
        setIsSubmitted(true)
        setIsSubmitting(false)
        
        // Reset after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false)
          setFormState({ name: '', email: '', message: '' })
        }, 5000)
      } else {
        throw new Error('Failed to send message')
      }
    } catch (err) {
      setError('Something went wrong. Please try again or email me directly.')
      setIsSubmitting(false)
      
      // Clear error after 5 seconds
      setTimeout(() => setError(''), 5000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="section-padding bg-gray-50 dark:bg-dark-card/50">
      <div className="max-width-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Let's Build Something <span className="gradient-text">Cool Together</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? Want to collaborate? Or just want to say hi? 
            I'd love to hear from you!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting || isSubmitted}
                  className="w-full px-4 py-3 bg-white dark:bg-dark-bg border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting || isSubmitted}
                  className="w-full px-4 py-3 bg-white dark:bg-dark-bg border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting || isSubmitted}
                  rows={5}
                  className="w-full px-4 py-3 bg-white dark:bg-dark-bg border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Error Message */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl text-red-600 dark:text-red-400 text-sm"
                >
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <p>{error}</p>
                </motion.div>
              )}

              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={`w-full py-4 rounded-xl font-medium transition-all transform hover:scale-[1.02] ${
                  isSubmitted
                    ? 'bg-green-500 text-white'
                    : 'bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg'
                } disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                <span className="flex items-center justify-center gap-2">
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      Message Sent! I'll be in touch soon.
                    </>
                  ) : isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </span>
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                I'm always excited to work on new projects and meet fellow developers. 
                Whether you have a specific project in mind or just want to chat about 
                technology, feel free to reach out!
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Find me on</h4>
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-3 glass-effect rounded-xl transition-colors ${link.color}`}
                  >
                    <link.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="p-6 glass-effect rounded-2xl">
              <h4 className="font-semibold mb-3">Quick Response Time</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Usually responds within 24 hours
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  For urgent matters, feel free to reach out via LinkedIn
                </p>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl">
              <h4 className="font-semibold mb-2">Open to</h4>
              <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                <li>• Full-time opportunities</li>
                <li>• Freelance projects</li>
                <li>• Open source collaboration</li>
                <li>• Technical consultations</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}