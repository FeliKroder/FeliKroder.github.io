import styled, { css } from "styled-components";

export const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--accent-color-light);
`;

export const StyledModalContent = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  padding: 2em 1.5em  2em  1.5em ;
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
  padding: 10px;
  margin: 0;
`;

export const StyledText = styled.p`
  color: var(--text-color);
  font-size: 1em;
  padding: 10px 0 30px 0;
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
  border-radius: 1.5em;
`;

export const StyledTextArea = styled.textarea`
  min-width: 280px;
  max-width: 280px;
  padding: 10px 20px;
  margin: 8px;
`;

export const StyledModalButton = styled.button`
  //   padding: 3em 15px;
  padding: 1em 1.5em 1em 1.5em;
  border-radius: 20px;
  border: none;
  margin: 20px 8px 0 8px;
  cursor: pointer;
  ${({ $isCloseButton }) =>
    $isCloseButton &&
    css`
      background-color: var(--accent-color);
      border: none;
      float: right;
      margin-top: -14px;
      padding: 0.4em 0.8em 0.4em 0.8em;
      font-size: 1.1em;
    `};
`;
