import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import algoliasearch from 'algoliasearch/lite'
import {
  InstantSearch,
} from 'react-instantsearch-hooks-web'
const searchClient = algoliasearch(
  'MVK698T35T',
  '16892df9d986a3976fbf0e13047d6d1b'
)

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
        <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
