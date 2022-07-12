import React from "react";
import { Box, Flex, Text, Image } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { CustomButton } from "@/atoms/btns";
import "swiper/css"; // Swiper styles

// #006a6c  for the buttons
// #dafef6 for the background

const Ideas = () => {
  return (
    <Flex
      minH="100vh"
      align="center"
      maxW="100%"
      justify="center"
      backgroundColor="#dafef6"
    >
      <Flex
        direction={{ base: "column", lg: "row" }}
        maxW="100vw"
        align="center"
        justify="center"
        color="#006a6c"
        gap={5}
      >
        <Box maxW="360px">
          <Text as="h2" fontSize="3rem" textAlign={"center"}>
            Pin your favorite posts
          </Text>
          <Text as="h2" my="6" fontSize="1rem" textAlign={"center"}>
            Save everything you like for easy access later on
          </Text>
          <Flex justify="center">
            <CustomButton
              content="Explore"
              bgColor={"#006a6c"}
              color="brand.50"
              fontWeight="bold"
              w="80%"
            />
          </Flex>
        </Box>
        <Box maxW={{ base: "300px", lg: "420px" }}>
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            modules={[Autoplay]}
            autoplay={{ delay: 3000 }}
          >
            <SwiperSlide>
              <Image
                borderRadius="3xl"
                h={{ base: "420px", lg: "600px" }}
                w="100%"
                src="/assets/imgs/landing/mode/img1.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                borderRadius="3xl"
                h="420px"
                w="100%"
                src="/assets/imgs/landing/mode/img2.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                borderRadius="3xl"
                h="420px"
                w="100%"
                src="/assets/imgs/landing/mode/img3.jpg"
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Ideas;
