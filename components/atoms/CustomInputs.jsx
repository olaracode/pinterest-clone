import { Input } from "@chakra-ui/react";
import React from "react";
Input;
const CustomInputs = ({ ...props }) => {
  return (
    <Input
      {...props}
      borderRadius="14px"
      borderColor="#cdcdcd"
      _focus={{ border: "2px", borderColor: "#0074e8", boxShadow: "lg" }}
    />
  );
};

export default CustomInputs;
