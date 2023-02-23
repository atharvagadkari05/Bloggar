import React, { useState } from 'react'
import { Card, CardHeader, CardBody, CardFooter,Image,Stack,Heading,Text,Divider,ButtonGroup,Button,Box } from '@chakra-ui/react'
import { useSetRecoilState } from 'recoil'
// import { NewDocModal } from '../../chakra/atoms/NewdockAtom'
import NewDocModal from '../modals/newDoc_modal'


type Props = {}

export default function ProfPage({}: Props) {

  const [modal, setmodal] = useState(false)

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
      {/* <Button onClick={()=>setmodal(true)}  variant='solid' colorScheme='blue'>
      New Blog
      </Button> */}
    <NewDocModal variant ='solid' colorScheme='blue'/>
    </ButtonGroup>
  </CardFooter>

</Card>

   </>

  )
}


