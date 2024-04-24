import styled, { css } from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  height: 70px;
  padding: 1.4em 0 0 4em;
  // margin: 3em 0 0 0;
  background-color: var(--accent-color-medium);

  ${({ $isAboutFooter }) =>
    $isAboutFooter &&
    css`
      height: 1px;
      background-color: var(--premium-color);
      // margin: 30em 0 0 0;
    `};

  @media (max-width: 670px) {
    height: 60px;
    padding: 1em 0 0 1.7em;
    // margin: 2em 0 0 0;
  }
`;
