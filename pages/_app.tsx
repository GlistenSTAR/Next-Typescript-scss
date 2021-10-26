import '../styles/globals.scss'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
  <>
    <Head>
      <title>Maladex - Cardano DEX</title>
      <meta property="og:title" content="Maladex - Cardano DEX"/>
      <meta name="description" content="The most innovative Cardano DEX - swaps, farming, synthetics, derivatives, indexes, capital efficiency via algorithmic automated market making, passive and active investing. Join the financial revolution."/>
      <meta name="image" content="/assets/img/logo.png"/>
      <meta name="keywords" content="maladex, cardano, swap, farming, synthetics, derivates, capital efficiency, algorithmic automated market"/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
    </Head>
    <Component {...pageProps} />
  </>)
}

export default MyApp
