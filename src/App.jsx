import { useState, useEffect } from 'react'
import FloatingMascot from './components/FloatingMascot'
import { PixelRobot, PixelGhost, PixelStar, PixelComputer } from './components/PixelMascots'
import GridBackground from './components/GridBackground'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import SkillsSection from './components/SkillsSection'

function App() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="min-h-screen relative overflow-hidden">
      <GridBackground />

      {/* Floating pixel art mascot characters */}
      <FloatingMascot
        MascotComponent={PixelRobot}
        delay={0}
        startX={10}
        startY={20}
      />
      <FloatingMascot
        MascotComponent={PixelComputer}
        delay={1}
        startX={85}
        startY={30}
      />
      <FloatingMascot
        MascotComponent={PixelGhost}
        delay={2}
        startX={15}
        startY={70}
      />
      <FloatingMascot
        MascotComponent={PixelStar}
        delay={1.5}
        startX={90}
        startY={80}
      />

      {/* Main content */}
      <div className={`relative z-10 transition-all duration-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
      </div>

      {/* Decorative elements */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyber-purple to-transparent opacity-50"></div>
      <div className="fixed bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyber-purple to-transparent opacity-50"></div>
    </div>
  )
}

export default App
