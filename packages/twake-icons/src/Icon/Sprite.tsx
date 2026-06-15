import React from 'react'

import iconSpriteContent from './icons-sprite'

function Sprite(): React.ReactElement | null {
  if (!iconSpriteContent) return null

  return (
    <div
      style={{ display: 'none' }}
      dangerouslySetInnerHTML={{ __html: iconSpriteContent }}
    />
  )
}

export default Sprite
