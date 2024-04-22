import styled, { css } from "styled-components";

export const StyledWerkzeugkasten = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  max-height: 350px;
  margin: 12em 0 10em 0;

  // border: solid 1px blue;

  @media (max-width: 670px) {
    // border: solid 1px green;
    max-height: 800px;
    height: 480px;
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
  position: relative;
  justify-content: center;
  align-items: center;
  grid-area: big;
  width: 320px;
  height: 320px;
  border-radius: 3.5em;
  // border: solid 1px red;
  background-color: var(--primary-color);
  
  box-shadow: rgba(200, 30, 30, 0.5) 0px 2px 4px,
    rgba(00, 0, 0, 0.4) 0px 7px 13px -3px,
    rgba(200, 30, 30, 0.35) 0px -3px 0px inset;

  &:hover {
    box-shadow: rgba(200, 30, 30, 0.4) 0px 2px 4px,
      rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
      rgba(200, 30, 30, 0.2) 0px -3px 0px inset;
  }

  &:active {
    box-shadow: rgba(200, 30, 30, 0.5) 0px 2px 4px;
    rgba(200, 30, 30, 0.5) 0px -3px 0px inset;
  }

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
    transition: transform 1s;
    transform-style: preserve-3d;
    box-shadow: rgba(200, 30, 30, 0.5) 0px 2px 4px,
    rgba(00, 0, 0, 0.4) 0px 7px 13px -3px;

    &:hover{
      transform: rotateY( 180deg );
      transition: transform 0.5s;
      background-color:var(--primary-color-dark);
          box-shadow: rgba(200, 30, 30, 0.5) 0px 2px 4px,
    rgba(00, 0, 0, 0.4) 0px 7px 13px -3px;
    }


    ${({ $isWideItemBox }) =>
      $isWideItemBox &&
      css`
        grid-area: wide;
        width: 220px;
        height: 140px;
      `};
    ${({ $isFirstSmallItemBox }) =>
      $isFirstSmallItemBox &&
      css`
        grid-area: firstSmall;
        top: 35px;
        width: 220px;
        height: 220px;
      `};

    ${({ $isSecondSmallItemBox }) =>
      $isSecondSmallItemBox &&
      css`
        grid-area: secondSmall;
        top: 275px;
        left: -120px;
        width: 220px;
        height: 220px;
      `};
  }
`;
