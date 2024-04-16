import { StyledDiv } from "@/design-system/StyledDiv";
import { StyledLink } from "@/design-system/StyledLink";
import ContactModal from "../ContactModal";

export default function Footer() {
  return (
    <>
      <ContactModal></ContactModal>
      <StyledDiv>
        <StyledLink href="/about" $isFooter>
          Felicitas Kroder
        </StyledLink>
      </StyledDiv>
    </>
  );
}
