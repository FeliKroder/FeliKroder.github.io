import styled from "styled-components";
import Image from "next/image";

export const StyledImage = styled(Image)`
  width: 100%;
  max-width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const StyledOverlayTextBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: fixed;
  width: 100vw;
  // border: solid red 1px;
`;

export const StyledOverlayText = styled.p`
  text-align: center;
  padding: 0 1.3em 0 1.3em;
  padding-bottom: ${({ $isBottomOverlayText }) =>
    $isBottomOverlayText ? "0" : "4em"};
  font-weight: 450;
  letter-spacing: 0.08em;
  line-height: 180%;
  max-width: 59em;
  // border: solid blue 1px;
`;

export const StyledOverlayTitle = styled.h2`
  width: 100%;
  text-align: center;
  padding: 0 0 0.5em 0;
  font-weight: bold;
  font-size: 2.8em;
  // border: solid green 2px;
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
