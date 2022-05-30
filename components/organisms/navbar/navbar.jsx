import React from "react";
import { Flex, Image, Box, Text, Button } from "@chakra-ui/react";
import CustomButton from "../../atoms/CustomButton";

const Navbar = () => {
  const logo = "/assets/imgs/plogo.png";
  return (
    <Box w="100%">
      {/* DESKTOP NAVBAR */}
      <Flex mx="2%" my={"1%"} justifyContent="space-between" alignItems="center" display={{base: "none", md: "flex"}}>
        <Image src={logo} height="60px" cursor="pointer"/>
        <Flex alignItems="center" gap="6">
          <Text fontSize="16px" fontWeight={"bold"} cursor="pointer" _hover={{textDecoration: "underline"}}>
            Info
          </Text>
          <Text fontSize="16px" fontWeight={"bold"} cursor="pointer" _hover={{textDecoration: "underline"}}>
            Empresa
          </Text>
          <Text fontSize="16px" fontWeight={"bold"} cursor="pointer" _hover={{textDecoration: "underline"}}>
            Blog
          </Text>
          <Flex gap={2}>
            <CustomButton content="Inicia Sesión" bgColor={"main"} fontWeight="bold"/>
            <CustomButton content="Registrate" bgColor={"secondary"} fontWeight="bold" />
          </Flex>
        </Flex>
      </Flex>
      {/* END DESKTOP NAVBAR */}

      <Flex mx="2%">

      </Flex>
    </Box>
  );
};

export default Navbar;
