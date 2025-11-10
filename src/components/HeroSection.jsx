import { useState, useEffect } from 'react'

const HeroSection = () => {
  const [textIndex, setTextIndex] = useState(0)
  const titles = ['AI/ML Engineer', 'Electrical Engineer', 'Tech Innovator']

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % titles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full">
        <div className="text-center space-y-8 animate-slide-up">
          {/* Name with glow effect */}
          <div className="space-y-4">
            <div className="inline-block">
              <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold text-glow">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyber-purple-light via-cyber-purple to-neon-purple">
                  Jake Avila
                </span>
              </h1>
              <div className="h-1 mt-4 bg-gradient-to-r from-transparent via-cyber-purple to-transparent animate-glow"></div>
            </div>
          </div>

          {/* Animated title */}
          <div className="h-16 flex items-center justify-center">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-300 transition-all duration-500"
              key={textIndex}
            >
              {titles[textIndex]}
            </h2>
          </div>

          {/* Credentials */}
          <div className="space-y-2 text-lg sm:text-xl text-gray-400">
            <p className="flex items-center justify-center gap-2">
              <span className="text-cyber-purple">⚡</span>
              Licensed Registered Electrical Engineer (PH)
            </p>
            <p className="flex items-center justify-center gap-2">
              <span className="text-cyber-purple">🎓</span>
              Graduated Electrical Engineer
            </p>
          </div>

          {/* Contact */}
          <div className="pt-8">
            <a
              href="mailto:jmavila18.work@gmail.com"
              className="inline-block px-8 py-4 bg-dark-surface border-2 border-cyber-purple text-cyber-purple-light hover:bg-cyber-purple hover:text-white transition-all duration-300 rounded-lg font-mono text-sm sm:text-base animate-glow"
            >
              jmavila18.work@gmail.com
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="pt-16 animate-bounce">
            <div className="w-6 h-10 border-2 border-cyber-purple rounded-full mx-auto flex items-start justify-center p-2">
              <div className="w-1 h-2 bg-cyber-purple rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
