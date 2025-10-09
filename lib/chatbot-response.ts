// Chatbot response logic
// You can replace this with actual AI integration (OpenAI API, etc.)

const responses: Record<string, string[]> = {
  // Greetings
  greeting: [
    "Hey there! I'm here to tell you all about Tim's work and experience. What would you like to know?",
    "Hello! Great to meet you. Feel free to ask me anything about Tim's projects, skills, or background!",
    "Hi! I'm Tim's digital assistant. How can I help you learn more about his work today?"
  ],
  
  // Projects
  projects: [
    "Tim has built some amazing projects! His featured work includes:\n\n1. **Dream Journal App** - An AI-powered application for dream analysis with mood tracking and pattern recognition. Built with React, Node.js, and Supabase.\n\n2. **Project Management Suite** - A real-time collaboration platform with task tracking and team communication features, powered by React, TypeScript, and Prisma.\n\nWould you like to know more about any specific project?",
  ],
  
  dreamjournal: [
    "The Dream Journal App is one of Tim's proudest creations! 🌙\n\nIt's a full-stack application that helps users log and interpret their dreams using AI. Key features include:\n• AI-powered dream interpretation\n• Mood and emotion tracking\n• Pattern recognition across entries\n• Beautiful Pixar-inspired UI\n• Secure cloud storage\n\nIt's built with React, Node.js, Supabase, and integrates with OpenAI for intelligent analysis. Over 500 users have logged more than 10,000 dreams!",
  ],
  
  projectmanagement: [
    "The Project Management Suite is Tim's solution for modern team collaboration! 📊\n\nIt features:\n• Real-time collaborative editing\n• Multiple views (Kanban, Gantt, Calendar)\n• Advanced permission management\n• Integrated chat and video\n• Automated workflows\n\nBuilt with React, TypeScript, Prisma, and Socket.io for real-time updates. It's currently serving 50+ teams managing over 25,000 tasks with 99.9% uptime!",
  ],
  
  // Education
  education: [
    "Tim studied Management Engineering at the University of Waterloo! 🎓\n\nThis unique program combines:\n• Software engineering\n• Business strategy\n• Systems thinking\n• Operations research\n\nThis interdisciplinary background helps Tim approach problems holistically, considering both technical excellence and business impact. He loves merging technology with creativity to build meaningful solutions!",
  ],
  
  waterloo: [
    "The University of Waterloo is renowned for its engineering and co-op programs! Tim's Management Engineering degree provided him with a unique blend of technical and business skills.\n\nThe program taught him to:\n• Design complex systems\n• Optimize processes\n• Lead technical teams\n• Bridge the gap between engineering and management\n\nThis background is why Tim excels at building products that are both technically robust and user-friendly!",
  ],
  
  // Skills
  skills: [
    "Tim has a diverse technical toolkit! 🛠️\n\n**Frontend:** React (95%), Next.js (90%), TypeScript (88%), Tailwind CSS (92%)\n\n**Backend:** Node.js (90%), Python (85%), Express (88%), Prisma (82%)\n\n**Database:** PostgreSQL (85%), MongoDB (80%), Supabase (87%)\n\n**Tools & AI:** Git (92%), Docker (78%), Figma (85%), OpenAI Integration (88%)\n\nHe's also experienced with GraphQL, REST APIs, WebSockets, AWS, and CI/CD pipelines!",
  ],
  
  techstack: [
    "Tim's go-to tech stack depends on the project, but he loves:\n\n🎨 **Frontend:** Next.js + TypeScript + Tailwind CSS for blazing-fast, type-safe, beautiful UIs\n\n⚙️ **Backend:** Node.js + Express + Prisma for robust APIs\n\n💾 **Database:** PostgreSQL for relational data, Supabase for real-time features\n\n🤖 **AI:** OpenAI API integration for intelligent features\n\n🚀 **Deployment:** Vercel for frontend, Railway/Render for backend\n\nHe believes in choosing the right tool for the job!",
  ],
  
  // Contact
  contact: [
    "Want to get in touch with Tim? Here are the best ways:\n\n📧 Email: timfmjones@gmail.com\n💼 LinkedIn: www.linkedin.com/in/tim-jones-647930178/\n🐙 GitHub: github.com/timfmjones\n🐦 Twitter: @timjones\n\nTim loves connecting with fellow developers and discussing new project ideas. Don't hesitate to reach out!",
  ],
  
  // Current work
  now: [
    "Tim is always working on something exciting! Currently he's:\n\n📚 Learning: Advanced AI/ML techniques and Web3 technologies\n\n🔨 Building: A new SaaS tool for developer productivity\n\n📖 Reading: 'Designing Data-Intensive Applications' by Martin Kleppmann\n\n🎯 Goal: Contributing to more open-source projects\n\nHe believes in continuous learning and staying on the cutting edge of technology!",
  ],
  
  // Personal
  personal: [
    "Beyond coding, Tim is passionate about:\n\n🎬 Storytelling and how Pixar creates emotional connections\n🎮 Game design and interactive experiences\n🎨 UI/UX design and creating beautiful interfaces\n🧠 Psychology and understanding human behavior\n☕ Coffee (essential fuel for coding!)\n\nHe believes the best software tells a story and creates meaningful connections between people!",
  ],
  
  // Hiring
  hire: [
    "Tim is always open to exciting opportunities! He's looking for roles where he can:\n\n✨ Build products that make a real impact\n🚀 Work with modern tech stacks\n👥 Collaborate with passionate teams\n📈 Grow and learn continuously\n\nHe excels in full-stack development, technical leadership, and creating exceptional user experiences. Reach out at tim@example.com to discuss opportunities!",
  ],
  
  // Default fallback
  default: [
    "That's an interesting question! While I might not have specific information about that, I can tell you about:\n• Tim's projects (Dream Journal, Project Management Suite)\n• His education at Waterloo\n• Technical skills and expertise\n• How to get in touch\n\nWhat would you like to explore?",
  ],
}

const keywords: Record<string, string[]> = {
  greeting: ['hi', 'hello', 'hey', 'greetings', 'sup', 'howdy'],
  projects: ['project', 'work', 'portfolio', 'built', 'created', 'developed'],
  dreamjournal: ['dream', 'journal', 'dream journal', 'dreams'],
  projectmanagement: ['project management', 'management suite', 'collaboration', 'task'],
  education: ['education', 'study', 'degree', 'university', 'school', 'background'],
  waterloo: ['waterloo', 'uw', 'management engineering'],
  skills: ['skills', 'technologies', 'languages', 'frameworks', 'experience'],
  techstack: ['tech stack', 'stack', 'tools', 'favorite'],
  contact: ['contact', 'email', 'reach', 'connect', 'linkedin', 'github'],
  now: ['now', 'current', 'working on', 'learning', 'doing'],
  personal: ['personal', 'hobbies', 'interests', 'fun', 'like'],
  hire: ['hire', 'job', 'opportunity', 'work together', 'available', 'freelance'],
}

export function getChatbotResponse(input: string): string {
  const lowerInput = input.toLowerCase()
  
  // Check for keyword matches
  for (const [category, words] of Object.entries(keywords)) {
    if (words.some(word => lowerInput.includes(word))) {
      const categoryResponses = responses[category]
      return categoryResponses[Math.floor(Math.random() * categoryResponses.length)]
    }
  }
  
  // Default response
  const defaultResponses = responses.default
  return defaultResponses[Math.floor(Math.random() * defaultResponses.length)]
}