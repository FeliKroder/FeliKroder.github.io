import styled, { css } from "styled-components";
import Image from "next/image";

export const StyledMood = styled(Image)`
  width: 100%;
  // max-width: 100%
  // min-height: 29vw;
  height: 44em;
  // max-height: 69vw;
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
