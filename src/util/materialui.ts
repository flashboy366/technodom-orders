import { createTheme } from '@mui/material'
import { COLORS, MOBILE_DESKTOP_BREAKPOINT } from '../constants/materialui'

export const theme = createTheme({
  palette: { primary: { main: COLORS.BRAND_ORANGE } },
  components: {
    MuiButton: {
      defaultProps: {
        sx: {
          color: COLORS.PRIMARY_WHITE,
          bgcolor: COLORS.BRAND_ORANGE,
          ':hover': { bgcolor: COLORS.SECONDARY_ORANGE },
        },
      },
    },
  },
})

export const mobileWidthSelector = () =>
  theme.breakpoints.down(MOBILE_DESKTOP_BREAKPOINT)
export const desktopWidthSelector = () =>
  theme.breakpoints.up(MOBILE_DESKTOP_BREAKPOINT)
