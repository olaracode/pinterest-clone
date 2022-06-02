import { Box, Text, Flex } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Navbar from "@/organisms/navbar/navbar";
import LandingAnimations from "@/organisms/landing/LandingAnimations";

export default function Home() {
  return (
    <>
      <Navbar />
      <LandingAnimations />
      <Box scrollSnapType={"y"}>
        <Box
          scrollSnapAlign={"start"}
          position={"relative"}
          backgroundColor="#fffd92"
          w="100%"
          height={"110vh"}
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
        </Box>
      </Box>
    </>
  );
}
