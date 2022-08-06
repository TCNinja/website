import { useState } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider, ColorScheme, ColorSchemeProvider } from '@mantine/core';
import Layout from '../components/layout';

const App = ({ Component, pageProps }: AppProps) => {

  return (
        <MantineProvider theme={{ colorScheme:'dark' }} withGlobalStyles withNormalizeCSS>
            <Layout>
              <Component {...pageProps} />
            </Layout>
        </MantineProvider>
  );
}

export default App;


