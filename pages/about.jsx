import Head from "next/head";
import { StyledItem } from "@/design-system/StyledImage";

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
        <p>Feli's Karriere Bausatz</p>
        <p>
          Du möchtest mehr über mich erfahren? Hover auf jedes Element und mein
          Karriere Bausatz wird dir mehr über mich erzählen!
        </p>
        <StyledItem
          src="/rosacloud.jpg"
          alt="Rosarote Wolkendecke"
          width={50}
          height={50}
          priority={true}
        ></StyledItem>
        <StyledItem
          // $isSmallItem
          src="/rosacloud.jpg"
          alt="Rosarote Wolkendecke"
          width={50}
          height={50}
          priority={true}
        ></StyledItem>
      </main>
    </>
  );
}
