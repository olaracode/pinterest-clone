import { Box, Text, Flex, Grid, GridItem } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faSearch } from "@fortawesome/free-solid-svg-icons";
import Navbar from "@/organisms/navbar/navbar";
import LandingAnimations from "@/organisms/landing/LandingAnimations";
import HeroMobile from "@/organisms/landing/HeroMobile";
import Preview from "@/organisms/landing/Preview";
export default function Home() {
  return (
    <Box bg={{ base: "black", md: "white" }}>
      <Navbar />
      <LandingAnimations />
      <HeroMobile />
      <Preview />
    </Box>
  );
}
