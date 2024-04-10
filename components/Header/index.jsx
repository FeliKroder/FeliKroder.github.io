import { StyledHeader } from "@/design-system/StyledHeader";
import MainNavigation from "../MainNavigation";
import { StyledLink } from "@/design-system/StyledLink";

export default function Header() {
  return (
    <>
      <StyledHeader>
        <StyledLink href="/">
          <p>Feli</p>
        </StyledLink>
        <MainNavigation></MainNavigation>
      </StyledHeader>
    </>
  );
}
