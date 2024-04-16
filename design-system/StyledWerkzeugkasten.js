import styled, { css } from "styled-components";

export const StyledWerkzeugkasten = styled.div`
  display: flex;
  justify-content: center;
  width: auto;
  max-height: 350px;
  margin: 12em 0 10em 0;

  // border: solid 1px blue;

  @media (max-width: 670px) {
    // border: solid 1px green;
    max-height: 800px;
    height: 480px;
    width: auto;
    margin: 8em 0 10em 0;
  }
`;

export const StyledItemContainer = styled.div`
  display: grid;
  width: 650px;
  height: 340px;
  grid-template-columns: 1rf 1rf 1rf 1rf;
  grid-template-rows: 1rf 1rf;
  grid-template-areas:
    "big big wide wide"
    "big big firstSmall secondSmall";
  column-gap: 20px;
  row-gap: 20px;

  // border: solid 5px pink;

  @media (max-width: 670px) {
    width: 230px;
    height: 480px;
    grid-template-columns: 100px 100px;
    grid-template-rows: 100px 100px 105px 105px;
    grid-template-areas:
      "big big"
      "big big"
      "wide wide"
      "firstSmall secondSmall";
    column-gap: 20px;
    row-gap: 20px;
    padding: 0 0 10em 0;
  }
`;

export const StyledItemBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: big;
  width: 320px;
  height: 320px;
  border-radius: 3.5em;
  background-color: var(--primary-color);
  box-shadow: 11px 17px 30px rgb(200 30 30 / 0.4);
  ${({ $isWideItemBox }) =>
    $isWideItemBox &&
    css`
      grid-area: wide;
      width: 300px;
      height: 150px;
    `};
  ${({ $isFirstSmallItemBox }) =>
    $isFirstSmallItemBox &&
    css`
      grid-area: firstSmall;
      width: 140px;
      height: 150px;
    `};
  ${({ $isSecondSmallItemBox }) =>
    $isSecondSmallItemBox &&
    css`
      grid-area: secondSmall;
      width: 140px;
      height: 150px;
    `};

  @media (max-width: 670px) {
    width: 220px;
    height: 220px;
    border-radius: 3.5em;
    background-color: var(--primary-color);
    box-shadow: 11px 17px 30px rgb(200 30 30 / 0.4);
    ${({ $isWideItemBox }) =>
      $isWideItemBox &&
      css`
        grid-area: wide;
        width: 220px;
        height: 110px;
      `};
    ${({ $isFirstSmallItemBox }) =>
      $isFirstSmallItemBox &&
      css`
        grid-area: firstSmall;
        width: 100px;
        height: 100px;
      `};
    ${({ $isSecondSmallItemBox }) =>
      $isSecondSmallItemBox &&
      css`
        grid-area: secondSmall;
        width: 100px;
        height: 100px;
      `};
  }
`;

// export const StyledItemBox = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 44vw;
//   height: 44vw;
//   max-width: 380px;
//   max-height: 380px;
//   border-radius: 3.5em;
//   background-color: var(--primary-color);
//   box-shadow: 11px 17px 30px rgb(200 30 30 / 0.4);
//   ${({ $isWideItemContainer }) =>
//     $isWideItemContainer &&
//     css`
//       width: 44vw;
//       height: 23vw;
//       min-width: 180px;
//       min-height: 90px;
//       max-width: 380px;
//       max-height: 190px;
//     `};
//   ${({ $isSmallItemContainer }) =>
//     $isSmallItemContainer &&
//     css`
//       width: 21vw;
//       height: 21vw;
//       min-width: 90px;
//       min-height: 90px;
//       max-width: 180px;
//       max-height: 180px;
//     `};
// `;
