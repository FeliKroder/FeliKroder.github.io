import styled, { css } from "styled-components";
import Link from "next/link";

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--text-color);

  ${({ $isFooter }) =>
    $isFooter &&
    css`
      text-decoration: underline;
      font-weight: bold;
      letter-spacing: 0.1em;
    `};
`;
