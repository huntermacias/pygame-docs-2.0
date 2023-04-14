import dynamic from 'next/dynamic';
import type { AppProps } from 'next/app';
import './globals.css';

const RootLayout = dynamic(() => import('./../components/layout'), {
  ssr: true,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}

export default MyApp;