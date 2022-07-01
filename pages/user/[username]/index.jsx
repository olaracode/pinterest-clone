import React from "react";
import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";

const index = () => {
  const router = useRouter();
  console.log(router.query);
  return <div>index</div>;
};

export default index;
