import React, { useState } from "react";
import {
  Box,
  Flex,
  Image,
  Text,
  Modal,
  useDisclosure,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
} from "@chakra-ui/react";
import { LoginCard, RegisterCard } from "@/molecules/auth";

import { CustomButton } from "@/atoms/btns";
const Landing = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentModal, setCurrentModal] = useState(null);
  const logo = "/assets/imgs/plogo.png";
  const handleSwap = () => {
    if (currentModal === "register") {
      setCurrentModal("login");
      return currentModal;
    } else {
      setCurrentModal("register");
      return currentModal;
    }
  };
  const modalOpener = (current) => {
    setCurrentModal(current);
    onOpen();
  };
  return (
    <>
      <Box w="100%">
        <Flex
          mx="2%"
          my={"1%"}
          justifyContent="space-between"
          alignItems="center"
          display={{ base: "none", md: "flex" }}
        >
          <Image src={logo} height="60px" cursor="pointer" alt="logo" />
          <Flex alignItems="center" gap="6">
            <Text
              fontSize="16px"
              fontWeight={"bold"}
              cursor="pointer"
              _hover={{ textDecoration: "underline" }}
            >
              Info
            </Text>
            <Text
              fontSize="16px"
              fontWeight={"bold"}
              cursor="pointer"
              _hover={{ textDecoration: "underline" }}
            >
              Company
            </Text>
            <Text
              fontSize="16px"
              fontWeight={"bold"}
              cursor="pointer"
              _hover={{ textDecoration: "underline" }}
            >
              Blog
            </Text>
            <Flex gap={2}>
              <CustomButton
                content="Login"
                bgColor={"main"}
                onClick={() => modalOpener("login")}
                fontWeight="bold"
                tap={"true"}
              />
              <CustomButton
                content="Register"
                bgColor={"secondary"}
                fontWeight="bold"
                onClick={() => modalOpener("register")}
                tap={"true"}
              />
            </Flex>
          </Flex>
        </Flex>
        <Flex justifyContent="center" display={{ base: "none", md: "none" }}>
          <Image src={logo} height="60px" cursor="pointer" alt="logo" />
        </Flex>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent borderRadius={"30px"}>
          <ModalCloseButton rounded={"full"} />
          {currentModal && currentModal === "register" ? (
            <RegisterCard isModal={true} swap={handleSwap} onClose={onClose} />
          ) : (
            <LoginCard isModal={true} swap={handleSwap} onClose={onClose} />
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default Landing;
