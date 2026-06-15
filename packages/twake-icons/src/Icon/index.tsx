import React, {
  type SVGAttributes,
  type CSSProperties,
  type ComponentType,
  type ReactElement
} from 'react'

import { iconBaseStyle, iconSpinStyle } from './styles'

export interface IconProps extends SVGAttributes<SVGElement> {
  icon: string | ComponentType<SVGAttributes<SVGElement>> | ReactElement
  size?: number | string
  color?: string
  rotate?: number
  spin?: boolean
}

function isComponentType(
  value: unknown
): value is ComponentType<SVGAttributes<SVGElement>> {
  return typeof value === 'function'
}

function Icon({
  icon,
  color,
  style,
  className,
  rotate,
  size,
  spin,
  ...restProps
}: IconProps): ReactElement | null {
  if (!icon) return null

  if (React.isValidElement(icon)) return icon

  const resolvedSizeNum =
    typeof size === 'number' ? size : parseInt(String(size ?? 16), 10) || 16

  const selfStyle: CSSProperties = { ...iconBaseStyle, ...style }

  if (color) {
    selfStyle.fill = color
  }

  if (rotate) {
    selfStyle.transform = `rotate(${rotate}deg)`
  }

  if (spin) {
    selfStyle.animation = iconSpinStyle.animation
  }

  const styleWithSize: CSSProperties = {
    ...selfStyle,
    width: resolvedSizeNum,
    height: resolvedSizeNum
  }

  if (isComponentType(icon)) {
    const Svg = icon
    return (
      <Svg
        className={className}
        style={styleWithSize}
        width={resolvedSizeNum}
        height={resolvedSizeNum}
        {...restProps}
      />
    )
  }

  if (typeof icon !== 'string') return null

  if (typeof icon !== 'string') return null

  const anchor = icon.includes('#') ? icon : `#${icon}`
  return (
    <svg
      className={className}
      style={styleWithSize}
      width={resolvedSizeNum}
      height={resolvedSizeNum}
      {...restProps}
    >
      <use href={anchor} />
    </svg>
  )
}

export default Icon
