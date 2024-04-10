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
          <StyledOverlayTextBox $isAbout>
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
        <StyledContainer>
          <StyledWerkzeugkasten>
            <StyledItemBox>
              <StyledItemContainer>
                <StyledItem
                  src="/brain-red.png"
                  alt="Gehirn"
                  width={4882}
                  height={4882}
                  priority={true}
                ></StyledItem>
              </StyledItemContainer>
              <StyledItemContainer $isWideItemContainer>
                <StyledItem
                  $isWideItem
                  src="/Tea.png"
                  alt="Tee"
                  width={4882}
                  height={1692}
                  priority={true}
                ></StyledItem>
              </StyledItemContainer>
              <StyledItemContainer $isSmallItemContainer>
                <StyledItem
                  $isSmallItem
                  src="/Heart.png"
                  alt="Anatomisches Herz"
                  width={4882}
                  height={4882}
                  priority={true}
                ></StyledItem>
              </StyledItemContainer>
              <StyledItemContainer $isSmallItemContainer>
                <StyledItem
                  $isSmallItem
                  src="/Brokkoli-pink.png"
                  alt="Brokkoli"
                  width={4882}
                  height={4882}
                  priority={true}
                ></StyledItem>
              </StyledItemContainer>
              <StyledItemContainer $isSmallItemContainer>
                <StyledItem
                  $isSmallItem
                  src="/Computer.png"
                  alt="Computer"
                  width={4882}
                  height={4882}
                  priority={true}
                ></StyledItem>
              </StyledItemContainer>
            </StyledItemBox>
          </StyledWerkzeugkasten>
        </StyledContainer>
      </main>
    </>
  );
}
