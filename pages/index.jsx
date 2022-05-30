import { useState, useEffect } from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import Navbar from "../components/organisms/navbar/navbar";
import textLanding from "../public/assets/utils/landingText";
import { motion } from "framer-motion";

export default function Home() {
  const [repeat, setRepeat] = useState(0);
  let [currentItem, setCurrentItem] = useState(0);
  const animations = {
    exit: {
      y: ["0px", "-60px"],
      opacity: [1, 0],
    },
    entry: {
      y: ["60px", "0px"],
      opacity: [0, 1],
    },
  };
  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  };
  return (
    <>
      <Navbar />
      <Flex
        margin="2%"
        height="70vh"
        alignItems="center"
        justifyContent="center"
      >
        <Box textAlign={"center"}>
          <Text
            as="p"
            fontSize={{ base: "24px", md: "42px", lg: "60px" }}
            fontWeight="semibold"
          >
            Encuentra la proxima
          </Text>
          <Text
            as={motion.p}
            fontSize={{ base: "24px", md: "42px", lg: "60px" }}
            color={textLanding[0].color}
            fontWeight="medium"
            variants={list}
            animate="visible"
          >
            {textLanding[currentItem].title}
          </Text>
        </Box>
      </Flex>
    </>
  );
}
