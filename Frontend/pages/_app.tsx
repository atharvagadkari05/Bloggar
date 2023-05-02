import {theme} from "../chakra/theme"
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import Layout from '../components/layout'
import LandingPage from "./landing"
import { RecoilRoot } from "recoil"
import BlogPage from "./dashboard/profile"


export default function App({ Component, pageProps }: AppProps) {
  return(
   <RecoilRoot>
   <ChakraProvider theme={theme} >
    <Layout>
      <Component {...pageProps} />
  </Layout>
  </ChakraProvider>
  </RecoilRoot>
  ) 
  
}
