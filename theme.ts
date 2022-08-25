import { extendTheme } from '@chakra-ui/react'
// import { ButtonStyles as Button } from './styles/components/butttonStyles'
import { overrides } from './styles/components/butttonStyles'

export const theme = extendTheme({
  colors: {
    primary: {
      default: '#ef8374',
      text: '#4a4a4a',
      white: '#ffffff',
      100: '#ffe9e7',
      200: '#A4A4A4',
      300: '#1d3951b3',
    },
    secondary: {
      default: '#1aaea8',
      50: '#ebf5eb',
      100: '#DAF3F2',
      500: '#5EA62E',
    },
    background: '#e6edf2',
    btnBg: '#454E54',
    footer: '#6E7F89',
  },
}, overrides)
