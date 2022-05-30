import React from 'react'
import { Text, Button } from "@chakra-ui/react";

const CustomButton = ({ content, ...props }) => {
    let bgColor =
      props.bgColor && props.bgColor === "main"
        ? "#e60023"
        : props.bgColor === "secondary"
        ? "#efefef"
        : props.bgColor;
  
    let ftColor = props.ftColor ? props.ftColor : props.bgColor === "main" && "white"
    return (
      <Button {...props} bg={bgColor} borderRadius="100px" _hover={{filter: "brightness(0.8)"}}>
        <Text as="p" fontSize={16} color={ftColor}>
          {content}
        </Text>
      </Button>
    );
  };

export default CustomButton