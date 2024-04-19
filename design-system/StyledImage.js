import styled, { css } from "styled-components";
import Image from "next/image";

export const StyledMood = styled(Image)`
  width: 100%;
  // max-width: 100%
  // min-height: 29vw;
  height: 44em;
  max-height: 75vh;
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
  bottom: 80px;
  right: 20px;
  object-fit: contain;
  background-color: var(--secondary-color);
  border-radius: 2em;
  box-shadow: 4px 4px 15px var(--secondary-color), 0.3;
  cursor: pointer;

  &:hover,
  &:active {
    background-color: var(--accent-color);
  }
`;

export const StyledItem = styled(Image)`
  justify-content: center;
  align-items: center;
  width: 240px;
  object-fit: contain;
  filter: drop-shadow(-30px 30px 6px rgb(0, 0, 0, 0.07));
  ${({ $isWideItem }) =>
    $isWideItem &&
    css`
      width: 240px;
      filter: drop-shadow(-25px 15px 6px rgb(0, 0, 0, 0.07));
    `};
  ${({ $isSmallItem }) =>
    $isSmallItem &&
    css`
      height: 120px;
      width: 120px;
      filter: drop-shadow(-25px 15px 6px rgb(0, 0, 0, 0.07));
    `};

  @media (max-width: 670px) {
    width: 180px;
    object-fit: contain;
    filter: drop-shadow(-30px 30px 6px rgb(0, 0, 0, 0.07));
    ${({ $isWideItem }) =>
      $isWideItem &&
      css`
        width: 180px;
        filter: drop-shadow(-25px 15px 6px rgb(0, 0, 0, 0.07));
      `};
    ${({ $isSmallItem }) =>
      $isSmallItem &&
      css`
        height: 80px;
        width: 80px;
        filter: drop-shadow(-25px 15px 6px rgb(0, 0, 0, 0.07));
      `};
  }
`;

export const StyledSprechblase = styled(Image)`
  position: absolute;
  top: -180px;
  left: -270px;
  // z-index: -5;
  width: 340px;
  height: 340px;
  transform: scaleX(-1);
  // border-radius: 3.5em;
  // border: solid 2px var(--secondary-color);
  filter: drop-shadow(-8px 11px 2px rgb(0, 0, 0, 0.3));
  ${({ $isSmallItem }) =>
    $isSmallItem &&
    css`
      top: 90px;
      left: 100px;
      // z-index: -5;
      width: 240px;
      height: 240px;
      transform: scaleX(1) scaleY(-1);
      // border-radius: 3.5em;
      // border: solid 2px var(--secondary-color);
      filter: drop-shadow(-8px 11px 2px rgb(0, 0, 0, 0.3));
    `};

  ${({ $isWideItem }) =>
    $isWideItem &&
    css`
      top: -180px;
      left: 220px;
      // z-index: -5;
      width: 280px;
      height: 280px;
      transform: scaleX(1);
      // border-radius: 3.5em;
      // border: solid 2px var(--secondary-color);
      filter: drop-shadow(-8px 11px 2px rgb(0, 0, 0, 0.3));
    `};
`;
