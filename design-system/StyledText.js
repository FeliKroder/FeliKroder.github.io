import styled, { css } from "styled-components";

export const StyledOverlayTextBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;
  max-width: 400px;

  // border: solid 1px blue;
  ${({ $isAbout }) =>
    $isAbout &&
    css`
      top: 25%;
      width: 100vw;
      padding: 17em 0 0 0;
      padding: 1.6em 0 0 0;
      position: absolute;
    `};
`;

export const StyledOverlayTitle = styled.h2`
  width: 100vw;
  text-align: center;
  padding: 0 0 0.82em 0;
  font-weight: bold;
  font-size: 2.8em;
  ${({ $isAbout }) =>
    $isAbout &&
    css`
      padding: 0.3em 0 0.9em 0;
      font-weight: 500em;
      letter-spacing: 0.04em;
    `};

    @media (max-width: 670px) {
      ${({ $isAbout }) =>
        $isAbout &&
        css`
          font-size: 1.4em;
          padding: 0.8em 0 0.7em 0;
        `};
`;

export const StyledOverlayText = styled.p`
  text-align: center;
  padding: 0 1.3em 0 1.3em;
  padding-bottom: ${({ $isBottomOverlayText }) =>
    $isBottomOverlayText ? "0" : "6.1em"};
  font-weight: 450em;
  letter-spacing: 0.08em;
  line-height: 180%;
  width: 100vw;
  max-width: 38em;

  // border: solid red 2px;

  ${({ $isAbout }) =>
    $isAbout &&
    css`
      padding: 0 1.3em 2em 1.3em;
      font-size: 0.9em;
      letter-spacing: 0.04em;
    `};

  @media (max-width: 670px) {
    ${({ $isAbout }) =>
      $isAbout &&
      css`
        width: 22em;
        padding: 0 1.3em 5em 1.3em;
        font-size: 0.8em;
      `};
  }
`;

export const StyledErrorMessage = styled.p`
  color: red;
  font-size: 0.8rem;
  margin: -0.5em 0 1em 2em;
`;
