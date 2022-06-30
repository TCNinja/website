import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import Layout from "../components/layout"
import '../styles/styles.css'
import bg from '../public/background.jpg';
import Box from '@mui/material/Box';

export default function App({ Component, pageProps }: AppProps) {
  return (
      <SessionProvider
        session={pageProps.session}>
          <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    // </Box>
  )
}