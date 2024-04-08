import { StyledContainer } from "@/design-system/StyledContainer";
import {
  StyledImage,
  StyledOverlayText,
  StyledOverlayTextBox,
  StyledOverlayTitle,
} from "@/design-system/StyledImage";

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
          {/* </StyledOverlayTextBox>
        <StyledOverlayTextBox> */}
          <StyledOverlayText>
            Vor langer Zeit kam ein smartes, kölsches Baby auf die Welt. Das war
            ich. Mit 19 begann ich eine Karriere als holistische Designerin. Mit
            mitte 30 wagte ich endlich den Sprung ins kalte Wasser. <br />
            Ich legte die ersten Weichen für meine neue Karriere als Web
            Developerin.
          </StyledOverlayText>
          <StyledOverlayText $isBottomOverlayText>
            Du möchtest mehr über mich erfahren?
          </StyledOverlayText>
        </StyledOverlayTextBox>
      </StyledContainer>
    </div>
  );
}
