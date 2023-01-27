import React from 'react'
import { useRecoilState } from 'recoil';
import {NewDocModal} from '../../chakra/atoms/NewdockAtom'
export default newDoc_modal
     import {
        Modal,
        ModalOverlay,
        ModalContent,
        ModalHeader,
        ModalFooter,
        ModalBody,
        ModalCloseButton,
        Button,
        useDisclosure
      } from '@chakra-ui/react'

function newDoc_modal() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [modalstate, setmodalState] = useRecoilState(NewDocModal)
    const handleclose = () => {
        setmodalState((prev) => ({
          ...prev,
          open: false
        }))
      }
  return (
<> 
<Modal onClose={handleclose} size='full' isOpen={modalstate.open}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
      Helo
        </ModalBody>
        <ModalFooter>
          <Button onClick={handleclose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal></>
  )
}


    