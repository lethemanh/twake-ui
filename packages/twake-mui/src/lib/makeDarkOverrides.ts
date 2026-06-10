import { Theme, ThemeOptions, alpha } from '@mui/material/styles'
import { merge } from 'lodash'

import { makeLightOverrides } from './makeLightOverrides'

export const makeDarkOverrides = (
  theme: Theme
): NonNullable<ThemeOptions['components']> => {
  const makeOverridesForDarkTheme = (
    theme: Theme
  ): NonNullable<ThemeOptions['components']> => ({
    MuiTypography: {
      styleOverrides: {
        root: {
          color: alpha(theme.palette.grey[50], 0.9)
        },
        caption: {
          // Typography caption overrides will be implemented later
        }
      }
    }
  })

  const DarkOverrides: NonNullable<ThemeOptions['components']> = merge(
    makeLightOverrides(theme),
    makeOverridesForDarkTheme(theme)
  )

  return DarkOverrides
}
