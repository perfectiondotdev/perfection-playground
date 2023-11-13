import "@/styles/globals.css";
import Head from "next/head";
import Layout from "./_components/layout";
import { Inter } from "next/font/google";
import Oversite from "./_components/useclient/oversiteNoSSR";
// import Oversite from "./_components/useclient/oversiteNoNPM";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${inter.className}`}>
        <Component {...pageProps} />
        {process.env.NEXT_PUBLIC_PERFECTION_PREVIEW == "true" && <Oversite />}
      </main>
    </Layout>
  );
}
