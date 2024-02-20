import styled from "styled-components";

export const StyledNavigationBar = styled.ul`
  display: flex;
  justify-content: flex-end;
  list-style: none;
`;

export const StyledNavigationItem = styled.li`
  text-align: center;
  width: 12em;
  padding: 1.6em 0.1em 1.6em 0.1em;
  cursor: pointer;
  font-size: 10pt;
  font-weight: 500;
  text-transform: none;
  letter-spacing: 0.15em;
  background-color: var(--primary-color);
  transition: background-color 0.4s ease;

  &:hover {
    background-color: var(--accent-color);
  }

  &:active {
    background-color: var(--secondary-color);
  }

  @media (max-width: 428px) {
    width: 6.5em;
    padding: 1.6em 0.1em 1.6em 0.1em;
  }
`;

export const StyledLink = styled.a`
  text-decoration: none;
  color: var(--text-color);
`;
