import React from "react";
import { Box, Grid, GridItem, Flex } from "@chakra-ui/react";
const Diy = () => {
  return (
    <Box minH="100vh" backgroundColor="#ffe2eb">
      <Grid
        templateColumns={{ base: "repeat(2, 1fr)", lg: "repeat(1, 1ffr)" }}
        h="100vh"
      >
        <GridItem border="1px"></GridItem>
        <GridItem>This is my second side</GridItem>
      </Grid>
    </Box>
  );
};

export default Diy;
