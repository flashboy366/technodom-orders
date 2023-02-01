import { createTheme } from '@mui/material'
import { COLORS, MOBILE_DESKTOP_BREAKPOINT } from '../constants/materialui'

export const theme = createTheme({
  palette: {
    primary: { main: COLORS.PRIMARY },
    // background: { default: COLORS.PRIMARY_WHITE },
  },
  components: {
    MuiButton: {
      defaultProps: {
        size: 'small',
        sx: {
          color: COLORS.PRIMARY_WHITE,
          bgcolor: COLORS.PRIMARY,
          ':hover': { bgcolor: COLORS.SECONDARY },
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        variant: 'body2',
      },
    },
    MuiTextField: {
      defaultProps: {
        size: 'small',
      },
      styleOverrides: { root: { fontSize: 'smaller' } },
    },
  },
})

export const mobileWidthSelector = () =>
  theme.breakpoints.down(MOBILE_DESKTOP_BREAKPOINT)
export const desktopWidthSelector = () =>
  theme.breakpoints.up(MOBILE_DESKTOP_BREAKPOINT)
