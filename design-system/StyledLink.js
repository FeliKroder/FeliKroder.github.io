import styled, { css } from "styled-components";
import Link from "next/link";

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--text-color);
  z-index: 5;

  ${({ $isFooter }) =>
    $isFooter &&
    css`
      text-decoration: underline;
      font-weight: bold;
      letter-spacing: 0.1em;
    `};

  ${({ $isContact }) =>
    $isContact &&
    css`
      position: fixed;
      bottom: 120px;
      right: 40px;
    `}
`;

export const StyledNavigationItem = styled(Link)`
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
  text-decoration: none;
  color: var(--text-color);

  &:hover {
    background-color: var(--accent-color);
  }

  &:active {
    background-color: var(--secondary-color);
  }

  @media (max-width: 670px) {
    width: 6.5em;
    padding: 1.6em 0.5em;
    z-index: 5;
    // border: solid 2px blue;
  }
`;
