import {
    Tag,
    TagLabel,
    TagLeftIcon,
    TagRightIcon,
    TagCloseButton,
  } from '@chakra-ui/react'

type Props = {
  colorScheme:any
}
  export default function Tags(props:Props) {
    return(
        <>

    <Tag
      size={'md'}
      key={'md'}
      mr ={1}
      borderRadius='full'
      variant='solid'
      colorScheme={props.colorScheme}
    >
      <TagLabel>WebDev</TagLabel>
      <TagCloseButton />
    </Tag>


        </>
    )
  }