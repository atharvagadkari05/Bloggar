import React from 'react';
import { Button } from '@chakra-ui/react';
import { useSetRecoilState } from 'recoil';
import { authstatemodalAtom } from '../../chakra/atoms/authmodalGlobalatom';
const AuthButtons:React.FC = () => {

    const setauthstate = useSetRecoilState(authstatemodalAtom)
    
    return (

        <>
         <Button
              as={'a'}
              fontSize={'sm'}
              fontWeight={400}
              variant={'link'}
              href={'#'}
              onClick={()=> setauthstate({open:true,view:"login"})}
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
              onClick={()=> {
                setauthstate({open:true,view:"login"})
              }}
              >
              Sign Up
            </Button></>
    )
}
export default AuthButtons;