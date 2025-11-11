import { useEffect, useState } from 'react'

const FloatingMascot = ({ MascotComponent, delay = 0, startX = 50, startY = 50 }) => {
  const [position, setPosition] = useState({ x: startX, y: startY })
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    const moveInterval = setInterval(() => {
      setPosition(prev => ({
        x: prev.x + (Math.random() - 0.5) * 2,
        y: prev.y + (Math.random() - 0.5) * 2,
      }))
      setRotation(prev => prev + (Math.random() - 0.5) * 10)
    }, 2000)

    return () => clearInterval(moveInterval)
  }, [])

  return (
    <div
      className="fixed pointer-events-none z-0 transition-all duration-2000 ease-in-out"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        transform: `rotate(${rotation}deg) scale(1.5)`,
        animationDelay: `${delay}s`,
      }}
    >
      <div className="opacity-30 hover:opacity-50 transition-opacity animate-float drop-shadow-lg">
        <MascotComponent />
      </div>
    </div>
  )
}

export default FloatingMascot
