const GridBackground = () => {
  return (
    <div className="fixed inset-0 z-0">
      {/* Animated grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-surface to-dark-bg"></div>

      {/* Radial gradient spotlight effect */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.3) 0%, transparent 70%)',
        }}
      ></div>

      {/* Animated scan line effect */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full animate-pulse bg-gradient-to-b from-transparent via-cyber-purple to-transparent"></div>
      </div>
    </div>
  )
}

export default GridBackground
