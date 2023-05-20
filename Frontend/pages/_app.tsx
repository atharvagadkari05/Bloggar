import {theme} from "../chakra/theme"
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import Layout from '../layouts/layout'
import AuthStateChanged from "../layouts/authstatechanged"
import {AuthProvider} from "../hooks/auth"
import BlogPage from "./dashboard/profile"


export default function App({ Component, pageProps }: AppProps) {
  return(
   <AuthProvider>
   <ChakraProvider theme={theme} >
    <Layout>
<AuthStateChanged>  <Component {...pageProps} /></AuthStateChanged>
    
  </Layout>
  </ChakraProvider>
  </AuthProvider>
 
  ) 
  
}
