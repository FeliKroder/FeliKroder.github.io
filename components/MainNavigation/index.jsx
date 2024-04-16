import {
  StyledNavigationBar,
  StyledNavigationItem,
} from "@/design-system/StyledMainNavigation";
import { StyledLink } from "@/design-system/StyledLink";

export default function MainNavigation() {
  return (
    <div>
      <nav aria-label="Mainnavigation">
        <StyledNavigationBar>
          <StyledNavigationItem>
            <StyledLink href="/.">
              <span>Work</span>
            </StyledLink>
          </StyledNavigationItem>
          <StyledNavigationItem>
            <StyledLink href="/./about">
              <span>About</span>
            </StyledLink>
          </StyledNavigationItem>
          <StyledNavigationItem>
            <StyledLink
              href="/./FelicitasKroderResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>CV</span>
            </StyledLink>
          </StyledNavigationItem>
        </StyledNavigationBar>
      </nav>
    </div>
  );
}
