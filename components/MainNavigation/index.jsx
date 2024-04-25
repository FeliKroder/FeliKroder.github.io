import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  StyledNavigationBar,
  StyledLinkName,
} from "@/design-system/StyledMainNavigation";
import { StyledNavigationItem } from "@/design-system/StyledLink";

export default function MainNavigation() {
  const router = useRouter();
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    setCurrentPath(router.pathname);
  }, [router.pathname]);

  return (
    <div>
      <nav aria-label="Mainnavigation">
        <StyledNavigationBar>
          <StyledNavigationItem
            href="/."
            style={{
              backgroundColor:
                currentPath === "/" ? "var(--secondary-color)" : "",
            }}
          >
            <StyledLinkName>Work</StyledLinkName>
          </StyledNavigationItem>
          <StyledNavigationItem
            href="/about"
            style={{
              backgroundColor:
                currentPath === "/about" ? "var(--secondary-color)" : "",
            }}
          >
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
