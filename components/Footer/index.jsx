import { StyledContainer } from "@/design-system/StyledContainer";
import { StyledDiv } from "@/design-system/StyledDiv";
import { StyledLink } from "@/design-system/StyledLink";
import { StyledLamp } from "@/design-system/StyledImage";
import Link from "next/link";
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
