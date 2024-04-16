import Head from "next/head";
import { StyledContainer } from "@/design-system/StyledContainer";
import {
  StyledItemBox,
  StyledItemContainer,
  StyledWerkzeugkasten,
} from "@/design-system/StyledWerkzeugkasten";
import { StyledItem } from "@/design-system/StyledImage";
import {
  StyledOverlayText,
  StyledOverlayTextBox,
  StyledOverlayTitle,
} from "@/design-system/StyledText";
import { StyledLamp } from "@/design-system/StyledImage";
import { StyledDiv } from "@/design-system/StyledDiv";

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
              Du möchtest mehr über mich erfahren? Klicke auf die Elemente. Mein
              Werkzeugkasten erzählt dir etwas über mich!
            </StyledOverlayText>
          </StyledOverlayTextBox>
        </StyledContainer>
        <StyledContainer $isAbout>
          <StyledWerkzeugkasten>
            <StyledItemContainer>
              <StyledItemBox>
                <StyledItem
                  src="/brain-red.png"
                  alt="Gehirn"
                  width={260}
                  height={260}
                  priority={true}
                ></StyledItem>
              </StyledItemBox>
              <StyledItemBox $isWideItemBox>
                <StyledItem
                  $isWideItem
                  src="/Tea.png"
                  alt="Tee"
                  width={260}
                  height={260}
                  priority={true}
                ></StyledItem>
              </StyledItemBox>
              <StyledItemBox $isFirstSmallItemBox>
                <StyledItem
                  $isSmallItem
                  src="/Heart.png"
                  alt="Anatomisches Herz"
                  width={260}
                  height={260}
                  priority={true}
                ></StyledItem>
              </StyledItemBox>
              <StyledItemBox $isSecondSmallItemBox>
                <StyledItem
                  $isSmallItem
                  src="/Brokkoli-pink.png"
                  alt="Brokkoli"
                  width={260}
                  height={260}
                  priority={true}
                ></StyledItem>
              </StyledItemBox>
              {/* <StyledItemBox $isSecondSmallItemBox>
                <StyledItem
                  $isSmallItem
                  src="/Computer.png"
                  alt="Computer"
                  width={260}
                  height={260}
                  priority={true}
                ></StyledItem>
              </StyledItemBox> */}
            </StyledItemContainer>
          </StyledWerkzeugkasten>
        </StyledContainer>
        <StyledDiv $isAbout></StyledDiv>
      </main>
    </>
  );
}
