import React from "react";
import { Box, Flex, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
const AnimatedImage = ({ img, img2, position, currentAnimation, delay }) => {
  let margin =
    position === "center" ? "15%" : position === "inner" ? "30%" : "0%";
  let animations = {
    entry: {
      y: [100, 0],
      opacity: [0, 1],
      transition: {
        delay: delay,
      },
    },
    exit: {
      y: [0, -100],
      opacity: [1, 0],
      transition: {
        delay: delay,
      },
    },
  };
  return (
    <Box
      w={"252px"}
      maxH={"500px"}
      mt={margin}
      as={motion.div}
      variants={animations}
      animate={
        currentAnimation === "entry" ? animations.entry : animations.exit
      }
    >
      {img2 ? (
        <Flex direction={"column"}>
          <Image
            zIndex={0}
            borderRadius="20px"
            w={{ base: "200", lg: "252px" }}
            src={img}
            alt=""
          />
          <Image
            zIndex={0}
            borderRadius="20px"
            w={{ base: "200", lg: "252px" }}
            mt="10px"
            src={img2}
            alt=""
          />
        </Flex>
      ) : (
        <Image
          zIndex={0}
          borderRadius="20px"
          w={{ base: "200", lg: "252px" }}
          src={img}
          alt=""
        />
      )}
    </Box>
  );
};

export default AnimatedImage;
