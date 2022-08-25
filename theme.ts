import { extendTheme } from '@chakra-ui/react'
import { overrides } from './styles/components/butttonStyles'

export const theme = extendTheme({
  colors: {
    text:{
      primaryPink: '#ef8374',
      primaryDark: '#454E54',
      primaryLight: "#6E7F89",
      white: '#ffffff',
      primaryGreen: '#1aaea8',
      primaryGreen2: "#5EA62E"
    },
    background:{
      primary: '#ef8374',
      primaryLight: "#ffe9e7",
      primaryGreen2: "#ebf5eb",
      footer: '#6E7F89',
      primaryBg: "#6E7F89",
    }
  },
}, overrides)
