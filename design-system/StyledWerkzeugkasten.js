import styled, { css } from "styled-components";
import Image from "next/image";

export const StyledWerkzeugkasten = styled.div`
  display: flex;
  justify-content: center;
  width: auto;
  height: 90%;
  margin: 14em 0 10em 0;
  // border: solid 1px blue;
`;

export const StyledItemBox = styled.div`
  width: 590px;
  height: 590px;
  display: flex;
  gap: 20px;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  // border: solid 5px pink;
`;

export const StyledItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44vw;
  height: 44vw;
  max-width: 380px;
  max-height: 380px;
  border-radius: 3.5em;
  background-color: var(--primary-color);
  box-shadow: 11px 17px 30px rgb(200 30 30 / 0.4);
  ${({ $isWideItemContainer }) =>
    $isWideItemContainer &&
    css`
      width: 44vw;
      height: 23vw;
      min-width: 180px;
      min-height: 90px;
      max-width: 380px;
      max-height: 190px;
    `};
  ${({ $isSmallItemContainer }) =>
    $isSmallItemContainer &&
    css`
      width: 21vw;
      height: 21vw;
      min-width: 90px;
      min-height: 90px;
      max-width: 180px;
      max-height: 180px;
    `};
`;
