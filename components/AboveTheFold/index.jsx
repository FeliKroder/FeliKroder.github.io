import { StyledContainer } from "@/design-system/StyledContainer";
import {
  StyledImage,
  StyledOverlayText,
  StyledOverlayTextBox,
  StyledOverlayTitle,
} from "@/design-system/StyledImage";
import Header from "../Header";

export default function AboveTheFold() {
  return (
    <div>
      <StyledContainer>
        <StyledImage
          src="/rosacloud.jpg"
          alt="Rosarote Wolkendecke"
          width={2880}
          height={2160}
          priority={true}
        ></StyledImage>
        <StyledOverlayTextBox>
          <StyledOverlayTitle>Hi! Ich bin Feli</StyledOverlayTitle>
        </StyledOverlayTextBox>
        <StyledOverlayTextBox>
          <StyledOverlayText>
            Vor lange Zeit kam ein smartes Baby in Köln auf die Welt. Genau, das
            war ich. 19 Jahre später begann ich meine Karriere als
            vielschichtige Designerin. Weitere 16 Jahre später gehe ich neue
            Wege, als Webentwicklerin. <br />
            Ich liebe verspieltes Interaktionsdesign, Minimalismus und
            glückliche Katzen.
          </StyledOverlayText>
        </StyledOverlayTextBox>
      </StyledContainer>
    </div>
  );
}
