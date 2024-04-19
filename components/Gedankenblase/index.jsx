import { useState } from "react";
import Image from "next/image";
import { StyledItemBox } from "@/design-system/StyledWerkzeugkasten";
import {
  StyledOverlayText,
  StyledOverlayTitle,
} from "@/design-system/StyledText";

export default function Sprechblase() {
  const items = [
    {
      title: "Ein saugfähiges Gehirn",
      src: "/brain-red.png",
      alt: "Gehirn",
      width: 260,
      height: 260,
      priority: true,
      description:
        "Mein leistungsstarkes Gehirn ist immer auf der Suche nach neuen Herausforderungen.",
    },
    {
      title: "Eine Tasse Tee",
      src: "/tea.png",
      alt: "Tee",
      width: 260,
      height: 260,
      priority: true,
      description: "Eine Tasse Tee zum Entspannen und Genießen.",
    },
    {
      title: "Herz & Leidenschaft",
      src: "/heart.png",
      alt: "Anatomisches Herz",
      width: 200,
      height: 200,
      priority: true,
      description:
        "Alles was ich mache, mache ich mit Leidenschaft und Hingabe.",
    },
    {
      title: "Vitaminbombe",
      src: "/brokkoli.png",
      alt: "Brokkoli",
      width: 200,
      height: 200,
      priority: true,
      description: "Kind, iss dein Gemüse!",
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
      <StyledItemBox
        onMouseEnter={() => handleBoxHover(null)}
        onMouseLeave={handleBoxLeave}
      >
        {items.map((item, index) => (
          <Image
            key={index}
            src={item.src}
            alt={item.alt}
            width={item.width}
            height={item.height}
            priority={item.priority}
            onMouseEnter={() => handleBoxHover(index)}
            onMouseLeave={handleBoxLeave}
          />
        ))}
      </StyledItemBox>
      {isSprechblaseVisible && selectedItem !== null && (
        <>
          <StyledSprechblase
            src="/Sprechblasen.svg"
            alt="Sprechblase"
            width={600}
            height={600}
            priority={true}
          ></StyledSprechblase>
          <StyledOverlayTitle $isSprechblase>
            {items[selectedItem].title}
          </StyledOverlayTitle>
          <StyledOverlayText $isSprechblase>
            {items[selectedItem].description}
          </StyledOverlayText>
        </>
      )}
    </>
  );
}
