import React, { useEffect, useState } from "react";
import { Box, Flex, Text, Grid, GridItem } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { CustomButton } from "@/atoms/btns";
import RoundedImage from "@/atoms/RoundedImage";
import { useRouter } from "next/router";
const Preview = () => {
  const texts = ["Buffalo wings"];
  const router = useRouter();

  return (
    <Box>
      <Box
        overflowY={"hidden"}
        position={"relative"}
        backgroundColor="#fffd92"
        w="100%"
        minHeight={"100vh"}
        mt="6vh"
        zIndex={100}
      >
        <Flex
          justifyContent={"center"}
          pt={"10px"}
          alignItems="center"
          gap={1}
          cursor={"pointer"}
          onClick={() => router.push("#hiw")}
        >
          <Text alignSelf={"center"} fontWeight={"bold"}>
            This is how it works
          </Text>
          <FontAwesomeIcon icon={faAngleDown} />
        </Flex>
        <Flex
          my={{ base: "20%", md: "12%", lg: "10%" }}
          mx="2"
          align="center"
          justifyContent="center"
          direction={{ base: "column", lg: "row" }}
          gap={{ base: 0, md: 2, lg: 4 }}
        >
          <Flex
            id={"hiw"}
            bgImg="/assets/imgs/landing/food/img1.jpg"
            w={{ base: "360px", lg: "450px" }}
            h={{ base: "420px", lg: "600px" }}
            align="center"
            justify="center"
            borderRadius="8px"
          >
            <Flex
              p="4"
              backgroundColor="brand.50"
              borderRadius="100px"
              gap={3}
              align="center"
            >
              <Text>Buffalo wings</Text>
              <FontAwesomeIcon icon={faSearch} />
            </Flex>
          </Flex>
          <Flex direction={"column"} jusfity="center" align="center">
            <Text
              textAlign={"center"}
              fontSize={"48px"}
              w="70%"
              fontWeight="bold"
              color="#c31952"
            >
              Search your interests
            </Text>
            <Text textAlign={"center"} w="320px" my={5} color="#c31952">
              What is the next thing you want to try? Think about something
              you&apos;re interested, like an easy buffalo wings or chicken
              fingers recipe for dinner
            </Text>
            <CustomButton
              content="Explora"
              bgColor={"#c31952"}
              color="#fffd92"
              fontWeight="bold"
              w="60%"
            />
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default Preview;
