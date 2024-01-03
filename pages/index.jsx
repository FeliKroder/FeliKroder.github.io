import Head from "next/head";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio von Felicitas Kroder</title>
        <meta
          name="description"
          content="Dieses Portfolio ist ein persönliches Projekt und dient zur visuellen Darstellung meiner programmatischen Fähigkeiten"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
      </Head>
      <main className="">
        <div>
          <Header />
        </div>
      </main>
    </>
  );
}
