import '../styles/globals.css';
import { MantineProvider } from '@mantine/core';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <MantineProvider>
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}

export default MyApp;
