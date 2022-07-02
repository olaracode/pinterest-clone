import React, { useState } from "react";
import { Flex, Image, Box, Text, useToast, Divider } from "@chakra-ui/react";
import { CustomButton } from "@/atoms/btns";
import { useRouter } from "next/router";
import CustomInputs from "@/atoms/CustomInputs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
const LoginCard = ({ isModal, swap, onClose }) => {
  const toast = useToast();
  const router = useRouter();
  const [username, setUsername] = useState("");
  const handleToast = () => {
    toast({
      title: "Oops something went wrong ",

      description: "Backend in progress",
      status: "info",
    });
    if (username?.length > 0) {
      router.push(`/user/${username}`);
      return "success";
    } else {
      const randomId =
        "pid" +
        Math.floor(Math.random * 1000) +
        Math.floor(Math.random() * 10000);
      router.push(`/user/guest${randomId}`);
      onClose();
    }
  };

  return (
    <Flex
      shadow={"lg"}
      w={isModal ? "100%" : { base: "320px", lg: "420px" }}
      borderRadius={isModal ? "30px" : "30px"}
      p="5"
      bgColor={"brand.50"}
      direction="column"
      align="center"
      gap="2"
    >
      <Image src="/assets/imgs/redlogo.png" alt="pinterest-logo" w="30px" />
      <Box mt={{ base: 8, md: 2 }}>
        <Text textAlign={"center"} fontSize="xl" my="3">
          Welcome back
        </Text>
        <Text textAlign={"center"} my="3" fontSize={"sm"}>
          Log into your account to resume your creative process
        </Text>

        <Flex direction="column" gap="3" my="3">
          <CustomInputs
            type="text"
            placeholder="Email"
            onChange={(e) => setUsername(e.target.value)}
          />
          <CustomInputs type="password" placeholder="Password" />
        </Flex>

        <CustomButton
          content="Login with email"
          bgColor="main"
          w={"100%"}
          my={1}
          onClick={handleToast}
        />
        <Flex align={"center"} gap={" 3"}>
          <Divider color="black" orientation="horizontal" />
          <Text>o</Text>
          <Divider color="black" orientation="horizontal" />
        </Flex>
        <CustomButton
          content="Login using google"
          bgColor="secondary"
          w={"100%"}
          my={1}
          icon={"gg"}
          onClick={handleToast}
        />
        <CustomButton
          content="Login using facebook"
          bgColor="fb"
          w={"100%"}
          my={1}
          icon={"fb"}
          onClick={handleToast}
        />
        <Text
          color="black"
          fontWeight={"bold"}
          fontSize={16}
          textAlign="center"
          my={6}
        >
          Dont haven and account already?
          <Text
            color="brand.primary.100"
            as="span"
            cursor="pointer"
            onClick={swap}
          >
            {" "}
            Register Now
          </Text>
        </Text>
        <Text fontSize={"sm"} textAlign="center">
          This is a clone of pinterest made with next.js and chakra-ui. The
          backend is still on development. More on
        </Text>
        <Text fontWeight={"bold"} my="3" textAlign={"center"} cursor="pointer">
          <FontAwesomeIcon icon={faGithub} color="#0074e8" /> olaracode@github
        </Text>
      </Box>
    </Flex>
  );
};

export default LoginCard;
