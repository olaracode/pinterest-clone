import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Text, Flex, Image, Button } from "@chakra-ui/react";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import textLanding from "@/utils/landingText";
import AnimatedImage from "@/molecules/AnimatedImage";
import landingAnimatedImgs from "@/utils/landingAnimatedImgs";


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


  // Animation Interval Function
  useEffect(() => {
    let landingAnimation = setInterval(() => {
      if (currentAnimation === "exit") {
        setCurrentAnimation("entry");
      }
      setTimeout(() => {
        setCurrentAnimation("exit");
      }, 3700);
      if (currentItem === textLanding.length - 1) {
        setCurrentItem(0);
      } else {
        setCurrentItem(currentItem + 1);
      }
    }, 4000);
    return () => clearInterval(landingAnimation);
  });


  return (
    <Flex
      margin="2% 0"
      height={{ base: "80vh", lg: "70vh" }}
      display={{base: "none", md: "flex"}}
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
          overflowY={"hidden"}
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
        gap={100}
        zIndex={0}
        justifyContent="center"
        top={"40vh"}
        alignItems="start"
        overflowX="hidden"
        overflowY="hidden"
        maxW={"100vw"}
      >
        <Flex gap={4} alignItems="start">
          {/* Left side */}

          <AnimatedImage
            delay={0}
            img={landingAnimatedImgs[currentItem][0][0]}
            currentAnimation={currentAnimation}
            img2={landingAnimatedImgs[currentItem][0][1]}
          />
          <AnimatedImage
            delay={0.1}
            img={landingAnimatedImgs[currentItem][0][1]}
            currentAnimation={currentAnimation}
            position="center"
          />
          <AnimatedImage
            delay={0.2}
            img={landingAnimatedImgs[currentItem][0][2]}
            currentAnimation={currentAnimation}
            position="inner"
          />
        </Flex>

        {/* Right side */}
        <Flex gap={4} alignItems="start">
          <AnimatedImage
            delay={0.3}
            img={landingAnimatedImgs[currentItem][1][2]}
            currentAnimation={currentAnimation}
            position="inner"
          />
          <AnimatedImage
            delay={0.4}
            img={landingAnimatedImgs[currentItem][1][1]}
            currentAnimation={currentAnimation}
            position="center"
          />
          <AnimatedImage
            delay={0.5}
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
        top={{ base: "85vh", md: "78vh" }}
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
