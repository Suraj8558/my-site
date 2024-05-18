import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import '../assets/css/plugins/font-awesome.css';
import '../assets/css/plugins/icomoon.css';
import '../assets/css/plugins/plugins.css';
import '../assets/scss/style.scss';
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // @ts-ignore
    import('bootstrap/dist/js/bootstrap.bundle.min.js');

    AOS.init({
      once: true,
    });
  }, []);
  return <Component {...pageProps} />;
}
