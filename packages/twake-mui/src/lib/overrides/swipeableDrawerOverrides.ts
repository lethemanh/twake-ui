import { Components, Theme } from '@mui/material/styles'

import { radius } from '../radius'

// MuiSwipeableDrawer inherits from MuiDrawer.
// To style the paper (the actual container) of a swipeable drawer, we have to target MuiDrawer
export const swipeableDrawerOverrides = (
  theme: Theme
): Components['MuiSwipeableDrawer'] => {
  return {
    defaultProps: {
      sx: {
        '& .MuiDrawer-paper': {
          borderTopLeftRadius: radius.md,
          borderTopRightRadius: radius.md,
          '&::before': {
            content: '""',
            display: 'block',
            width: '64px',
            height: '4px',
            backgroundColor: theme.palette.action.disabledBackground,
            borderRadius: radius.md,
            margin: '12px auto',
            marginTop: '30px',
            flexShrink: 0
          }
        }
      }
    }
  }
}
