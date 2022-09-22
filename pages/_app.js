import Head from 'next/head'
import NavBar from './navbar'
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import '../styles/style.css'
import React, { useEffect } from 'react';


function MyApp({ Component, pageProps }) {

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, [])
  
  return <>
    <Head>
      <title>Pentcloud-Test</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Test Frontend para la empresa Pentcloud" />
      <link rel="icon" href="/LogoPentcloud.svg" />
    </Head>
    <NavBar />

    <Component {...pageProps} />
  </>
}

export default MyApp
