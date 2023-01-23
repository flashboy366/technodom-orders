import { createTheme } from '@mui/material'
import { COLORS, MOBILE_DESKTOP_BREAKPOINT } from '../constants/materialui'

export const theme = createTheme({
  palette: {
    primary: { main: COLORS.PRIMARY },
    background: { default: COLORS.BACKGROUND },
  },
  components: {
    MuiButton: {
      defaultProps: {
        sx: {
          color: COLORS.PRIMARY_WHITE,
          bgcolor: COLORS.PRIMARY,
          ':hover': { bgcolor: COLORS.SECONDARY },
        },
      },
    },
  },
})

export const mobileMediaSelector = () =>
  theme.breakpoints.down(MOBILE_DESKTOP_BREAKPOINT)
export const desktopMediaSelector = () =>
  theme.breakpoints.up(MOBILE_DESKTOP_BREAKPOINT)
