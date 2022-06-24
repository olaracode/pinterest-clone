import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "../components/organisms/navbar/navbar";
import theme from "../theme/theme";
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider overflowX={"hidden"} theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
