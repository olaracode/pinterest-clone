import React from "react";
import { Flex, Grid, GridItem, Image, Text, Box } from "@chakra-ui/react";
import { heroImgs } from "@/utils/heroImgs";
import RoundedImage from "@/atoms/RoundedImage";
import { CustomButton } from "@/atoms/btns";
const HeroMobile = () => {
  const logo = "/assets/imgs/herologo.png";
  return (
    <Flex display={{ base: "flex", md: "none" }} h={"90vh"}>
      <Grid
        templateColumns="repeat(3, 1fr)"
        gap={1}
        mx={1}
        filter="brightness(0.4)"
        position={"absolute"}
        top="-5vh"
      >
        {heroImgs.map((img, index) => {
          return (
            <GridItem key={`${index}`}>
              <RoundedImage src={img} variant={"landing"} key={index} />
            </GridItem>
          );
        })}
      </Grid>
      <Flex
        position="absolute"
        h="90vh"
        w="100%"
        direction={"column"}
        justifyContent="center"
        align="center"
      >
        <Flex direction={"column"} justify="center" align={"center"} w={"70%"}>
          <Image src={logo} w={"40px"} h={"40px"} alt="logo" />
          <Text fontSize={"5xl"} textAlign="center" color="brand.50">
            Welcome to pinterest
          </Text>
          <Box mt={8}>
            <CustomButton
              content="Register with email"
              bgColor="main"
              w={"100%"}
              my={1}
            />
            <CustomButton
              content="Register using google"
              bgColor="secondary"
              w={"100%"}
              my={1}
              icon={"gg"}
            />
            <CustomButton
              content="Register using facebook"
              bgColor="fb"
              w={"100%"}
              my={1}
              icon={"fb"}
            />
            <Text
              color="brand.50"
              fontWeight={"bold"}
              fontSize={16}
              textAlign="center"
              my={6}
            >
              Ya eres un miembro,{" "}
              <Text color="brand.primary.main" as="span">
                inicia sesión
              </Text>
            </Text>
          </Box>
        </Flex>
        <Text color="brand.50" fontSize={16} textAlign="center">
          Representas a una empresa? Empieza aquí
        </Text>
      </Flex>
    </Flex>
  );
};

export default HeroMobile;
