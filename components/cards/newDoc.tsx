import React from 'react'
import { Card, CardHeader, CardBody, CardFooter,Image,Stack,Heading,Text,Divider,ButtonGroup,Button,Box } from '@chakra-ui/react'
import { useSetRecoilState } from 'recoil'
import { NewDocModal } from '../../chakra/atoms/NewdockAtom'


type Props = {}

export default function ProfPage({}: Props) {

  const  setRecoilState = useSetRecoilState(NewDocModal)
  return (
   <>
<Card maxW='sm'>
  <CardBody>
    <Image
      src='https://www.nicepng.com/png/detail/286-2861019_plus-sign-in-circle-vector-transparent-background-1.png'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup alignItems='center' justifyContent='center' spacing='2'>
      <Button onClick ={()=>setRecoilState({open:true})} variant='solid' colorScheme='blue'>
      New Blog
      </Button>
    
    </ButtonGroup>
  </CardFooter>
</Card>
   </>

  )
}


