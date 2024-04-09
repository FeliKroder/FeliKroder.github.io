import styled, { css } from "styled-components";

export const StyledOverlayTextBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: fixed;
  width: 100vw;
  // border: solid 1px blue;
`;

export const StyledOverlayTitle = styled.h2`
  width: 100vw;
  text-align: center;
  padding: 0 0 0.5em 0;
  font-weight: bold;
  font-size: 2.8em;
  ${({ $isAbout }) =>
    $isAbout &&
    css`
      padding: 0.3em 0 0.9em 0;
      font-weight: 500em;
      letter-spacing: 0.04em;
    `};
`;

export const StyledOverlayText = styled.p`
  text-align: center;
  padding: 0 1.3em 0 1.3em;
  padding-bottom: ${({ $isBottomOverlayText }) =>
    $isBottomOverlayText ? "0" : "4em"};
  font-weight: 450em;
  letter-spacing: 0.08em;
  line-height: 180%;
  width: 100vw;
  max-width: 60em;
  // border: solid red 2px;

  ${({ $isAbout }) =>
    $isAbout &&
    css`
      width: 40em;
      padding: 0 1.3em 0 1.3em;
      font-size: 0.8em;
      letter-spacing: 0.04em;
    `};
`;
