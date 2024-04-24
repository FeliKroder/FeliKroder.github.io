import styled, { css } from "styled-components";

export const StyledWerkzeugkasten = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  max-height: 350px;
  // margin: 12em 0 10em 0;

  // border: solid 1px blue;

  @media (max-width: 670px) {
    max-height: 880px;
    // height: 900px;
    // padding: 1em 0 0 0;
    // margin: 7em 0 10em 0;
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

  // border: solid 5px pink;

  @media (max-width: 670px) {
    width: 230px;
    height: auto;

    grid-template-columns: 1rf;
    grid-template-rows: 1rf 1rf 1rf 1rf 1rf 1rf 1rf;
    grid-template-areas:
      "big"
      "big"
      "wide"
      "firstSmall"
      "firstSmall"
      "secondSmall"
      "secondSmall";
    column-gap: 20px;
    row-gap: 20px;
    // padding: 0 0 10em 0;
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
    // box-shadow: rgba(200, 30, 30, 0.5) 0px 2px 4px,
    // rgba(00, 0, 0, 0.4) 0px 7px 13px -3px;
    transition: transform 0.7s;
    transform-style: preserve-3d;
   
    
    &:hover{
    transform: rotateY(180deg); 
    transition: transform 1.2s;
   
    }


    ${({ $isWideItemBox }) =>
      $isWideItemBox &&
      css`
        grid-area: wide;
        height: 140px;
      `};

    ${({ $isFirstSmallItemBox }) =>
      $isFirstSmallItemBox &&
      css`
        grid-area: firstSmall;
      `};

    ${({ $isSecondSmallItemBox }) =>
      $isSecondSmallItemBox &&
      css`
        grid-area: secondSmall;
      `};
      }
    `;

export const StyledCardBackside = styled.div`
  @media (max-width: 670px) {
    transform: rotateY(180deg);
    background-color: var(--primary-color-dark);
    width: 220px;
    height: 220px;
    border-radius: 3.5em;
    box-shadow: rgba(200, 30, 30, 0.5) 0px 2px 4px,
      rgba(00, 0, 0, 0.4) 0px 7px 13px -3px;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;

    ${({ $isWideItemBox }) =>
      $isWideItemBox &&
      css`
        height: 140px;
      `};
  }
`;

export const StyledCardBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  @media (max-width: 670px) {
    transform-style: preserve-3d;
  }
`;
