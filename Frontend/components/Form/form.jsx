import React, { useState } from 'react';
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  InputLeftAddon,
  InputGroup,
  Textarea,
  FormHelperText,
  InputRightElement,
  Icon,
} from '@chakra-ui/react';
import Tags from '../tags/tags'

import { FaSmile } from "react-icons/fa" // Replace "FaSmile" with the appropriate emoji icon from the chosen icon library

import axios from 'axios';

import { useToast } from '@chakra-ui/react';

const colorcode = ['green', 'blue', 'red', 'yellow']




const Form1 = (props) => {
  const [show, setShow] = React.useState(false);
 

  const handleClick = () => setShow(!show);
  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
    Let's Start <Icon as={FaSmile } boxSize={6} /> 

      </Heading>
      <Flex>
        <FormControl mr="5%">
          <FormLabel htmlFor="Title" fontWeight={'normal'}>
            *Title
          </FormLabel>
          <Input 
                value = {props.title}
                onChange= {(e)=>props.setTitle(e.target.value)}
                 id="first-name" placeholder="Enter Title" />
        </FormControl>

      </Flex>
      <FormControl mt="2%">
        <FormLabel htmlFor="email" fontWeight={'normal'}>
          *Introduction to the Blog
        </FormLabel>
       
        <Textarea 
                ></Textarea>
        <FormHelperText>btw It's a resizable text box.</FormHelperText>
      </FormControl>

     
    </>
  );
};
const Form2 = (props) => {

  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
       Enter Details
      </Heading>
     
     <FormControl mt="2%">
        <FormLabel htmlFor="email" fontWeight={'normal'}>
          *Blog Contentsss:
        </FormLabel>
        {/* <Input id="email" type="email" /> */}
        <Textarea
        value = {props.content}
        onChange  = {(e)=>props.setContent(e.target.value)}
        />
        <FormHelperText>Currently Images are not supported.</FormHelperText>
      </FormControl>
    </>
  );
};

const Form3 = (props) => {
  
  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal">
        Social Handles
      </Heading>
      <SimpleGrid columns={1} spacing={6}>
        <FormControl as={GridItem} colSpan={[3, 2]}>
          <FormLabel
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: 'gray.50',
            }}>
            *Website/Social Media Profile:
          </FormLabel>
          <InputGroup size="sm">
         
            <Input
              type="tel"
             value = {props.website}
             onChange = {(e)=>props.setWebsite(e.target.value)}
             
              placeholder="www.example.com"
              focusBorderColor="brand.400"
              rounded="md"
            />
          </InputGroup>
        </FormControl>

        <FormControl id="email" mt={1}>
          <FormLabel
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: 'gray.50',
            }}>
            About the blog ( Links or references)
          </FormLabel>
          <Textarea
            placeholder="you@example.com"
            rows={3}
            shadow="sm"
            focusBorderColor="brand.400"
            fontSize={{
              sm: 'sm',
            }}
          />
          <FormHelperText>
            Brief description for your profile. URLs are hyperlinked.
          </FormHelperText>
        </FormControl>
      </SimpleGrid>
    </>
  );
};

export default function multistep() {

  const handleSubmit = async() => {
  
    toast({
           title: 'Blog created.',
           description: "You're Blog has been created.",
           status: 'success',
           duration: 3000,
           isClosable: true,
         });

          const blog_Data = {
            "title":title,
            "intro":intro,
            "content":content,
            "website":website,
          }

          try {
            const response = await axios.post('/', {
              data: blog_Data,
            }).then(()=>console.log("posted"));
            console.log(response.data);
          } catch (error) {
            console.error(error);
          }
        };



  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(33.33);
  const [title,setTitle] = useState('')
  const [intro,setIntro] = useState('')
  const [content, setContent]= useState('')
  const [website, setWebsite]= useState('')
  return (
    <>
      <Box
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={800}
        p={6}
        m="10px auto"
        as="form">
        <Progress
          hasStripe
          value={progress}
          mb="5%"
          mx="5%"
          isAnimated></Progress>
        {step === 1 ? <Form1 title= {title} setTitle = {setTitle} intro = {intro} setIntro = {setIntro} /> : step === 2 ? <Form2 content = {content} setContent ={setContent} /> : <Form3 website = {website} setWebsite = {setWebsite} />}
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">      
            <Flex>
              <Button
                onClick={() => {
                  setStep(step - 1);
                  setProgress(progress - 33.33);
                }}
                isDisabled={step === 1}
                colorScheme="teal"
                variant="solid"
                w="7rem"
                mr="5%">
                Back
              </Button>
              <Button
                w="7rem"
                isDisabled={step === 3}
                onClick={() => {
                  setStep(step + 1);
                  if (step === 3) {
                    setProgress(100);
                  } else {
                    setProgress(progress + 33.33);
                  }
                }}
                colorScheme="teal"
                variant="outline">
                Next
              </Button>
            </Flex>
            {step === 3 ? (
              <Button
                w="7rem"
                colorScheme="red"
                variant="solid"
               
          onClick = {handleSubmit}
                >
                Submit
              </Button>
            ) : null}
          </Flex>
        </ButtonGroup>
      </Box>
    </>
  );
}