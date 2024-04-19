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

  ${({ $isSprechblase }) =>
    $isSprechblase &&
    css`
      position: absolute;
      top: -50px;
      left: -30px;
      width: 240;
      height: 310px;
      text-transform: uppercase;
      font-size: 0.9em;
      line-height: 120%;
      text-align: left;
    `};

  ${({ $isFirstSmallItem, $isSecondSmallItem }) =>
    ($isFirstSmallItem || $isSecondSmallItem) &&
    css`
      top: 172px;
      left: -129px;
      width: 160px;
      height: 80px;
    `};

  ${({ $isWideItem }) =>
    $isWideItem &&
    css`
      top: -70px;
      left: 197px;
      width: 180px;
      height: 80px;
    `};

  @media (max-width: 670px) {
    top: 10px;
    left: -60px;

    ${({ $isAbout }) =>
      $isAbout &&
      css`
        width: 22em;
        font-size: 1.4em;
        padding: 0.8em 0 0.7em 0;
      `};

    ${({ $isWideItem }) =>
      $isWideItem &&
      css`
        top: -50px;
        left: 100px;
        width: 180px;
        height: 80px;
      `};

    ${({ $isFirstSmallItem }) =>
      $isFirstSmallItem &&
      css`
        top: 155px;
        left: 125px;
        width: 170px;
        height: 90px;
        // z-index: 5;
      `};

    ${({ $isSecondSmallItem }) =>
      $isSecondSmallItem &&
      css`
        top: 140px;
        left: -140px;
      `};
  }
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
  max-width: 60em;

  // border: solid red 2px;

  ${({ $isAbout }) =>
    $isAbout &&
    css`
      padding: 0 1.3em 2em 1.3em;
      font-size: 0.9em;
      letter-spacing: 0.04em;
      max-width: 38em;
    `};

  ${({ $isSprechblase }) =>
    $isSprechblase &&
    css`
      position: absolute;
      top: -29px;
      left: -46px;
      width: 240px;
      height: 310px;
      font-size: 0.75em;
      letter-spacing: 0.02em;
      line-height: 130%;
      text-align: left;
    `};

  ${({ $isFirstSmallItem }) =>
    $isFirstSmallItem &&
    css`
      top: 190px;
      left: -145px;
      width: 170px;
      height: 90px;
    `};

  ${({ $isSecondSmallItem }) =>
    $isSecondSmallItem &&
    css`
      top: 190px;
      left: -145px;
      width: 170px;
      height: 90px;
    `};

  ${({ $isWideItem }) =>
    $isWideItem &&
    css`
      top: -50px;
      left: 180px;
      width: 180px;
      height: 80px;
    `};

  @media (max-width: 670px) {
    top: 30px;
    left: -75px;

    ${({ $isAbout }) =>
      $isAbout &&
      css`
        width: 22em;
        padding: 0 1.3em 5em 1.3em;
        font-size: 0.8em;
      `};

    ${({ $isWideItem }) =>
      $isWideItem &&
      css`
        top: -30px;
        left: 85px;
        width: 170px;
        height: 80px;
      `};

    ${({ $isFirstSmallItem }) =>
      $isFirstSmallItem &&
      css`
        top: 175px;
        left: 110px;
      `};

    ${({ $isSecondSmallItem }) =>
      $isSecondSmallItem &&
      css`
        top: 160px;
        left: -155px;
      `};
  }
`;

export const StyledErrorMessage = styled.p`
  color: red;
  font-size: 0.8rem;
  margin: -0.5em 0 1em 2em;
`;
