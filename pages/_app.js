import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "../components/organisms/navbar/navbar";
import theme from "../theme/theme";
import Layout from "@/organisms/Layout";
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider overflowX={"hidden"} theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
