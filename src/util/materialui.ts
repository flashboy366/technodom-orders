import { createTheme } from '@mui/material'
import { COLORS, mobileToDesktopBreakpoint } from '../constants/materialui'

export const theme = createTheme({
  palette: { primary: { main: COLORS.BRAND_ORANGE } },
  components: {
    MuiButton: {
      defaultProps: {
        sx: {
          color: COLORS.PRIMARY_WHITE,
          bgcolor: COLORS.BRAND_ORANGE,
          ':hover': { bgcolor: COLORS.DEEP_ORANGE },
        },
      },
    },
  },
})

export const mobileWidthSelector = () =>
  theme.breakpoints.down(mobileToDesktopBreakpoint)
export const desktopWidthSelector = () =>
  theme.breakpoints.up(mobileToDesktopBreakpoint)
