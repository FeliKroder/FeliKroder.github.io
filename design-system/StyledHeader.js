import styled from "styled-components";

export const StyledHeader = styled.h2`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  padding: 0 1em 0 3em;
  font-size: 16pt;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.15em;

  @media (max-width: 428px) {
    padding: 0 0 0 1.3em;
  }
`;
