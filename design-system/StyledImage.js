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
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 928px) {
    width: 100%;
  }
  // @media (max-width: 428px) {
  //   width: 100%;
  // }
`;

export const StyledOverlayText = styled.p`
  text-align: center;
  padding: 2em 13em 0 13em;
  font-weight: 450;
  letter-spacing: 0.08em;
  line-height: 180%;

  @media (max-width: 928px) {
    padding: 0 2em 2em 2em;
  }
  // @media (max-width: 428px) {
  //   padding: 3em 2em 0 2em;
  // }
`;

export const StyledOverlayTitle = styled.h2`
  text-align: center;
  padding: 0 0 5em 0;
  font-weight: bold;
  font-size: 2.8em;

  // letter-spacing: 0.08em;
  // line-height: 180%;

  @media (max-width: 928px) {
    line-break: auto;
    font-size: 2.4em;
    padding: 0 0 9em 0;
  }
  @media (max-width: 428px) {
    line-break: auto;
    font-size: 2.4em;
    padding: 0 0 12em 0;
  }
`;
