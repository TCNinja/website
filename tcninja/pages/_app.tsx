import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import Layout from "../components/layout";

export default function App({ Component, pageProps }: AppProps) {
  console.log('_app');
  return (
    <SessionProvider
      session={pageProps.session}>
      <Layout>
      <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  )
}