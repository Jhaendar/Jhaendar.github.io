const SkillsSection = () => {
  const skills = [
    {
      category: 'AI & Machine Learning',
      icon: '🤖',
      items: ['Deep Learning', 'Neural Networks', 'Computer Vision', 'NLP', 'Model Training', 'MLOps']
    },
    {
      category: 'Electrical Engineering',
      icon: '⚡',
      items: ['Circuit Design', 'Power Systems', 'Control Systems', 'Electronics', 'Signal Processing', 'Embedded Systems']
    },
    {
      category: 'Programming & Tools',
      icon: '💻',
      items: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Git', 'Docker']
    },
    {
      category: 'Data & Analytics',
      icon: '📊',
      items: ['Data Analysis', 'Statistical Modeling', 'Data Visualization', 'Feature Engineering', 'Big Data', 'SQL']
    }
  ]

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-7xl w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-2">
            <span className="text-glow bg-clip-text text-transparent bg-gradient-to-r from-cyber-purple-light to-neon-purple">
              Skills & Expertise
            </span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-cyber-purple to-transparent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skillGroup, index) => (
            <div
              key={index}
              className="bg-dark-surface border border-cyber-purple/30 rounded-xl p-6 hover:border-cyber-purple transition-all duration-300 hover:shadow-lg hover:shadow-cyber-purple/20 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-4xl group-hover:animate-float">{skillGroup.icon}</div>
                <h3 className="text-2xl font-bold text-cyber-purple-light">
                  {skillGroup.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-dark-bg border border-cyber-purple/40 text-gray-300 rounded-full text-sm hover:bg-cyber-purple/20 hover:border-cyber-purple transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="mt-16 text-center">
          <div className="bg-dark-surface border border-cyber-purple/30 rounded-xl p-8 max-w-3xl mx-auto">
            <p className="text-xl text-gray-300 leading-relaxed">
              <span className="text-cyber-purple-light font-semibold">"</span>
              I do AI stuff by the way.
              <span className="text-cyber-purple-light font-semibold">"</span>
            </p>
            <div className="mt-4 flex justify-center gap-2">
              <div className="w-2 h-2 bg-cyber-purple rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-cyber-purple rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 bg-cyber-purple rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 text-center text-gray-500 text-sm">
          <p>© 2025 Jake Avila. Built with React, Vite, and Tailwind CSS.</p>
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
