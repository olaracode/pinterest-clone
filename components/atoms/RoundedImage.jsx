import React from "react";
import { Box, Image } from "@chakra-ui/react";
const RoundedImage = ({ variant, src, ...props }) => {
  const cardImg = variant === "hero" && { base: "120px", md: "320px" };
  return (
    <Box w={"100%"} h={"100%"} {...props}>
      <Image src={src} w={"100%"} h={"100%"} borderRadius="20px" alt={""} />
    </Box>
  );
};

export default RoundedImage;
