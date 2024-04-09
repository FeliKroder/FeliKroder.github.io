import Head from "next/head";
import {
  StyledItem,
  StyledItemBox,
  StyledItemContainer,
  StyledWerkzeugkasten,
} from "@/design-system/StyledWerkzeugkasten";

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
        <p>Feli's Werkzeugkasten</p>
        <p>
          Du möchtest mehr über mich erfahren? Hover auf die Elemente und mein
          Werkzeugkasten erzählt dir etwas über mich!
        </p>
        <StyledWerkzeugkasten>
          <StyledItemBox>
            <StyledItemContainer>
              <StyledItem
                src="/rosacloud.jpg"
                alt="Rosarote Wolkendecke"
                width={50}
                height={50}
                priority={true}
              ></StyledItem>
            </StyledItemContainer>
            <StyledItemContainer $isWideItemContainer>
              <StyledItem
                $isWideItem
                src="/rosacloud.jpg"
                alt="Rosarote Wolkendecke"
                width={50}
                height={50}
                priority={true}
              ></StyledItem>
            </StyledItemContainer>
            <StyledItemContainer $isSmallItemContainer>
              <StyledItem
                $isSmallItem
                src="/rosacloud.jpg"
                alt="Rosarote Wolkendecke"
                width={50}
                height={50}
                priority={true}
              ></StyledItem>
            </StyledItemContainer>
            <StyledItemContainer $isSmallItemContainer>
              <StyledItem
                $isSmallItem
                src="/rosacloud.jpg"
                alt="Rosarote Wolkendecke"
                width={50}
                height={50}
                priority={true}
              ></StyledItem>
            </StyledItemContainer>
            <StyledItemContainer $isSmallItemContainer>
              <StyledItem
                $isSmallItem
                src="/rosacloud.jpg"
                alt="Rosarote Wolkendecke"
                width={50}
                height={50}
                priority={true}
              ></StyledItem>
            </StyledItemContainer>
          </StyledItemBox>
        </StyledWerkzeugkasten>
      </main>
    </>
  );
}
