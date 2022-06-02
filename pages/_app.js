import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from '../components/organisms/navbar/navbar'

function MyApp({ Component, pageProps }) {
  return (
  <ChakraProvider overflowX={"hidden"}>
    <Component {...pageProps} />
  </ChakraProvider>
)}

export default MyApp
