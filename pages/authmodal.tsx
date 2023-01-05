import React, { useState } from 'react'
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
  Input,
  useToast
} from '@chakra-ui/react'

import { useRecoilState, useRecoilValue } from 'recoil';
import { authstatemodalAtom } from '../chakra/atoms/authmodalGlobalatom';
import { account } from '../services/appwriteconfig';
import { ID } from 'appwrite';
import AccoutCreated from '../components/toast/accoutCreated';



const Authmodal: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [successState, setsucces] = useState(false)
  const [userDetails, setUserDetails] = useState({
    'userID': ID.unique(),
    'name': '',
    'email': '',
    'password': ''
  })
  const signedUser = async () => {
    try {
      const newUser = await account.create(userDetails.userID, userDetails.email, userDetails.password, userDetails.name).then(() => {
        alertMessage('Succesfully created')
      })
     onClose()
    } catch (error) {
      console.log(error)
    }


  }
  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
  const toast = useToast()


  const alertMessage = (message: String) => {
    toast({
      title: message,
      duration: 2000,
      isClosable: true,
      position: 'bottom',
    });
  };






  return (
    <>
      <Button onClick={onOpen}>SignUP</Button>


      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>First name</FormLabel>
              <Input onChange={(e) => {
                setUserDetails({
                  ...userDetails,
                  name: e.target.value
                })
              }} ref={initialRef} placeholder='First name' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Email</FormLabel>
              <Input onChange={(e) => {
                setUserDetails({
                  ...userDetails,
                  email: e.target.value
                })
              }} placeholder='email' />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <Input onChange={(e) => {
                setUserDetails({
                  ...userDetails,
                  password: e.target.value
                })
              }} type="password" placeholder='Password' />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={signedUser} colorScheme='blue' mr={3}>
              Submit
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

    </>
  )
}
export default Authmodal;