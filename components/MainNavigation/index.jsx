import {
  StyledNavigationBar,
  StyledLinkName,
} from "@/design-system/StyledMainNavigation";
import { StyledNavigationItem } from "@/design-system/StyledLink";

export default function MainNavigation() {
  return (
    <div>
      <nav aria-label="Mainnavigation">
        <StyledNavigationBar>
          <StyledNavigationItem href="/.">
            <StyledLinkName>Work</StyledLinkName>
          </StyledNavigationItem>
          <StyledNavigationItem href="/./about">
            <StyledLinkName>About</StyledLinkName>
          </StyledNavigationItem>
          <StyledNavigationItem
            href="/./FelicitasKroderResume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StyledLinkName>CV</StyledLinkName>
          </StyledNavigationItem>
        </StyledNavigationBar>
      </nav>
    </div>
  );
}
