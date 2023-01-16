import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NextNProgress from 'nextjs-progressbar';



function MyApp({ Component, pageProps }: AppProps) {
  return(
    <>
      <NextNProgress color="#ff5757" height={3}  /> 
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
