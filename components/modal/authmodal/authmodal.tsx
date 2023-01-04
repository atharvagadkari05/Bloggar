import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    FormControl,
    FormLabel,
    Input
  } from '@chakra-ui/react'

  import { useRecoilState, useRecoilValue } from 'recoil';
  import { authstatemodalAtom } from '../../../chakra/atoms/authmodalGlobalatom';


const Authmodal:React.FC = () => {
      const [authModalstate, setauthModalstate] = useRecoilState(authstatemodalAtom)
    const handleclose = () => {
      setauthModalstate((prev) => ({
        ...prev,
        open: false
      }))
    }
 
    return (
      <>
  
  
        <Modal isOpen={authModalstate.open} onClose={handleclose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={handleclose}>
                Close
              </Button>
              <Button variant='ghost'>Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )

}
export default Authmodal;