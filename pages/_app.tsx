import {theme} from "../chakra/theme"
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import Layout from '../components/layout'
import LandingPage from "./landing"


export default function App({ Component, pageProps }: AppProps) {
  return(
    <ChakraProvider theme={theme} >
    <Layout>
      <Component {...pageProps} />
      <LandingPage/>
    </Layout>
  </ChakraProvider>
  ) 
  
}
