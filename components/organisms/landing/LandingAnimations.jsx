import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Text, Flex, Image, Button } from "@chakra-ui/react";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import textLanding from "../../../public/assets/utils/landingText";
import AnimatedImage from "../../molecules/AnimatedImage";
import landingAnimatedImgs from "../../../public/assets/utils/landingAnimatedImgs";
const LandingAnimations = () => {
  let [currentItem, setCurrentItem] = useState(0);
  let buttonAnimation = {
    spring: {
      y: 20,
      transition: {
        yoyo: Infinity,
        duration: 1.2,
      },
    },
  };
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
  console.log(landingAnimatedImgs);
  return (
    <Flex
      margin="2% 0"
      height="70vh"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        textAlign={"center"}
        backgroundImage="linear-gradient(to bottom, rgba(255,255,255, 0.2), rgba(255,255,255, 1))"
      >
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
          animate={
            currentAnimation === "entry" ? animations.entry : animations.exit
          }
        >
          {textLanding[currentItem].title}
        </Text>
      </Box>
      <Flex
        position="absolute"
        gap={8}
        justifyContent="space-between"
        zIndex={0}
        top={"40vh"}
        w="115vw"
        alignItems="start"
        overflowX="hidden"
      >
        <Flex gap={4} alignItems="start">
          {/* Left side */}

          <AnimatedImage
            img={landingAnimatedImgs[currentItem][0][0]}
            currentAnimation={currentAnimation}
            img2={landingAnimatedImgs[currentItem][0][1]}
          />
          <AnimatedImage
            img={landingAnimatedImgs[currentItem][0][1]}
            currentAnimation={currentAnimation}
            position="center"
          />
          <AnimatedImage
            img={landingAnimatedImgs[currentItem][0][2]}
            currentAnimation={currentAnimation}
            position="inner"
          />
        </Flex>

        {/* Right side */}
        <Flex gap={4} alignItems="start">
          <AnimatedImage
            img={landingAnimatedImgs[currentItem][1][2]}
            currentAnimation={currentAnimation}
            position="inner"
          />
          <AnimatedImage
            img={landingAnimatedImgs[currentItem][1][1]}
            currentAnimation={currentAnimation}
            position="center"
          />
          <AnimatedImage
            img={landingAnimatedImgs[currentItem][1][0]}
            currentAnimation={currentAnimation}
            img2={landingAnimatedImgs[currentItem][1][1]}
          />
        </Flex>
      </Flex>
      <Box
        w="100%"
        h="300px"
        zIndex={100}
        position="absolute"
        top="78vh"
        display="flex"
        justifyContent="center"
      >
        <Button
          as={motion.button}
          borderRadius="100%"
          h="48px"
          w="48px"
          backgroundColor={textLanding[currentItem].color}
          initial={{ y: 0 }}
          variants={buttonAnimation}
          animate={buttonAnimation.spring}
        >
          <FontAwesomeIcon color="white" icon={faAngleDown} />
        </Button>
      </Box>
    </Flex>
  );
};

export default LandingAnimations;
