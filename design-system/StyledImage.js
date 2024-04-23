import styled, { css } from "styled-components";
import Image from "next/image";

export const StyledMood = styled(Image)`
  width: 100%;
  // max-width: 100%
  // min-height: 29vw;
  height: 44em;
  max-height: 75vh;
  min-height: 580px;
  object-fit: cover;
`;

export const StyledArrow = styled(Image)`
  margin-top: 1em;
  @keyframes jump {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(8px);
    }
    100% {
      transform: translateY(0);
    }
  }
  animation: jump 1.2s infinite;
`;

export const StyledLamp = styled(Image)`
  margin: 4.5em 0 0.3em 0;
`;

export const StyledContactButton = styled(Image)`
  width: 70px;
  height: 70px;
  padding: 0.7em;
  text-decoration: none;
  position: fixed;
  top: 620px;
  right: 20px;
  object-fit: contain;
  background-color: var(--secondary-color);
  border-radius: 2em;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
    rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
    rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;

  &:hover {
    box-shadow: rgba(50, 50, 105, 0.35) 0px 2px 5px 0px,
      rgba(0, 0, 0, 0.15) 0px 1px 1px 0px;
  }

  &:active {
  }

  @media (max-width: 670px) {
    width: 50px;
    height: 50px;
    right: 12px;
  }
`;

export const StyledItem = styled(Image)`
  justify-content: center;
  align-items: center;
  width: 240px;
  object-fit: contain;
  filter: drop-shadow(-30px 30px 6px rgb(0, 0, 0, 0.07));
  cursor: pointer;

  ${({ $isWideItem }) =>
    $isWideItem &&
    css`
      width: 240px;
      filter: drop-shadow(-25px 15px 6px rgb(0, 0, 0, 0.07));
    `};
  ${({ $isFirstSmallItem, $isSecondSmallItem }) =>
    ($isFirstSmallItem || $isSecondSmallItem) &&
    css`
      height: 120px;
      width: 120px;
      filter: drop-shadow(-25px 15px 6px rgb(0, 0, 0, 0.07));
    `};

  @media (max-width: 670px) {
    width: 180px;
    object-fit: contain;
    filter: drop-shadow(-30px 30px 6px rgb(0, 0, 0, 0.07));
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;

    ${({ $isWideItem }) =>
      $isWideItem &&
      css`
        width: 180px;
        filter: drop-shadow(-25px 15px 6px rgb(0, 0, 0, 0.07));
      `};
    ${({ $isFirstSmallItem, $isSecondSmallItem }) =>
      ($isFirstSmallItem || $isSecondSmallItem) &&
      css`
        height: 160px;
        width: 160px;
      `};
  }
`;

export const StyledSprechblase = styled(Image)`
  position: absolute;
  top: -150px;
  left: -80px;
  width: 340px;
  height: 340px;
  transform: scaleX(-1);
  filter: drop-shadow(-8px 11px 2px rgb(0, 0, 0, 0.3));

  ${({ $isFirstSmallItem, $isSecondSmallItem }) =>
    ($isFirstSmallItem || $isSecondSmallItem) &&
    css`
      top: 55px;
      left: -180px;
      width: 255px;
      height: 255px;
      transform: scaleX(-1) scaleY(-1);
      filter: drop-shadow(-8px 11px 2px rgb(0, 0, 0, 0.3));
    `};

  ${({ $isWideItem }) =>
    $isWideItem &&
    css`
      top: -150px;
      left: 100px;
      width: 280px;
      height: 280px;
      transform: scaleX(1);
      filter: drop-shadow(-8px 11px 2px rgb(0, 0, 0, 0.3));
    `};

  @media (max-width: 670px) {
    // position: absolute;
    // top: -10px;
    // left: -90px;
    // z-index: 5;
    // width: 290px;
    // height: 340px;
    // transform: scaleX(-1) scaleY(-1);
    // filter: drop-shadow(-8px 11px 2px rgb(0, 0, 0, 0.3));
    visibility: hidden;

    ${({ $isFirstSmallItem }) =>
      $isFirstSmallItem &&
      css`
        // top: 40px;
        // left: 40px;
        // z-index: 5;
        // width: 255px;
        // height: 255px;
        // transform: scaleX(1) scaleY(-1);
        // filter: drop-shadow(-8px 11px 2px rgb(0, 0, 0, 0.3));
      `};

    ${({ $isSecondSmallItem }) =>
      $isSecondSmallItem &&
      css`
        // top: 20px;
        // left: -190px;
        // // z-index: -5;
        // width: 255px;
        // height: 255px;
        // transform: scaleX(-1) scaleY(-1);
        // filter: drop-shadow(-8px 11px 2px rgb(0, 0, 0, 0.3));
      `};

    ${({ $isWideItem }) =>
      $isWideItem &&
      css`
        // top: -110px;
        // left: 20px;
        // width: 240px;
        // height: 240px;
        // transform: scaleX(1);
        // filter: drop-shadow(-8px 11px 2px rgb(0, 0, 0, 0.3));
      `};
  }
`;
