import { useEffect, useState } from 'react'

const FloatingMascot = ({
  MascotComponent,
  delay = 0,
  startX = 50,
  startY = 50,
  driftX = 0.3,  // Horizontal drift speed and direction (negative = left, positive = right)
  driftY = 0.1   // Vertical drift speed and direction
}) => {
  const [position, setPosition] = useState({ x: startX, y: startY })
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    const moveInterval = setInterval(() => {
      setPosition(prev => {
        // Add sideways drift with wrapping
        let newX = prev.x + driftX + (Math.random() - 0.5) * 0.5
        let newY = prev.y + driftY + (Math.random() - 0.5) * 0.5

        // Wrap around horizontally
        if (newX > 100) newX = -5
        if (newX < -5) newX = 100

        // Wrap around vertically
        if (newY > 100) newY = -5
        if (newY < -5) newY = 100

        return { x: newX, y: newY }
      })
      setRotation(prev => prev + (Math.random() - 0.5) * 3)
    }, 4000)

    return () => clearInterval(moveInterval)
  }, [driftX, driftY])

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
