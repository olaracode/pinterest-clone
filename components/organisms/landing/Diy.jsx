import React from "react";
import { Box, Grid, GridItem, Flex, Text, Image } from "@chakra-ui/react";
import CustomButton from "@/atoms/CustomButton";
import {
  faAngleLeft,
  faEllipsis,
  faRulerHorizontal,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Diy = () => {
  return (
    <Box minH="100vh" backgroundColor="#ffe2eb">
      <Grid
        templateColumns={{ base: "1", lg: "repeat(2, 1fr)" }}
        minH="100vh"
        pb="30px"
      >
        <GridItem
          bgImage={"/assets/imgs/landing/makeup/img1.jpeg"}
          bgSize="cover"
        >
          <Flex h="100%" justify="start" align="end">
            <Flex
              mx="20%"
              my="10%"
              position="relative"
              borderRadius="12px"
              w="180px"
              h="300px"
              bgPosition={"center"}
              bgSize="cover"
              bgRepeat={"no-repeat"}
              bgImage="/assets/imgs/landing/makeup/img2.png"
            >
              <Flex
                position="absolute"
                top="5px"
                px="10px"
                justify="space-between"
                w="100%"
              >
                <FontAwesomeIcon icon={faAngleLeft} color="white" />

                <FontAwesomeIcon icon={faEllipsis} color="white" />
              </Flex>
              <Flex position={"absolute"} bottom="-25px" left="-25px">
                <Image
                  borderRadius="100px"
                  w="50px"
                  h="50px"
                  src={"/assets/imgs/landing/makeup/img3.jpeg"}
                  bgSize="cover"
                  border="1.5px solid white"
                  alt="profile"
                />
                <Box mt="20px" ml="6px">
                  <Text color="white" fontWeight={"bold"}>
                    Sydney MakeUp
                  </Text>
                  <Text
                    fontWeight={"normal"}
                    fontSize="0.8rem"
                    color="white"
                    whiteSpace={"nowrap"}
                  >
                    16,800,000 followers
                  </Text>
                </Box>
              </Flex>
            </Flex>
          </Flex>
        </GridItem>
        <GridItem>
          <Flex h="100%" justify="center" align="center" direction="column">
            <Flex maxWidth={"380px"} m="auto" direction="column" align="center">
              <Text
                as="h2"
                fontSize="3rem"
                textAlign={"center"}
                fontWeight="bold"
                color="#e60023"
              >
                Look it, make it, try it, do it
              </Text>
              <Text
                as="h2"
                my="6"
                fontSize="1rem"
                textAlign={"center"}
                color="#e60023"
              >
                The best thing about pinterest is discovering new ideas, things,
                places, inspiration of people from all around the world
              </Text>
              <CustomButton content="Explore" bgColor="main" w="60%" />
            </Flex>
          </Flex>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Diy;
