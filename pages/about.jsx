import Head from "next/head";
import { StyledContainer } from "@/design-system/StyledContainer";
import {
  StyledItem,
  StyledItemBox,
  StyledItemContainer,
  StyledWerkzeugkasten,
} from "@/design-system/StyledWerkzeugkasten";

import {
  StyledOverlayText,
  StyledOverlayTextBox,
  StyledOverlayTitle,
} from "@/design-system/StyledText";

import { StyledLamp } from "@/design-system/StyledImage";

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
        <StyledContainer $isAbout>
          <StyledOverlayTextBox>
            <StyledLamp
              src="/neon.jpg"
              alt="Lampe"
              width={40}
              height={40}
              priority={true}
            ></StyledLamp>
            <StyledOverlayTitle $isAbout>
              Feli's Werkzeugkasten
            </StyledOverlayTitle>
            <StyledOverlayText $isAbout>
              Du möchtest mehr über mich erfahren? Hover über die Elemente. Mein
              Werkzeugkasten erzählt dir etwas über mich!
            </StyledOverlayText>
          </StyledOverlayTextBox>
        </StyledContainer>
        <StyledWerkzeugkasten>
          <StyledItemBox>
            <StyledItemContainer>
              <StyledItem
                src="/Gehirn.png"
                alt="Gehirn"
                width={50}
                height={50}
                priority={true}
              ></StyledItem>
            </StyledItemContainer>
            <StyledItemContainer $isWideItemContainer>
              <StyledItem
                $isWideItem
                src="/Gehirn.png"
                alt="Gehirn"
                width={50}
                height={50}
                priority={true}
              ></StyledItem>
            </StyledItemContainer>
            <StyledItemContainer $isSmallItemContainer>
              <StyledItem
                $isSmallItem
                src="/Herz.png"
                alt="Anatomisches Herz"
                width={50}
                height={50}
                priority={true}
              ></StyledItem>
            </StyledItemContainer>
            <StyledItemContainer $isSmallItemContainer>
              <StyledItem
                $isSmallItem
                src="/Gehirn.png"
                alt="Gehirn"
                width={50}
                height={50}
                priority={true}
              ></StyledItem>
            </StyledItemContainer>
            <StyledItemContainer $isSmallItemContainer>
              <StyledItem
                $isSmallItem
                src="/Gehirn.png"
                alt="Gehirn"
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
