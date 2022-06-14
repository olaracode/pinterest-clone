import { Box, Text, Flex, Grid, GridItem } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Navbar from "@/organisms/navbar/navbar";
import LandingAnimations from "@/organisms/landing/LandingAnimations";
import HeroMobile from "@/organisms/landing/HeroMobile";
import CustomButton from "@/atoms/CustomButton";
import RoundedImage from "@/atoms/RoundedImage";
export default function Home() {
  return (
    <Box bg={{ base: "black", md: "white" }}>
      <Navbar />
      <LandingAnimations />
      <HeroMobile />
      <Box scrollSnapType={"y"}>
        <Box
          overflowY={"hidden"}
          position={"relative"}
          backgroundColor="#fffd92"
          w="100%"
          height={"100vh"}
          mt="6vh"
          zIndex={100}
        >
          <Flex
            justifyContent={"center"}
            pt={"10px"}
            alignItems="center"
            gap={1}
            cursor={"pointer"}
          >
            <Text alignSelf={"center"} fontWeight={"bold"}>
              This is how it works
            </Text>
            <FontAwesomeIcon icon={faAngleDown} />
          </Flex>
          <Grid
            h="100%"
            templateColumns="repeat(2, 1fr)"
            scrollSnapAlign={"center"}
            gap={5}
          >
            <GridItem align="center" justify="center">
              <Flex justify="center" align="center" h="100%">
                <Box position="absolute" top="35" zIndex="-1" left="20">
                  <RoundedImage
                    src="assets/imgs/landing/food/img2.jpg"
                    w="20%"
                    h="auto"
                  />
                </Box>
                <Box position="absolute" zIndex="-1" left="0" bottom="0">
                  <RoundedImage
                    src="assets/imgs/landing/food/img3.png"
                    w="12%"
                    h="auto"
                  />
                </Box>
                <RoundedImage
                  src="assets/imgs/landing/food/img1.jpg"
                  w="50%"
                  h="auto"
                />
              </Flex>
            </GridItem>
            <GridItem justify="center" align="center">
              <Flex direction={"column"} justify="center" h="100%">
                <Box>
                  <Text fontSize={"48px"} fontWeight="bold" color="#c31952">
                    Busca una idea
                  </Text>
                  <Text w="320px" my={5} color="#c31952">
                    ¿Qué es lo siguiente que quieres probar? Piensa en algo que
                    te interese, como &quotreceta sencilla de pollo para
                    cenar&quot, y a ver qué descubres.
                  </Text>
                  <CustomButton
                    content="Explora"
                    bgColor={"#c31952"}
                    color="#fffd92"
                    fontWeight="bold"
                  />
                </Box>
              </Flex>
            </GridItem>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
