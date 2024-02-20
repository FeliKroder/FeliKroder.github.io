import {
  StyledLink,
  StyledNavigationBar,
  StyledNavigationItem,
} from "@/design-system/StyledMainNavigation";

export default function MainNavigation() {
  return (
    <div>
      <nav aria-label="Mainnavigation">
        <StyledNavigationBar>
          <StyledNavigationItem>
            <StyledLink href="/./">
              {/* <svg></svg> */}
              <span>Work</span>
            </StyledLink>
          </StyledNavigationItem>
          <StyledNavigationItem>
            <StyledLink href="/./about">
              {/* <svg></svg> */}
              <span>About</span>
            </StyledLink>
          </StyledNavigationItem>
          <StyledNavigationItem>
            <StyledLink
              href="/./FelicitasKroderResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* <svg></svg> */}
              <span>CV</span>
            </StyledLink>
          </StyledNavigationItem>
        </StyledNavigationBar>
      </nav>
    </div>
  );
}
