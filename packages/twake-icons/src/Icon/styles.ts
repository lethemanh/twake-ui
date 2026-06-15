import { CSSProperties } from 'react'

import './styles.css'

export const iconBaseStyle: CSSProperties = {
  fill: 'currentColor',
  // Fix blurry icons on Firefox
  transform: 'translateZ(0)'
}

export const iconSpinStyle: CSSProperties = {
  animation: 'twake-icon-spin 1s linear infinite'
}
