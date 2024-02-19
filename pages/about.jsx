import Head from "next/head";
import AboveTheFold from "@/components/AboveTheFold";

export default function Home() {
  return (
    <>
      <Head>
        <title>About Felicitas Kroder</title>
        <meta
          name="description"
          content="Diese Seite gibt eine kurze Übersicht über meine Person"
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
      <main>
        <div>
          <AboveTheFold />
        </div>
      </main>
    </>
  );
}
