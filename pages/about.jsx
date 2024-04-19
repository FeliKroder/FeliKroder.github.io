import { useState } from "react";
import Image from "next/image";
import Head from "next/head";
// import Sprechblase from "@/components/Gedankenblase";
import { StyledContainer } from "@/design-system/StyledContainer";
import {
  StyledItemBox,
  StyledItemContainer,
  StyledWerkzeugkasten,
} from "@/design-system/StyledWerkzeugkasten";
import { StyledItem, StyledSprechblase } from "@/design-system/StyledImage";
import {
  StyledOverlayText,
  StyledOverlayTextBox,
  StyledOverlayTitle,
} from "@/design-system/StyledText";
import { StyledLamp } from "@/design-system/StyledImage";
import { StyledDiv } from "@/design-system/StyledDiv";

export default function Home() {
  const items = [
    {
      imageSrc: "/brain.png",
      imageAlt: "Gehirn",
      imageWidth: 260,
      imageHeight: 260,
      imagePriority: true,
      bubbleTitle: "Ein saugfähiges Gehirn",
      bubbleDescription:
        "Mein leistungsstarkes Gehirn ist immer auf der Suche nach neuen Herausforderungen.",
      bubbleSrc: "/Sprechblasen.svg",
      bubbleAlt: "Sprechblase",
      bubbleWidth: 600,
      bubbleHeight: 600,
      bubblePriority: true,
      cloudSrc: "/Sprechblasen.svg",
      cloudAlt: "Sprechblase",
    },

    {
      imageSrc: "/tea.png",
      imageAlt: "Tee",
      imageWidth: 260,
      imageHeight: 260,
      imagePriority: true,
      bubbleTitle: "Eine Tasse Tee",
      bubbleDescription: "Tee für innere Ruhe und eine bessere Konzentration.",
      bubbleSrc: "/Sprechblasen.svg",
      bubbleAlt: "Sprechblase",
      bubbleWidth: 600,
      bubbleHeight: 600,
      bubblePriority: true,
      isWideBox: true,
      isWideItem: true,
    },
    {
      imageSrc: "/heart.png",
      imageAlt: "Anatomisches Herz",
      imageWidth: 200,
      imageHeight: 200,
      imagePriority: true,
      bubbleTitle: "Mit Herz ",
      bubbleDescription:
        "Alles, was ich mache, mache ich mit Leidenschaft und Hingabe.",
      bubbleSrc: "/Sprechblasen.svg",
      bubbleAlt: "Sprechblase",
      bubbleWidth: 600,
      bubbleHeight: 600,
      bubblePriority: true,
      isFirstSmallBox: true,
      isFirstSmallItem: true,
    },
    {
      imageSrc: "/brokkoli.png",
      imageAlt: "Brokkoli",
      imageWidth: 200,
      imageHeight: 200,
      imagePriority: true,
      bubbleTitle: "Vitamine",
      bubbleDescription:
        "Ich ernähre mich rein pflanzlich und bin stolz drauf.",
      bubbleSrc: "/Sprechblasen.svg",
      bubbleAlt: "Sprechblase",
      bubbleWidth: 600,
      bubbleHeight: 600,
      bubblePriority: true,
      isSecondSmallBox: true,
      isSecondSmallItem: true,
    },
  ];

  const [isSprechblaseVisible, setIsSprechblaseVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleBoxHover = (index) => {
    setIsSprechblaseVisible(true);
    setSelectedItem(index);
  };

  const handleBoxLeave = () => {
    if (isSprechblaseVisible) {
      setIsSprechblaseVisible(false);
      setSelectedItem(null);
    }
  };

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
              {items.map((item, index) => (
                <StyledItemBox
                  key={index}
                  $isWideItemBox={item.isWideBox}
                  $isFirstSmallItemBox={item.isFirstSmallBox}
                  $isSecondSmallItemBox={item.isSecondSmallBox}
                  onMouseEnter={() => handleBoxHover(index)}
                  onMouseLeave={handleBoxLeave}
                >
                  <StyledItem
                    key={index}
                    $isWideItem={item.isWideItem}
                    $isFirstSmallItem={item.isFirstSmallItem}
                    $isSecondSmallItem={item.isSecondSmallItem}
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    width={item.imageWidth}
                    height={item.imageHeight}
                    priority={item.imagePriority}
                  />
                  {isSprechblaseVisible && selectedItem === index && (
                    // {/* // visualViewport.width >= */}
                    <>
                      <StyledSprechblase
                        $isWideItem={item.isWideItem}
                        $isFirstSmallItem={item.isFirstSmallItem}
                        $isSecondSmallItem={item.isSecondSmallItem}
                        src={item.bubbleSrc}
                        alt={item.bubbleAlt}
                        width={item.bubbleWidth}
                        height={item.bubbleHeight}
                        priority={item.bubblePriority}
                      ></StyledSprechblase>
                      <StyledOverlayTitle
                        $isSprechblase
                        $isFirstSmallItem={item.isFirstSmallItem}
                        $isSecondSmallItem={item.isSecondSmallItem}
                        $isWideItem={item.isWideItem}
                      >
                        {item.bubbleTitle}
                      </StyledOverlayTitle>
                      <StyledOverlayText
                        $isSprechblase
                        $isFirstSmallItem={item.isFirstSmallItem}
                        $isSecondSmallItem={item.isSecondSmallItem}
                        $isWideItem={item.isWideItem}
                      >
                        {item.bubbleDescription}
                      </StyledOverlayText>
                    </>
                  )}
                </StyledItemBox>
              ))}

              {/* ´<StyledItemBox $isWideItemBox>
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
              </StyledItemBox> */}
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
        <StyledDiv $isAboutFooter></StyledDiv>
      </main>
    </>
  );
}
