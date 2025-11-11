const AboutSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-6xl w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image side */}
          <div className="relative group">
            <div className="absolute inset-0 bg-cyber-purple rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
            <div className="relative border-2 border-cyber-purple rounded-2xl overflow-hidden animate-glow">
              <img
                src="/hero.png"
                alt="Jake Avila"
                className="w-full h-auto object-cover"
                onError={(e) => {
                  e.target.style.display = 'none'
                }}
              />
            </div>
          </div>

          {/* Text side */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-2">
                <span className="text-glow bg-clip-text text-transparent bg-gradient-to-r from-cyber-purple-light to-neon-purple">
                  About Me
                </span>
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-cyber-purple to-transparent"></div>
            </div>

            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p className="border-l-4 border-cyber-purple pl-4 py-2 bg-dark-surface/50 rounded">
                I'm a <span className="text-cyber-purple-light font-semibold">Registered Electrical Engineer</span> from
                the Philippines, bringing a unique blend of electrical engineering fundamentals and
                cutting-edge AI/ML expertise.
              </p>

              <p className="border-l-4 border-cyber-purple pl-4 py-2 bg-dark-surface/50 rounded">
                Currently working as an <span className="text-cyber-purple-light font-semibold">AI/ML Engineer</span>, I bridge
                the gap between traditional engineering principles and modern artificial intelligence,
                creating innovative solutions that push the boundaries of what's possible.
              </p>

              <p className="border-l-4 border-cyber-purple pl-4 py-2 bg-dark-surface/50 rounded">
                My passion lies in leveraging AI and machine learning to solve real-world problems,
                combining analytical thinking with creative problem-solving to deliver impactful results.
              </p>
            </div>

            {/* Stats or highlights */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-dark-surface border border-cyber-purple/30 rounded-lg p-4 hover:border-cyber-purple transition-colors">
                <div className="text-3xl font-bold text-cyber-purple-light">REE</div>
                <div className="text-sm text-gray-400">Licensed REE</div>
              </div>
              <div className="bg-dark-surface border border-cyber-purple/30 rounded-lg p-4 hover:border-cyber-purple transition-colors">
                <div className="text-3xl font-bold text-cyber-purple-light">AI/ML</div>
                <div className="text-sm text-gray-400">Engineer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
