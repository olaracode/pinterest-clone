import React from "react";
import { Text, Button, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";

/**
 *
 * @param {*}
 *  content<string>: Button Text
 *  bgColor<string>: HexColor || variant["main", "secondary"]
 *  ftColor<string>: HexColor
 *  icon<string || faIcon>:
 * @returns custom button
 */

const CustomButton = ({ content, bgColor, icon, ftColor, ...props }) => {
  let bgColorHex =
    bgColor && bgColor === "main"
      ? "brand.primary.100"
      : bgColor === "secondary"
      ? "#efefef"
      : bgColor === "fb"
      ? "#1877f2"
      : bgColor;

  let ftColorHex = ftColor
    ? ftColor
    : bgColor === "main"
    ? "brand.50"
    : bgColor === "fb" && "brand.50";

  let buttonIcon =
    icon && icon === "fb" ? faFacebook : icon === "gg" ? faGoogle : icon;
  return (
    <Button
      as={motion.button}
      {...props}
      bg={bgColorHex}
      borderRadius="100px"
      _hover={{ filter: "brightness(0.8)" }}
      _focus={{ border: "none" }}
      whileTap={{ scale: [1.005, 1] }}
    >
      {icon && (
        <Box mr={1}>
          <FontAwesomeIcon
            icon={buttonIcon}
            color={ftColorHex ? ftColorHex : null}
          />
        </Box>
      )}
      <Text as="p" fontSize={16} color={ftColorHex} {...props}>
        {content}
      </Text>
    </Button>
  );
};

export default CustomButton;
