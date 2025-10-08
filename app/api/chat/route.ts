import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json()
    
    // Simple chatbot response logic
    const response = getChatbotResponse(message)
    
    return NextResponse.json({ response })
  } catch (error) {
    console.error('Chat API error:', error)
    return NextResponse.json(
      { error: 'Failed to process message' },
      { status: 500 }
    )
  }
}

function getChatbotResponse(input: string): string {
  const lowerInput = input.toLowerCase()
  
  const responses: Record<string, string> = {
    greeting: "Hey there! I'm here to tell you all about Tim's work and experience. What would you like to know?",
    projects: "Tim has built some amazing projects! His featured work includes:\n\n1. **Dream Journal App** - An AI-powered application for dream analysis with mood tracking and pattern recognition.\n\n2. **Project Management Suite** - A real-time collaboration platform with task tracking and team communication features.\n\nWould you like to know more about any specific project?",
    dreamjournal: "The Dream Journal App is one of Tim's proudest creations! 🌙\n\nIt's a full-stack application that helps users log and interpret their dreams using AI. Key features include AI-powered interpretation, mood tracking, and pattern recognition.",
    education: "Tim studied Management Engineering at the University of Waterloo! 🎓\n\nThis unique program combines software engineering, business strategy, systems thinking, and operations research.",
    skills: "Tim has a diverse technical toolkit! 🛠️\n\n**Frontend:** React, Next.js, TypeScript, Tailwind CSS\n\n**Backend:** Node.js, Python, Express, Prisma\n\n**Database:** PostgreSQL, MongoDB, Supabase",
    contact: "Want to get in touch with Tim? Here are the best ways:\n\n📧 Email: timfmjones@gmail.com\n💼 LinkedIn: linkedin.com/in/timjones\n🐙 GitHub: github.com/timfmjones",
    default: "That's an interesting question! I can tell you about Tim's projects, education, skills, or how to get in touch. What would you like to explore?"
  }
  
  const keywords: Record<string, string[]> = {
    greeting: ['hi', 'hello', 'hey', 'greetings', 'sup', 'howdy'],
    projects: ['project', 'work', 'portfolio', 'built', 'created'],
    dreamjournal: ['dream', 'journal'],
    education: ['education', 'study', 'degree', 'university', 'waterloo'],
    skills: ['skills', 'tech', 'stack', 'tools'],
    contact: ['contact', 'email', 'reach', 'connect']
  }
  
  for (const [category, words] of Object.entries(keywords)) {
    if (words.some(word => lowerInput.includes(word))) {
      return responses[category]
    }
  }
  
  return responses.default
}