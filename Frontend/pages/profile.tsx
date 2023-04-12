import React from 'react'
import NewDoc from '../components/cards/newDoc'
import { useRouter } from 'next/router'
import { Flex, Grid, GridItem } from '@chakra-ui/react'
import Blogcard from '../components/cards/blogcard'


type Props = {}

export default function ProfPage({}: Props) {


  return (
<>

  <NewDoc/>
 
<Grid templateColumns='repeat(3, 1fr)' gap={6}>
  <GridItem w='100%' h='10'><Blogcard/></GridItem>
  <GridItem w='100%' h='10'><Blogcard/></GridItem>
  <GridItem w='100%' h='10'><Blogcard/></GridItem>

</Grid>
</>
  )
}





