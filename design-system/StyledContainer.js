import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  // align-items: center;
  // overflow: hidden;

  height: ${({ $isAbout }) => ($isAbout ? "10.5em" : "80vh")};
  min-height: ${({ $isAbout }) => ($isAbout ? "10.5em" : "94vh")};
  // border: solid 1px green;
`;
