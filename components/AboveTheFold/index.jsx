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
            Vor 15 Jahren entwickelte ich das erste Mal mit HTML und CSS eine
            eigene Webseite. Ganz ehrlich? Sie war schrecklich.... aber das
            Programmieren fand ich super! Obwohl mein Berufsweg mich ins Design
            führte, ließ mich der Gedanke nie los: „Ich will lernen, wie es
            richtig geht!“ Vor einem Jahr habe ich meinen Mut zusammengenommen
            und mein Berufsleben auf den Kopf gestellt. Und das Beste daran:
            Viele Fertigkeiten und Erfahrungen aus meiner Design-Vergangenheit
            helfen mir, eine bessere Programmierin zu sein.
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
