import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from '../components/organisms/navbar/navbar'

function MyApp({ Component, pageProps }) {
  return (
  <ChakraProvider>
    <Component {...pageProps} />
  </ChakraProvider>
)}

export default MyApp
