import { StyledContainer } from "@/design-system/StyledContainer";
import { StyledDiv } from "@/design-system/StyledDiv";
import { StyledLink } from "@/design-system/StyledLink";
import { StyledLamp } from "@/design-system/StyledImage";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <Link href="/" $isContact>
        <StyledLamp
          $isContact
          src="/Arrow_down.svg"
          alt="Pfeil"
          width={40}
          height={40}
          priority={true}
        ></StyledLamp>
      </Link>
      <StyledDiv>
        <StyledLink href="/about" $isFooter>
          Felicitas Kroder
        </StyledLink>
      </StyledDiv>
    </>
  );
}
