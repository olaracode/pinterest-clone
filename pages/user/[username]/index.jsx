import React from "react";
import { Box, Image, Text, Flex, Menu } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { loginMasonrys } from "@/utils/heroImgs";
import { IconButton } from "@/atoms/btns";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

const index = () => {
  const router = useRouter();
  console.log(router.query);
  return (
    <Box
      padding={4}
      mx="auto"
      zIndex={"0"}
      mb="150px"
      sx={{ columnCount: [2, 3, 4, 8], columnGap: "8px", rowGap: "10px" }}
      flexWrap="nowrap"
    >
      {loginMasonrys.map((img, index) => {
        return (
          <Box mb="4" boxSizing="border-box" position="relative" key={index}>
            <Image
              key={index}
              w="100%"
              borderRadius="xl"
              d="inline-block"
              src={img}
              alt="Alt"
              _hover={{ filter: "brightness(70%)" }}
            />
            <Flex position="absolute" top="0px"></Flex>
            <Flex mt="0" mx="1" align="center" justify="space-between">
              <Text fontSize={"0.7rem"} fontWeight="bold">
                Lorem ipsum dolor sit.
              </Text>
              <IconButton icon={faEllipsis} />
            </Flex>
          </Box>
        );
      })}
    </Box>
  );
};

export default index;
