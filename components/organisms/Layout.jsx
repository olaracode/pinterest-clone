import React from "react";
import Navbar from "@/organisms/navbar/navbar";
import { Box } from "@chakra-ui/react";
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Box>{children}</Box>
    </>
  );
};

export default Layout;
