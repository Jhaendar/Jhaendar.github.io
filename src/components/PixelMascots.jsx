const PixelTakodachi = () => {
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

      {/* Head/Body - rounded top */}
      <rect x="5" y="5" width="6" height="1" fill="#9370db"/>
      <rect x="4" y="6" width="8" height="5" fill="#9370db"/>

      {/* Eyes -w- face */}
      <rect x="6" y="7" width="1" height="1" fill="#0a0a0f"/>
      <rect x="9" y="7" width="1" height="1" fill="#0a0a0f"/>

      {/* Mouth w shape */}
      <rect x="7" y="9" width="1" height="1" fill="#0a0a0f"/>
      <rect x="8" y="9" width="1" height="1" fill="#0a0a0f"/>

      {/* Tentacles at bottom */}
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

export { PixelTakodachi }
