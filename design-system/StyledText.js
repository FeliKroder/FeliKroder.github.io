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
      width: 240px;
      height: 310px;
      text-transform: uppercase;
      font-size: 0.9em;
      line-height: 120%;
      text-align: left;
    `};

  ${({ $isFirstSmallItem, $isSecondSmallItem }) =>
    ($isFirstSmallItem || $isSecondSmallItem) &&
    css`
      top: 170px;
      left: -139px;
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
    top: 40px;
    left: -40px;

    ${({ $isSprechblase }) =>
      $isSprechblase &&
      css`
        width: 220px;
        height: 45px;
        left: 0;
        top: 45px;
        font-size: 0.85em;
        letter-spacing: 0.15em;
        line-height: 120%;
        font-size: 1em;
        padding: 0 17px 0 20px;
        transform: rotateY(180deg);
        color: var(--text-color-light);
      `};

    ${({ $isAbout }) =>
      $isAbout &&
      css`
        font-size: 1.4em;
        padding: 0.8em 0 0.7em 0;
      `};

    ${({ $isWideItem }) =>
      $isWideItem &&
      css`
        width: 220px;
        height: 25px;
        left: 0;
        top: 30px;
        font-size: 0.85em;
        letter-spacing: 0.15em;
        line-height: 120%;
        font-size: 1em;
        padding: 0 17px 0 32px;
        transform: rotateY(180deg);
        color: var(--text-color-light);
      `};

    ${({ $isFirstSmallItem, $isSecondSmallItem }) =>
      ($isFirstSmallItem || $isSecondSmallItem) &&
      css`
        width: 220px;
        height: 45px;
        left: 0;
        top: 55px;
        font-size: 0.85em;
        letter-spacing: 0.15em;
        line-height: 120%;
        font-size: 1em;
        padding: 0 17px 0 25px;
        transform: rotateY(180deg);
        color: var(--text-color-light);
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

  ${({ $isFirstSmallItem, $isSecondSmallItem }) =>
    ($isSecondSmallItem || $isFirstSmallItem) &&
    css`
      top: 190px;
      left: -155px;
      width: 190px;
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
    top: 65px;
    left: -5px;
    width: 220px;
    z-index: 10;

    ${({ $isSprechblase }) =>
      $isSprechblase &&
      css`
        width: 220px;
        height: 110px;
        left: 0;
        top: 92px;
        font-size: 0.9em;
        font-weight: 5;
        letter-spacing: 0.07em;
        line-height: 140%;
        padding: 0 17px 0 20px;
        transform: rotateY(180deg);
        color: var(--text-color-light);
      `};

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
        width: 220px;
        height: 65px;
        left: 0;
        top: 55px;
        font-size: 0.9em;
        font-weight: 5;
        letter-spacing: 0.07em;
        line-height: 140%;
        padding: 0 17px 0 32px;
        transform: rotateY(180deg);
        color: var(--text-color-light);
      `};

    ${({ $isFirstSmallItem, $isSecondSmallItem }) =>
      ($isFirstSmallItem || $isSecondSmallItem) &&
      css`
        width: 220px;
        height: 110px;
        left: 0;
        top: 82px;
        font-size: 0.9em;
        font-weight: 5;
        letter-spacing: 0.07em;
        line-height: 140%;
        padding: 0 17px 0 25px;
      `};
`;

export const StyledErrorMessage = styled.p`
  color: red;
  font-size: 0.8rem;
  margin: -0.5em 0 1em 2em;
`;
