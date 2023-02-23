import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Center
} from '@chakra-ui/react'
import MultiStepForm from '../Form/form'
type NewDoc_variant_props = {
  variant: any,
  colorScheme : any 
}


export default function NewdocModal(props:NewDoc_variant_props) {
  const { isOpen, onOpen, onClose } = useDisclosure()



  return (
    <>
        <Button
          onClick={() => onOpen()}
          variant = {props.variant}
          colorScheme = {props.colorScheme}
          key={'full'}
          m={4}
        >Open</Button>

      <Modal onClose={onClose} size={'full'} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent alignContent={"center"} justifyContent={"center"}>
          {/* <Center bg='tomato' h='100px' color='white'> */}
          <ModalHeader  p={10}>Create New Blog</ModalHeader>
          {/* </Center> */}
   
          <ModalCloseButton />
          <ModalBody>
         <MultiStepForm/>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}