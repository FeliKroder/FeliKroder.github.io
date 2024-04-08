import styled from "styled-components";
import Image from "next/image";

export const StyledImage = styled(Image)`
  position: relative;
  width: 100%;
  max-width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const StyledOverlayTextBox = styled.div`
  position: fixed;
  width: 100%;
  // border: solid red 1px;
`;

export const StyledOverlayText = styled.p`
  text-align: center;
  padding: 2em 13em 0 13em;
  font-weight: 450;
  letter-spacing: 0.08em;
  line-height: 180%;
  // border: solid blue 1px;

  @media (max-width: 928px) {
    padding: 0 2em 2em 2em;
  }
  @media (max-width: 428px) {
    padding: 2em 1.6em 0 1.6em;
  }
`;

export const StyledOverlayTitle = styled.h2`
  width: 100%;
  text-align: center;
  padding: 0 0 5em 0;
  font-weight: bold;
  font-size: 2.8em;
  // border: solid green 2px;

  @media (max-width: 928px) {
    line-break: strict;
    font-size: 2.4em;
    padding: 0 0 9em 0;
  }
  @media (max-width: 428px) {
    padding: 0 0 10em 0;
  }
`;
