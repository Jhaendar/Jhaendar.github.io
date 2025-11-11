// Classic happy takodachi with -w- face
const PixelTakodachi = () => {
  return (
    <svg width="40" height="40" viewBox="0 0 16 16" className="pixel-art">
      {/* Antenna */}
      <rect x="7" y="1" width="2" height="2" fill="#a855f7"/>
      {/* Head */}
      <rect x="5" y="3" width="6" height="5" fill="#c084fc"/>
      <rect x="5" y="3" width="6" height="1" fill="#a855f7"/>
      {/* Eyes */}
      <rect x="6" y="5" width="1" height="1" fill="#0a0a0f"/>
      <rect x="9" y="5" width="1" height="1" fill="#0a0a0f"/>
      {/* Body */}
      <rect x="4" y="8" width="8" height="5" fill="#a855f7"/>
      <rect x="6" y="9" width="1" height="1" fill="#c084fc"/>
      <rect x="9" y="9" width="1" height="1" fill="#c084fc"/>
      <rect x="6" y="11" width="1" height="1" fill="#c084fc"/>
      <rect x="9" y="11" width="1" height="1" fill="#c084fc"/>
      {/* Arms */}
      <rect x="3" y="9" width="1" height="3" fill="#c084fc"/>
      <rect x="12" y="9" width="1" height="3" fill="#c084fc"/>
      {/* Legs */}
      <rect x="5" y="13" width="2" height="2" fill="#c084fc"/>
      <rect x="9" y="13" width="2" height="2" fill="#c084fc"/>
    </svg>
  )
}

const PixelGhost = () => {
  return (
    <svg width="40" height="40" viewBox="0 0 16 16" className="pixel-art">
      {/* Body */}
      <rect x="4" y="3" width="8" height="10" fill="#bf40bf"/>
      <rect x="5" y="2" width="6" height="1" fill="#bf40bf"/>
      {/* Eyes */}
      <rect x="6" y="5" width="2" height="2" fill="#0a0a0f"/>
      <rect x="9" y="5" width="2" height="2" fill="#0a0a0f"/>
      {/* Wavy bottom */}
      <rect x="4" y="13" width="2" height="2" fill="#bf40bf"/>
      <rect x="7" y="13" width="2" height="1" fill="#bf40bf"/>
      <rect x="10" y="13" width="2" height="2" fill="#bf40bf"/>
      {/* Highlight */}
      <rect x="5" y="3" width="2" height="1" fill="#c084fc"/>
    </svg>
  )
}

const PixelStar = () => {
  return (
    <svg width="40" height="40" viewBox="0 0 16 16" className="pixel-art">
      {/* Star shape */}
      <rect x="7" y="2" width="2" height="2" fill="#a855f7"/>
      <rect x="5" y="4" width="6" height="2" fill="#a855f7"/>
      <rect x="7" y="6" width="2" height="4" fill="#a855f7"/>
      <rect x="4" y="7" width="3" height="2" fill="#a855f7"/>
      <rect x="9" y="7" width="3" height="2" fill="#a855f7"/>
      <rect x="5" y="10" width="2" height="2" fill="#a855f7"/>
      <rect x="9" y="10" width="2" height="2" fill="#a855f7"/>
      {/* Inner glow */}
      <rect x="7" y="7" width="2" height="2" fill="#c084fc"/>
    </svg>
  )
}

const PixelComputer = () => {
  return (
    <svg width="40" height="40" viewBox="0 0 16 16" className="pixel-art">
      {/* Monitor */}
      <rect x="3" y="3" width="10" height="7" fill="#7e22ce"/>
      <rect x="4" y="4" width="8" height="5" fill="#0a0a0f"/>
      {/* Screen content */}
      <rect x="5" y="5" width="2" height="1" fill="#a855f7"/>
      <rect x="8" y="5" width="2" height="1" fill="#a855f7"/>
      <rect x="5" y="7" width="4" height="1" fill="#c084fc"/>
      {/* Stand */}
      <rect x="7" y="10" width="2" height="2" fill="#7e22ce"/>
      <rect x="5" y="12" width="6" height="1" fill="#7e22ce"/>
    </svg>
  )
}

// Excited takodachi with >w< face
const PixelTakodachiExcited = () => {
  return (
    <svg width="40" height="40" viewBox="0 0 16 16" className="pixel-art">
      {/* Halo */}
      <rect x="6" y="1" width="1" height="1" fill="#ff9933"/>
      <rect x="9" y="1" width="1" height="1" fill="#ff9933"/>
      <rect x="5" y="2" width="1" height="1" fill="#ff9933"/>
      <rect x="10" y="2" width="1" height="1" fill="#ff9933"/>
      <rect x="5" y="3" width="1" height="1" fill="#ff9933"/>
      <rect x="10" y="3" width="1" height="1" fill="#ff9933"/>

      {/* Head flaps */}
      <rect x="3" y="6" width="1" height="1" fill="#9370db"/>
      <rect x="12" y="6" width="1" height="1" fill="#9370db"/>

      {/* Head/Body */}
      <rect x="5" y="5" width="6" height="1" fill="#9370db"/>
      <rect x="4" y="6" width="8" height="5" fill="#9370db"/>

      {/* Eyes >w< face - closed happy eyes */}
      <rect x="5" y="7" width="2" height="1" fill="#0a0a0f"/>
      <rect x="9" y="7" width="2" height="1" fill="#0a0a0f"/>

      {/* Mouth w shape */}
      <rect x="7" y="9" width="1" height="1" fill="#0a0a0f"/>
      <rect x="8" y="9" width="1" height="1" fill="#0a0a0f"/>

      {/* Tentacles */}
      <rect x="5" y="11" width="1" height="2" fill="#9370db"/>
      <rect x="7" y="11" width="1" height="3" fill="#9370db"/>
      <rect x="8" y="11" width="1" height="3" fill="#9370db"/>
      <rect x="10" y="11" width="1" height="2" fill="#9370db"/>

      {/* Shading/highlights */}
      <rect x="6" y="6" width="1" height="1" fill="#b19cd9"/>
      <rect x="9" y="6" width="1" height="1" fill="#b19cd9"/>
    </svg>
  )
}

// Curious takodachi with owo face
const PixelTakodachiCurious = () => {
  return (
    <svg width="40" height="40" viewBox="0 0 16 16" className="pixel-art">
      {/* Halo */}
      <rect x="6" y="1" width="1" height="1" fill="#ff9933"/>
      <rect x="9" y="1" width="1" height="1" fill="#ff9933"/>
      <rect x="5" y="2" width="1" height="1" fill="#ff9933"/>
      <rect x="10" y="2" width="1" height="1" fill="#ff9933"/>
      <rect x="5" y="3" width="1" height="1" fill="#ff9933"/>
      <rect x="10" y="3" width="1" height="1" fill="#ff9933"/>

      {/* Head flaps */}
      <rect x="3" y="6" width="1" height="1" fill="#8a5fc7"/>
      <rect x="12" y="6" width="1" height="1" fill="#8a5fc7"/>

      {/* Head/Body - slightly different purple */}
      <rect x="5" y="5" width="6" height="1" fill="#8a5fc7"/>
      <rect x="4" y="6" width="8" height="5" fill="#8a5fc7"/>

      {/* Eyes owo face - round surprised eyes */}
      <rect x="6" y="6" width="1" height="2" fill="#0a0a0f"/>
      <rect x="5" y="7" width="1" height="1" fill="#0a0a0f"/>
      <rect x="9" y="6" width="1" height="2" fill="#0a0a0f"/>
      <rect x="10" y="7" width="1" height="1" fill="#0a0a0f"/>

      {/* Mouth w shape */}
      <rect x="7" y="9" width="1" height="1" fill="#0a0a0f"/>
      <rect x="8" y="9" width="1" height="1" fill="#0a0a0f"/>

      {/* Tentacles */}
      <rect x="5" y="11" width="1" height="2" fill="#8a5fc7"/>
      <rect x="7" y="11" width="1" height="3" fill="#8a5fc7"/>
      <rect x="8" y="11" width="1" height="3" fill="#8a5fc7"/>
      <rect x="10" y="11" width="1" height="2" fill="#8a5fc7"/>

      {/* Shading/highlights */}
      <rect x="6" y="5" width="1" height="1" fill="#a78bda"/>
      <rect x="9" y="5" width="1" height="1" fill="#a78bda"/>
    </svg>
  )
}

// Content takodachi with uwu face
const PixelTakodachiContent = () => {
  return (
    <svg width="40" height="40" viewBox="0 0 16 16" className="pixel-art">
      {/* Halo */}
      <rect x="6" y="1" width="1" height="1" fill="#ffb366"/>
      <rect x="9" y="1" width="1" height="1" fill="#ffb366"/>
      <rect x="5" y="2" width="1" height="1" fill="#ffb366"/>
      <rect x="10" y="2" width="1" height="1" fill="#ffb366"/>
      <rect x="5" y="3" width="1" height="1" fill="#ffb366"/>
      <rect x="10" y="3" width="1" height="1" fill="#ffb366"/>

      {/* Head flaps */}
      <rect x="3" y="6" width="1" height="1" fill="#a366d9"/>
      <rect x="12" y="6" width="1" height="1" fill="#a366d9"/>

      {/* Head/Body - lighter purple */}
      <rect x="5" y="5" width="6" height="1" fill="#a366d9"/>
      <rect x="4" y="6" width="8" height="5" fill="#a366d9"/>

      {/* Eyes uwu face - closed content eyes */}
      <rect x="6" y="7" width="1" height="1" fill="#0a0a0f"/>
      <rect x="5" y="8" width="1" height="1" fill="#0a0a0f"/>
      <rect x="9" y="7" width="1" height="1" fill="#0a0a0f"/>
      <rect x="10" y="8" width="1" height="1" fill="#0a0a0f"/>

      {/* Mouth w shape */}
      <rect x="7" y="9" width="1" height="1" fill="#0a0a0f"/>
      <rect x="8" y="9" width="1" height="1" fill="#0a0a0f"/>

      {/* Tentacles */}
      <rect x="5" y="11" width="1" height="2" fill="#a366d9"/>
      <rect x="7" y="11" width="1" height="3" fill="#a366d9"/>
      <rect x="8" y="11" width="1" height="3" fill="#a366d9"/>
      <rect x="10" y="11" width="1" height="2" fill="#a366d9"/>

      {/* Shading/highlights */}
      <rect x="6" y="6" width="1" height="1" fill="#c49de8"/>
      <rect x="9" y="6" width="1" height="1" fill="#c49de8"/>
    </svg>
  )
}

// Sleepy takodachi with -_- face
const PixelTakodachiSleepy = () => {
  return (
    <svg width="40" height="40" viewBox="0 0 16 16" className="pixel-art">
      {/* Halo - slightly tilted */}
      <rect x="7" y="1" width="1" height="1" fill="#ff9933"/>
      <rect x="10" y="1" width="1" height="1" fill="#ff9933"/>
      <rect x="6" y="2" width="1" height="1" fill="#ff9933"/>
      <rect x="11" y="2" width="1" height="1" fill="#ff9933"/>
      <rect x="6" y="3" width="1" height="1" fill="#ff9933"/>
      <rect x="10" y="3" width="1" height="1" fill="#ff9933"/>

      {/* Head flaps */}
      <rect x="3" y="6" width="1" height="1" fill="#7d5ba6"/>
      <rect x="12" y="6" width="1" height="1" fill="#7d5ba6"/>

      {/* Head/Body - darker purple */}
      <rect x="5" y="5" width="6" height="1" fill="#7d5ba6"/>
      <rect x="4" y="6" width="8" height="5" fill="#7d5ba6"/>

      {/* Eyes -_- face - sleeping */}
      <rect x="5" y="7" width="2" height="1" fill="#0a0a0f"/>
      <rect x="9" y="7" width="2" height="1" fill="#0a0a0f"/>

      {/* Small mouth */}
      <rect x="7" y="9" width="2" height="1" fill="#0a0a0f"/>

      {/* Tentacles */}
      <rect x="5" y="11" width="1" height="2" fill="#7d5ba6"/>
      <rect x="7" y="11" width="1" height="3" fill="#7d5ba6"/>
      <rect x="8" y="11" width="1" height="3" fill="#7d5ba6"/>
      <rect x="10" y="11" width="1" height="2" fill="#7d5ba6"/>

      {/* Shading/highlights */}
      <rect x="6" y="6" width="1" height="1" fill="#9a7ac2"/>
      <rect x="9" y="6" width="1" height="1" fill="#9a7ac2"/>
    </svg>
  )
}

export {
  PixelTakodachi,
  PixelTakodachiExcited,
  PixelTakodachiCurious,
  PixelTakodachiContent,
  PixelTakodachiSleepy
}
