import React from "react";
import { IconButton as ChakraIcon } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
const IconButton = ({ icon, ...props }) => {
  return (
    <ChakraIcon
      isRound
      variant="unstyled"
      _hover={{ bg: "brand.100" }}
      _active={{ bg: "brand.50" }}
      icon={<FontAwesomeIcon icon={icon} />}
      {...props}
    />
  );
};

export default IconButton;
