// import '../styles/globals.css';
// import type { AppProps } from 'next/app';
// import { DefaultSeo } from 'next-seo';
// import { DEFAULT_SEO } from '../config';

// function MyApp({ Component, pageProps }: AppProps) {
//   return (
//     <>
//       <DefaultSeo {...DEFAULT_SEO} />
//       <Component {...pageProps} />
//     </>
//   );
// }

// export default MyApp;

import "../styles/globals.css"
import { DefaultSeo } from "next-seo"
import { DEFAULT_SEO } from "../config"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...DEFAULT_SEO} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
