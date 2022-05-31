import { useState, useEffect } from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import Navbar from "../components/organisms/navbar/navbar";
import textLanding from "../public/assets/utils/landingText";
import { motion } from "framer-motion";

export default function Home() {
  let [currentItem, setCurrentItem] = useState(0);
  let animations = {
    entry: {
      y: [100, 0],
      opacity: [0, 1],
    },
    exit: {
      y: [0, -100],
      opacity: [1, 0],
    },
  };

  let [currentAnimation, setCurrentAnimation] = useState("entry");

  useEffect(() => {
    let landingAnimation = setInterval(() => {
      if (currentAnimation === "exit") {
        setCurrentAnimation("entry");
      }
      setTimeout(() => {
        setCurrentAnimation("exit");
      }, 3000);
      if (currentItem === textLanding.length - 1) {
        setCurrentItem(0);
      } else {
        setCurrentItem(currentItem + 1);
      }
    }, 4000);
    return () => clearInterval(landingAnimation);
  });

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
            Find the next
          </Text>
            <Text
              as={motion.p}
              fontSize={{ base: "24px", md: "42px", lg: "60px" }}
              color={textLanding[currentItem].color}
              fontWeight="medium"
              variants={animations}
              animate={currentAnimation === "entry" ? animations.entry : animations.exit }
            >
              {textLanding[currentItem].title}
            </Text>

        </Box>
      </Flex>
    </>
  );
}
