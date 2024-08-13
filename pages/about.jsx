import { useState } from "react";
import Head from "next/head";
import { StyledContainer } from "@/design-system/StyledContainer";
import {
  StyledItemBox,
  StyledItemContainer,
  StyledCardBackside,
  StyledCardBox,
  StyledWerkzeugkasten,
} from "@/design-system/StyledWerkzeugkasten";
import {
  StyledItem,
  StyledSprechblase,
  StyledWerkzeug,
} from "@/design-system/StyledImage";
import {
  StyledOverlayText,
  StyledOverlayTextBox,
  StyledOverlayTitle,
  StyledCardText,
  StyledCardTitle,
} from "@/design-system/StyledText";
import { StyledLamp } from "@/design-system/StyledImage";
import { StyledDiv } from "@/design-system/StyledDiv";

export default function Home() {
  const items = [
    {
      imageSrc: "/about-item/brain.png",
      imageAlt: "Gehirn",
      imageWidth: 240,
      imageHeight: 240,
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
      imageSrc: "/about-item/tea.png",
      imageAlt: "Tee",
      imageWidth: 240,
      imageHeight: 240,
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
      imageSrc: "/about-item/heart.png",
      imageAlt: "Anatomisches Herz",
      imageWidth: 240,
      imageHeight: 240,
      imagePriority: true,
      bubbleTitle: "Mit Herz",
      bubbleDescription:
        "In allem, was ich tue, steckt meine Hingabe und Leidenschaft.",
      bubbleSrc: "/Sprechblasen.svg",
      bubbleAlt: "Sprechblase",
      bubbleWidth: 600,
      bubbleHeight: 600,
      bubblePriority: true,
      isFirstSmallBox: true,
      isFirstSmallItem: true,
    },
    {
      imageSrc: "/about-item/brokkoli.png",
      imageAlt: "Brokkoli",
      imageWidth: 240,
      imageHeight: 240,
      imagePriority: true,
      bubbleTitle: "Almost Vegan",
      bubbleDescription: "Brokkoli fördert die Bildung neuer Nervenzellen.",
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
        <StyledContainer $isAboutHeader>
          <StyledOverlayTextBox $isAbout>
            <StyledWerkzeug
              src="/werkzeug.svg"
              alt="Werkzeug-Icon"
              width={50}
              height={50}
              priority={true}
            ></StyledWerkzeug>
            <StyledOverlayTitle $isAbout>
              Feli's Werkzeugkasten
            </StyledOverlayTitle>
            <StyledOverlayText $isAbout>
              Du möchtest mehr über mich erfahren? Klicke auf die Tools. Mein
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
                  <StyledCardBox>
                    <StyledCardBackside
                      key={index}
                      $isWideItemBox={item.isWideBox}
                      $isFirstSmallItemBox={item.isFirstSmallBox}
                      $isSecondSmallItemBox={item.isSecondSmallBox}
                    >
                      <StyledCardTitle
                        $isSprechblase
                        $isFirstSmallItem={item.isFirstSmallItem}
                        $isSecondSmallItem={item.isSecondSmallItem}
                        $isWideItem={item.isWideItem}
                      >
                        {item.bubbleTitle}
                      </StyledCardTitle>
                      <StyledCardText
                        $isSprechblase
                        $isFirstSmallItem={item.isFirstSmallItem}
                        $isSecondSmallItem={item.isSecondSmallItem}
                        $isWideItem={item.isWideItem}
                      >
                        {item.bubbleDescription}
                      </StyledCardText>
                    </StyledCardBackside>
                  </StyledCardBox>
                </StyledItemBox>
              ))}
            </StyledItemContainer>
          </StyledWerkzeugkasten>
        </StyledContainer>
        {/* <StyledDiv $isAboutFooter></StyledDiv> */}
      </main>
    </>
  );
}
