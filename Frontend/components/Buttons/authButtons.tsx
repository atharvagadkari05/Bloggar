import React from 'react';
import { Button } from '@chakra-ui/react';
const AuthButtons:React.FC = () => {

    
    return (

        <>
         <Button
              as={'a'}
              fontSize={'sm'}
              fontWeight={400}
              variant={'link'}
              href={'#'}
         
              >
              Sign In
            </Button>
            <Button
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              bg={'pink.400'}
            //   href={'#'}
              _hover={{
                bg: 'pink.300',
              }}
        
              >
              Sign Up
            </Button></>
    )
}
export default AuthButtons;