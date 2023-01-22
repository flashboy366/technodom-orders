import { createTheme } from '@mui/material'
import { COLORS, MOBILE_DESKTOP_BREAKPOINT } from '../constants/materialui'

export const theme = createTheme({
  palette: { primary: { main: COLORS.PRIMARY } },
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

export const mobileWidthSelector = () =>
  theme.breakpoints.down(MOBILE_DESKTOP_BREAKPOINT)
export const desktopWidthSelector = () =>
  theme.breakpoints.up(MOBILE_DESKTOP_BREAKPOINT)
