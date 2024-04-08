import { StyledContainer } from "@/design-system/StyledContainer";
import { StyledDiv } from "@/design-system/StyledDiv";
import { StyledLink } from "@/design-system/StyledLink";

export default function Footer() {
  return (
    <>
      <StyledDiv>
        <StyledLink href="/about" $isFooter>
          Felicitas Kroder
        </StyledLink>
      </StyledDiv>
    </>
  );
}
