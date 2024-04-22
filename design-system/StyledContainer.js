import styled, { css } from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 80vh;
  min-height: 94vh;
  // align-items: center;
  // overflow: hidden;

  ${({ $isAbout }) =>
    $isAbout &&
    css`
      height: 10.5em;
      min-height: 10.5em;
      // width: 100%;
    `}
`;
