import cozyReact from 'eslint-config-cozy-app/react'

export default [
  ...cozyReact,
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parserOptions: {
        project: './tsconfig.eslint.json',
        tsconfigRootDir: import.meta.dirname
      }
    }
  },
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
