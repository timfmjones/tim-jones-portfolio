'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { 
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, 
  SiNodedotjs, SiPython, SiTailwindcss, SiPrisma,
  SiPostgresql, SiMongodb, SiSupabase, SiVercel,
  SiGit, SiFigma, SiDocker, SiOpenai,
  SiFlutter, SiSwift, SiExpo, SiFirebase,
  SiAndroid, SiIos, SiXcode
} from 'react-icons/si'

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', icon: SiReact, level: 80, color: '#61DAFB' },
      { name: 'Next.js', icon: SiNextdotjs, level: 75, color: '#000000' },
      { name: 'TypeScript', icon: SiTypescript, level: 82, color: '#3178C6' },
      { name: 'Tailwind', icon: SiTailwindcss, level: 78, color: '#06B6D4' }
    ],
  },
  {
    title: 'Backend & Databases',
    skills: [
      { name: 'Python', icon: SiPython, level: 85, color: '#3776AB' },
      { name: 'Node.js', icon: SiNodedotjs, level: 75, color: '#339933' },
      { name: 'PostgreSQL', icon: SiPostgresql, level: 85, color: '#4169E1' },
      { name: 'MongoDB', icon: SiMongodb, level: 75, color: '#47A248' },
      { name: 'Express', icon: SiNodedotjs, level: 72, color: '#000000' },
    ],
  },
  {
    title: 'Cloud & DevOps',
    skills: [
      { name: 'Git', icon: SiGit, level: 88, color: '#F05032' },
      { name: 'Docker', icon: SiDocker, level: 78, color: '#2496ED' },
      { name: 'Figma', icon: SiFigma, level: 80, color: '#F24E1E' },
      { name: 'Redis', icon: SiNodedotjs, level: 72, color: '#DC382D' },
      { name: 'OpenAI', icon: SiOpenai, level: 82, color: '#412991' },
    ],
  },
  {
    title: 'Mobile',
    skills: [
      { name: 'React Native', icon: SiReact, level: 88, color: '#61DAFB' },
      { name: 'Expo', icon: SiExpo, level: 85, color: '#000020' },
      { name: 'Flutter', icon: SiFlutter, level: 75, color: '#02569B' },
      { name: 'Swift', icon: SiSwift, level: 70, color: '#FA7343' },
    ],
  }
]

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-dark-card/50">
      <div className="max-width-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My toolkit for building exceptional digital experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-semibold text-center mb-6">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ 
                      duration: 0.4, 
                      delay: categoryIndex * 0.1 + skillIndex * 0.05 
                    }}
                    className="group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <skill.icon 
                          className="w-5 h-5 transition-transform group-hover:scale-110" 
                          style={{ color: skill.color }}
                        />
                        <span className="text-sm font-medium">{skill.name}</span>
                      </div>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ 
                          duration: 1, 
                          delay: categoryIndex * 0.1 + skillIndex * 0.05,
                          ease: 'easeOut'
                        }}
                        className="h-full rounded-full relative overflow-hidden"
                        style={{ 
                          background: `linear-gradient(90deg, ${skill.color}CC, ${skill.color})` 
                        }}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse" />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Also experienced with:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['GraphQL', 'REST APIs', 'Jest', 'CI/CD', 'AWS', 'Agile', 'UI/UX', 'WebSockets'].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 text-sm glass-effect rounded-full hover:scale-105 transition-transform"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}