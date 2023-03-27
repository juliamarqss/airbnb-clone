import type { AppProps } from 'next/app'
import { useRouter } from 'next/router';
import Router from '../pages/router';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <Router pathname={router.pathname}>
      <Component {...pageProps} />
    </Router>
  );
}