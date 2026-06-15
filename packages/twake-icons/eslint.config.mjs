import cozyReact from 'eslint-config-cozy-app/react'

export default [
  ...cozyReact,
  {
    ignores: [
      'dist/**',
      'src/Icons/**',
      'src/Icon/icons-sprite.ts',
      '**/*.stories.ts',
      '**/*.stories.tsx'
    ]
  }
]
