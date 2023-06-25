import Head from "next/head";
import { LayoutComponent } from "@/components";

import type { AppProps } from "next/app";

import "../../public/assets/styles/index.scss";

const RootApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Investimulator</title>
      </Head>

      <LayoutComponent>
        <Component {...pageProps} />
      </LayoutComponent>
    </>
  );
};

export default RootApp;
