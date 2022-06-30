import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import bg from '../public/background.jpg'
import Box from '@mui/material/Box';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Box className='background' sx={{
      backgroundImage: `url(${bg.src})`,
      backgroundSize: 'cover',
      backgroundAttachment: 'scroll',
      width: '100%',
      height: '100%'
    }}>
      <SessionProvider
        session={pageProps.session}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </Box>
  )
}