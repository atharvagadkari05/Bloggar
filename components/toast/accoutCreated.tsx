import React from 'react'
import { useToast,Button } from '@chakra-ui/react'



function AccoutCreated() {
    const toast = useToast()
        return (
        
              toast({
                title: 'Account created.',
                description: "We've created your account for you.",
                status: 'success',
                duration: 9000,
                isClosable: true,
              })
           
        )
}

export default AccoutCreated
// function ToastExample() {
//     const toast = useToast()
//     return (
//       <Button
//         onClick={() =>
//           toast({
//             title: 'Account created.',
//             description: "We've created your account for you.",
//             status: 'success',
//             duration: 9000,
//             isClosable: true,
//           })
//         }
//       >
//         Show Toast
//       </Button>
//     )
//   }