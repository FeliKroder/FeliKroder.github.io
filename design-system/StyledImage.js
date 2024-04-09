import styled, { css } from "styled-components";
import Image from "next/image";

export const StyledMood = styled(Image)`
  width: 100%;
  max-width: 100%;
  height: 100%;
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
