import '@fontsource/open-sans/300.css'
import '@fontsource/open-sans/400.css'
import '@fontsource/open-sans/700.css'
import { extendTheme } from "@chakra-ui/react"


export const theme = extendTheme({
  colors: {
    brand: {
      100: "#ff3c00",
      
       },
  },
  fonts:{
    body:"Open Sans, sans-serif"
  },
  style:{
    global: ()=>{
        body:{
            bg:"gray.200"
        }
    }
  },
//   components:{
//     Button,
//   }
})