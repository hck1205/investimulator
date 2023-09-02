"use client";

import Head from "next/head";
import { useEffect } from "react";

import { LayoutComponent } from "@/components";

// import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';

// import { FIRE_BASE_CONFIG } from '@/constpack';
// import { GRAY, WHITE } from '@/designSystem';

import type { AppProps } from "next/app";

import "../../public/assets/styles/index.scss";

const RootApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    // const app = initializeApp(FIRE_BASE_CONFIG);
    // const analytics = getAnalytics(app);
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>모의투자 인베스티뮬레이터</title>
      </Head>

      <LayoutComponent>
        <Component {...pageProps} />
      </LayoutComponent>
    </>
  );
};

export default RootApp;
