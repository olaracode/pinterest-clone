import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Image,
  Text,
  InputGroup,
  InputLeftElement,
  Input,
  Button,
  HStack,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faBell,
  faComment,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import { IconButton } from "@/atoms/btns";
import { UserCategories } from "consts";
const AuthNav = () => {
  const [username, setUsername] = useState();
  const [active, setActive] = useState(UserCategories[0]);
  const logo = "/assets/imgs/minilogo.png";
  const router = useRouter();
  useEffect(() => {
    if (!router.query.username) return;
    setUsername(router.query.username);
  }, []);
  return (
    <>
      <Box w="100%">
        <Flex
          mx="2%"
          my={"1%"}
          justifyContent="space-between"
          alignItems="center"
          display={{ base: "none", sm: "flex" }}
        >
          <Image src={logo} w="60px" cursor="pointer" alt="logo" />
          <Flex align="center"></Flex>
          <Flex w="full">
            <InputGroup>
              <InputLeftElement
                children={<FontAwesomeIcon icon={faSearch} />}
              />
              <Input
                placeholder="Search"
                borderRadius="3xl"
                variant="filled"
                backgroundColor="brand.100"
                _hover={{ backgroundColor: "brand.150" }}
                border="4px solid"
                focusBorderColor="brand.input.active"
                _focus={{
                  backgroundColor: "brand.100",
                }}
              />
            </InputGroup>
          </Flex>
          <Flex>
            <IconButton icon={faBell} />

            <IconButton icon={faComment} />
            <Button
              borderRadius={"3xl"}
              variant="unstyled"
              _hover={{ bg: "brand.100" }}
              _active={{ bg: "brand.50" }}
            >
              {username && username[0]}
            </Button>
            <IconButton icon={faChevronDown} />
          </Flex>
        </Flex>
      </Box>
      <HStack
        overflowX={"scroll"}
        display={{ base: "flex", sm: "none" }}
        __css={{
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {UserCategories.map((category) => (
          <Box
            p="3"
            whiteSpace={"nowrap"}
            onClick={() => setActive(category)}
            borderBottom="2px"
            borderColor={
              active === category ? "brand.input.active" : "brand.50"
            }
            mx={3}
          >
            <Text>{category}</Text>
          </Box>
        ))}
        <Box
          p="3"
          whiteSpace={"nowrap"}
          borderBottom="2px"
          borderColor="transparent"
          mx={3}
        >
          <Text>More for you</Text>
        </Box>
      </HStack>
    </>
  );
};

export default AuthNav;
