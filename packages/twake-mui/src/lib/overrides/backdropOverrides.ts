import { Components, Theme, alpha } from '@mui/material/styles'

export const backdropOverrides = (theme: Theme): Components['MuiBackdrop'] => {
  return {
    styleOverrides: {
      root: {
        variants: [
          {
            props: { invisible: false },
            style: {
              backgroundColor: alpha(
                theme.palette.text.primary,
                theme.palette.action.focusOpacity
              )
            }
          }
        ]
      }
    }
  }
}
