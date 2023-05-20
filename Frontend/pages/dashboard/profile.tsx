import React, { useEffect } from "react";
import NewDoc from "../../components/cards/newDoc";
import { Router, useRouter } from "next/router";
import { Button, Flex, Grid, GridItem } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import Blogcard from "../../components/cards/blogcard";
import { withProtected } from "../../hooks/route";
import AuthService from "../../services/authservice";

//@ts-ignore
function ProfilePage({ auth }) {
  const { logout } = auth;
const {user} = auth
  return (
    <>
      <Heading>welcome {user.displayName}</Heading>

      <NewDoc />
      <Button
        onClick={logout}
        loadingText="Submitting"
        size="lg"
        bg={"blue.400"}
        color={"white"}
        _hover={{
          bg: "blue.500",
        }}
      >
        Logout
      </Button>

      

      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        <GridItem w="100%" h="10">
          <Blogcard />
        </GridItem>
        <GridItem w="100%" h="10">
          <Blogcard />
        </GridItem>
        <GridItem w="100%" h="10">
          <Blogcard />
        </GridItem>
      </Grid>
    </>
  );
}

export default withProtected(ProfilePage);
