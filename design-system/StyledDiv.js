import styled from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  height: 90px;
  padding: 2em 0 0 4em;

  @media (max-width: 428px) {
    height: 60px;
    padding: 1em 0 0 1.7em;
  }
`;
