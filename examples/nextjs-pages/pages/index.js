import Head from "next/head";
import Hero from "./_components/hero";
import Playground from "./_components/playground";

export default function Home() {
  return (
    <>
      <Head>
        <title>Perfection</title>
        <meta name="description" content="Perfection Example for Next.js - Pages router" />
      </Head>
      <Hero />
      <Playground />
    </>
  );
}
