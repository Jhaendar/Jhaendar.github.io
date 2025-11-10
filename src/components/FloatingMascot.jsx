import { useEffect, useState } from 'react'

const FloatingMascot = ({ emoji, delay = 0, startX = 50, startY = 50 }) => {
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
        transform: `rotate(${rotation}deg)`,
        animationDelay: `${delay}s`,
      }}
    >
      <div className="text-6xl opacity-20 hover:opacity-40 transition-opacity animate-float">
        {emoji}
      </div>
    </div>
  )
}

export default FloatingMascot
