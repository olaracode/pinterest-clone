import React from "react";
import { Box, Image, Text, Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { loginMasonrys } from "@/utils/heroImgs";
import { IconButton } from "@/atoms/btns";
import { faListDots } from "@fortawesome/free-solid-svg-icons";
const index = () => {
  const router = useRouter();
  console.log(router.query);
  return (
    <Box
      mt="60px"
      padding={4}
      top="0"
      w="100%"
      position={"absolute"}
      mx="auto"
      zIndex={"0"}
      sx={{ columnCount: [2, 3, 4, 5, 8], columnGap: "8px", rowGap: "10px" }}
    >
      {" "}
      {loginMasonrys.map((img, index) => {
        return (
          <Box mb="3">
            <Image
              key={index}
              w="100%"
              borderRadius="xl"
              mb={0.5}
              d="inline-block"
              src={img}
              alt="Alt"
            />
            <Flex mt="0" mx="1">
              <Text fontSize={"0.7rem"} fontWeight="bold">
                Lorem ipsum dolor sit.
              </Text>
              <IconButton icon={faListDots} />
            </Flex>
          </Box>
        );
      })}
    </Box>
  );
};

export default index;
