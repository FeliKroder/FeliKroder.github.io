import {
  StyledNavigationBar,
  StyledNavigationItem,
} from "@/design-system/StyledMainNavigation";

export default function MainNavigation() {
  return (
    <div>
      <nav aria-label="Mainnavigation">
        <StyledNavigationBar>
          <StyledNavigationItem>
            {/* <a> */}
            {/* <svg></svg> */}
            <span>Work</span>
            {/* </a> */}
          </StyledNavigationItem>
          <StyledNavigationItem>
            {/* <a> */}
            {/* <svg></svg> */}
            <span>About</span>
            {/* </a> */}
          </StyledNavigationItem>
          <StyledNavigationItem>
            {/* <a> */}
            {/* <svg></svg> */}
            <span>CV</span>
            {/* </a> */}
          </StyledNavigationItem>
        </StyledNavigationBar>
      </nav>
    </div>
  );
}
