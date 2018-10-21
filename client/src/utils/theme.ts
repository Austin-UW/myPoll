import { createMuiTheme } from '@material-ui/core/styles'

const primary = '#c2185b'
const secondary = '#191970'
/** @description Material ui theme, used in wrapper.tsx */
export const theme = createMuiTheme({
  palette: {
    primary: {
      main: primary
    },
    secondary: {
      main: secondary
    }
  }
})
