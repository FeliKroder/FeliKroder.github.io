import styled, { css } from "styled-components";
import Link from "next/link";

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--text-color);
  // border: green solid 2px;

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
