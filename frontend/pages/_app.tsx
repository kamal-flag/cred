import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { AuthProvider } from '../context/AuthContext';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import { Toaster } from 'react-hot-toast';
import Layout from '../components/Layout/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  let layout;
  if (Component.displayName == 'login') {
    layout = <Component {...pageProps} />;
  } else {
    layout = (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  }
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <AuthProvider>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <title>CRED</title>
        </Head>
        <Toaster position="bottom-right" />
        {layout}
      </AuthProvider>
    </ThemeProvider>
  );
}

export default MyApp;
