import React from "react";
import { Grid, GridItem, Box, Text, Image, useToast } from "@chakra-ui/react";
import { loginMasonrys } from "@/utils/heroImgs";
import { useRouter } from "next/router";
import { RegisterCard } from "@/molecules/auth";
const Login = () => {
  const toast = useToast();
  const router = useRouter();
  const handleToast = (text) => {
    toast({
      title: "Oops something went wrong ",

      description: text,
      status: "info",
    });
  };
  return (
    <Grid
      overflowY={"hidden"}
      position="relative"
      //   display={{ base: "none", md: "grid" }}
      minH="100vh"
      backgroundColor="brand.50"
      placeItems={"center"}
      templateColumns={{ base: "1", md: "repeat(2, 1fr)" }}
      py="30px"
    >
      <GridItem
        position={"relative"}
        zIndex="999"
        ml={{ base: "0%", md: "6%" }}
      >
        <Text
          fontSize="6xl"
          color="brand.50"
          textShadow={"md"}
          fontWeight="bold"
          textAlign={{ base: "center", md: "start" }}
        >
          Sign in to find inspiration
        </Text>
      </GridItem>
      <GridItem position={"relative"} zIndex="999">
        <RegisterCard />
      </GridItem>
      <Box
        padding={4}
        top="0"
        w="100%"
        position={"absolute"}
        mx="auto"
        zIndex={"0"}
        sx={{ columnCount: [2, 3, 4, 5, 8], columnGap: "8px", rowGap: "10px" }}
      >
        {loginMasonrys.map((img, index) => {
          return (
            <Image
              key={index}
              w="100%"
              borderRadius="xl"
              mb={2}
              d="inline-block"
              src={img}
              alt="Alt"
            />
          );
        })}
      </Box>
    </Grid>
  );
};

export default Login;
