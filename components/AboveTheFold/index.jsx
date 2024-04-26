import { StyledContainer } from "@/design-system/StyledContainer";
import { StyledArrow, StyledMood } from "@/design-system/StyledImage";
import {
  StyledOverlayText,
  StyledOverlayTextBox,
  StyledOverlayTitle,
} from "@/design-system/StyledText";

export default function AboveTheFold() {
  return (
    <div>
      <StyledContainer>
        <StyledMood
          src="/background/rosacloud.jpg"
          alt="Rosarote Wolkendecke"
          width={2880}
          height={2160}
          priority={true}
        ></StyledMood>
        <StyledOverlayTextBox>
          <StyledOverlayTitle>Hi! Ich bin Feli</StyledOverlayTitle>
          <StyledOverlayText>
            Vor langer Zeit kam ein smartes Baby in Köln auf die Welt. Das war
            ich. 19 Jahre später begann ich eine Karriere als Designerin.
            Weitere 16 Jahre später wagte ich den Sprung ins kalte Wasser.
            <br />
            Ich legte die Weichen für meinen Berufung als Web Developerin.
          </StyledOverlayText>
          <StyledOverlayText $isBottomOverlayText>
            Bald findest du hier meine Projekte
          </StyledOverlayText>
          {/* <StyledArrow
            src="/Arrow_down.svg"
            alt="Pfeil"
            width={40}
            height={40}
            priority={true}
          ></StyledArrow> */}
        </StyledOverlayTextBox>
      </StyledContainer>
    </div>
  );
}
