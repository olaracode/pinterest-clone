import React from "react";
import { Flex, Image, Box, Text, useToast, Divider } from "@chakra-ui/react";
import CustomButton from "@/atoms/CustomButton";
import { useRouter } from "next/router";
import CustomInputs from "@/atoms/CustomInputs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
const LoginCard = () => {
  const toast = useToast();
  const router = useRouter();
  const handleToast = (text) => {
    toast({
      title: "Oops something went wrong ",

      description: text,
      status: "info",
    });
  };
  return (
    <Flex
      shadow={"lg"}
      w="320px"
      borderRadius="30px"
      p="5"
      bgColor={"white"}
      direction="column"
      align="center"
      gap="2"
    >
      <Image src="/assets/imgs/redlogo.png" alt="pinterest-logo" w="30px" />
      <Box mt={{ base: 8, md: 2 }}>
        <Text textAlign={"center"} fontSize="xl" my="3">
          Welcome to printerest
        </Text>
        <Text textAlign={"center"} my="3" fontSize={"sm"}>
          Come here to find the perfect inspiration for your next project
        </Text>

        <Flex direction="column" gap="3" my="3">
          <CustomInputs type="text" placeholder="Email" />
          <CustomInputs type="password" placeholder="Password" />
          <CustomInputs type="number" placeholder="Age" />
        </Flex>

        <CustomButton
          content="Comenzar"
          bgColor="main"
          w={"100%"}
          my={1}
          onClick={() => handleToast("Backend in progress")}
        />
        <Flex align={"center"} gap={" 3"}>
          <Divider color="black" orientation="horizontal" />
          <Text>o</Text>
          <Divider color="black" orientation="horizontal" />
        </Flex>
        <CustomButton
          content="Register using google"
          bgColor="secondary"
          w={"100%"}
          my={1}
          icon={"gg"}
          onClick={() => handleToast("Backend in progress")}
        />
        <CustomButton
          content="Register using facebook"
          bgColor="fb"
          w={"100%"}
          my={1}
          icon={"fb"}
          onClick={() => handleToast("Backend in progress")}
        />
        <Text
          color="black"
          fontWeight={"bold"}
          fontSize={16}
          textAlign="center"
          my={6}
        >
          Ya eres un miembro,{" "}
          <Text color="#e60023" as="span">
            inicia sesión
          </Text>
        </Text>
        <Text fontSize={"sm"} textAlign="center">
          This is a clone of pinterest made with next.js and chakra-ui. The
          backend is still on development. More on{" "}
        </Text>
        <Text fontWeight={"bold"} my="3" textAlign={"center"} cursor="pointer">
          <FontAwesomeIcon icon={faGithub} color="#0074e8" /> olaracode@github
        </Text>
      </Box>
    </Flex>
  );
};

export default LoginCard;
