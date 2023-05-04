import React, { useEffect } from 'react'
import NewDoc from '../../components/cards/newDoc'
import { Router, useRouter } from 'next/router'
import { Flex, Grid, GridItem } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import Blogcard from '../../components/cards/blogcard'


type Props = {}

export default function ProfPage({}: Props) {
const router = useRouter()
//@ts-ignore
const user = JSON.parse(localStorage.getItem('user'))
  useEffect(()=>{
    const accesstoken = localStorage.getItem('accessToken')
    if(accesstoken==undefined){
      router.push('/signup')
    }
  },[])


  return (
<>
{user.map((e:any)=>{
 return <Heading> Welcome {e.displayName}</Heading>
})}

  <NewDoc/>
   
 
<Grid templateColumns='repeat(3, 1fr)' gap={6}>
  <GridItem w='100%' h='10'><Blogcard/></GridItem>
  <GridItem w='100%' h='10'><Blogcard/></GridItem>
  <GridItem w='100%' h='10'><Blogcard/></GridItem>

</Grid>
</>
  )
}





