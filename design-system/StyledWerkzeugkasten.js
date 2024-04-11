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

export const StyledItem = styled(Image)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30vw;
  height: 32vw;
  max-width: 260px;
  max-height: 260px;
  object-fit: contain;
  // border: solid 2px green;
  filter: drop-shadow(-30px 30px 6px rgb(0, 0, 0, 0.07));
  // filter: hue-rotate(15deg) brightness(110%);
  ${({ $isWideItem }) =>
    $isWideItem &&
    css`
      width: 28vw;
      height: 13vw;
      min-width: 180px;
      min-height: 90px;
      max-width: 250px;
      max-height: 90px;
      filter: drop-shadow(-25px 15px 6px rgb(0, 0, 0, 0.07));
    `};
  ${({ $isSmallItem }) =>
    $isSmallItem &&
    css`
      width: 15vw;
      height: 15vw;
      min-width: 90px;
      min-height: 90px;
      max-width: 130px;
      max-height: 130px;
      filter: drop-shadow(-25px 15px 6px rgb(0, 0, 0, 0.07));
    `};
`;
