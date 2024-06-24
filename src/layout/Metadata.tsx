import Head from "next/head";
import Script from "next/script";
import React from "react";

const Metadata = () => {
  return (
    <>
      <Head>
        <title>Bitcoin Search</title>
        <meta
          name="description"
          content="Search the depths of bitcoin's technical ecosystem"
        ></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        ></meta>
        <link rel="icon" href="favicon.ico" type="image/x-icon" />
        <meta
          property="og:image"
          content="https://bitcoinsearch.xyz/btc_book_2_1.jpg"
        ></meta>
        <meta property="og:title" content="Bitcoin Search"></meta>
        <meta property="og:url" content="https://bitcoinsearch.xyz"></meta>
        <meta
          property="og:description"
          content="Search the depths of bitcoin's technical ecosystem"
        ></meta>
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta
          name="twitter:image"
          content="https://bitcoinsearch.xyz/btc_book_2_1.jpg"
        ></meta>
        <link
          rel="preload"
          href="./font/Mona-Sans.woff2"
          as="font"
          type="font/woff2"
          crossOrigin=""
        />
      </Head>
      <Script
        async
        src="https://visits.bitcoindevs.xyz/script.js"
        data-website-id="84277a9b-dc29-4401-a83e-15683c9d5c53"
      ></Script>
    </>
  );
};

export default Metadata;
