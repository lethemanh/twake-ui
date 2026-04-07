import { menuItemClasses } from '@mui/material/MenuItem'
import { Components, Theme, alpha } from '@mui/material/styles'

import { radius } from '../radius'

export const menuItemOverrides = (theme: Theme): Components['MuiMenuItem'] => {
  return {
    styleOverrides: {
      root: {
        borderRadius: radius.md,
        '&&&:hover': {
          backgroundColor: `${alpha(theme.palette.primary.main, theme.palette.action.hoverOpacity)}`
        },
        [`&.${menuItemClasses.selected}`]: {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity
          ),
          '&:hover': {
            backgroundColor: alpha(
              theme.palette.primary.main,
              theme.palette.action.selectedOpacity +
                theme.palette.action.hoverOpacity
            )
          }
        }
      }
    }
  }
}
