import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  // align-items: center;
  overflow: hidden;

  height: ${({ $isAbout }) => ($isAbout ? "10.5em" : "75vh")};
  align-items: ${({ $isAbout }) => ($isAbout ? "flex-start" : "center")};
  // border: solid 1px green;
`;
