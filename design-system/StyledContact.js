import styled, { css } from "styled-components";

export const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(1, 1, 1, 0.32);
  backdrop-filter: blur(10px);
  z-index: 15;
`;

export const StyledModalContent = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 45%;
  left: 50%;
  padding: 1.5em 1em  1.5em  1em ;
  backdrop-filter: blur(10px);

  background: linear-gradient(
    145deg,
    var(--accent-color-light),  var(--primary-color)); 
    // padding: 50px, 40px;
    max-width: 340px;
    border-radius: 3em;
  );
`;

export const StyledTitle = styled.h2`
  color: var(--text-color);
  font-size: 2em;
  padding: 20px 10px 0 12px;
  margin: 0;
`;

export const StyledText = styled.p`
  color: var(--text-color);
  font-size: 1em;
  padding: 10px 0 30px 12px;
`;

export const StyledForm = styled.form`
  //   display: flex;
  //   flex-direction: column;
  //   //   width: 100vw;
  //   align-items: center;
  //   gap: 1em;
`;

export const StyledLabel = styled.label`
  color: var(--text-color);
  text-decoration: none;
  padding: 29px;
`;

export const StyledInputField = styled.input`
  width: 280px;
  padding: 10px 20px;
  margin: 2px 8px 15px 8px;
  border: none;
  outline: none;
  border-radius: 1.5em;
  background-color: var(--accent-color-light);

  // &:onblur:not(:placeholder-shown):invalid {
  //   box-shadow: 0 0 5px 1px red;
  // }

  // &:focus:invalid {
  //   box-shadow: none;
  // }
`;

export const StyledTextArea = styled.textarea`
  min-width: 280px;
  max-width: 280px;
  padding: 10px 20px;
  margin: 8px;
  border: none;
  outline: none;

  background-color: var(--accent-color-light);

  // &:invalid {
  //   box-shadow: 0 0 5px 1px red;
  // }

  // &:focus:invalid {
  //   box-shadow: none;
  // }
`;

export const StyledModalButton = styled.button`
  //   padding: 3em 15px;
  padding: 1em 1.5em 1em 1.5em;
  border-radius: 20px;
  border: none;
  margin: 20px 8px 0 8px;
  background-color: var(--accent-color);
  color: var(--text-color-light);
  font-size: 0.8em;
  font-weight: 500;
  cursor: pointer;

  &:hover,
  &:active {
    background-color: var(--secondary-color);
  }

  ${({ $isCloseButton }) =>
    $isCloseButton &&
    css`
      background-color: var(--primary-color-light);
      border: none;
      float: right;
      margin-top: -14px;
      padding: 0.4em 0.8em 0.4em 0.8em;
      font-size: 1.1em;
    `};
`;
