import styled, { css } from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  padding-bottom: 8em;

  ${({ $isAboutHeader }) =>
    $isAboutHeader &&
    css`
      height: 22em;
      width: 100vw;
      min-height: 30vh;
    `}

  @media(max-width: 670px) {
    min-height: 25vh;
  }

  ${({ $isAbout }) =>
    $isAbout &&
    css`
      // height: 10.5em;
      min-height: 60vh;
      width: 100vw;
    `}
`;
