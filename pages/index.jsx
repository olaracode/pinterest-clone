import { Box, Text, Flex, Grid, GridItem } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "@/organisms/navbar/navbar";
import {
  Diy,
  Ideas,
  Preview,
  HeroMobile,
  LandingAnimations,
  LandingLogin,
} from "@/organisms/landing/";
export default function Home() {
  return (
    <Box bg={{ base: "black", md: "brand.50" }}>
      <LandingAnimations />
      <HeroMobile />
      <Preview />
      <Ideas />
      <Diy />
      <LandingLogin />
    </Box>
  );
}
