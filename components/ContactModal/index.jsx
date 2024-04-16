import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { StyledContactButton } from "@/design-system/StyledImage";
import { StyledErrorMessage } from "@/design-system/StyledText";
import {
  StyledModal,
  StyledModalContent,
  StyledForm,
  StyledInputField,
  StyledLabel,
  StyledTextArea,
  StyledTitle,
  StyledModalButton,
  StyledText,
} from "@/design-system/StyledContact";
import { useState } from "react";

export default function ContactModal({}) {
  const formElements = {
    name: false,
    email: false,
    textarea: false,
  };
  const [isWrong, setIsWrong] = useState(formElements);

  function trimStringInput(event) {
    return event.target.value.trim();
  }

  function validateStringInput(input, minLength, regex) {
    const trimmedInput = input.trim();
    return trimmedInput.length >= minLength && regex.test(trimmedInput);
  }

  const nameRegex = /^[a-zA-ZäöüÄÖÜß]+(?: [a-zA-ZäöüÄÖÜß]+)*$/;
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  const textRegex = /^.{10,}$/s;

  const [showModal, setShowModal] = useState(false);

  function handleOuterClick(event) {
    if (event.target === event.currentTarget) {
      handleHideModal();
    }
  }

  function handleShowModal() {
    setShowModal(!showModal);
    document.body.style.overflow = "hidden";
  }

  function handleHideModal() {
    setShowModal(false);
    document.body.style.overflow = "auto";
  }

  const form = useRef();

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs
      .sendForm("service_yfasj6q", "template_hdb9u34", form.current, {
        publicKey: "MbCRR0_bvOxVWoTCK",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          event.target.reset();
          handleHideModal();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <StyledContactButton
        onClick={handleShowModal}
        src="/contact.svg"
        alt="E-mail"
        width={40}
        height={40}
        priority={true}
      ></StyledContactButton>
      {showModal && (
        <StyledModal onClick={handleOuterClick}>
          <StyledModalContent>
            <StyledModalButton
              type="reset"
              onClick={handleHideModal}
              $isCloseButton
            >
              X
            </StyledModalButton>
            <StyledTitle>Hi!</StyledTitle>
            <StyledText>
              Hast du eine Frage, oder möchtest du mich einfach kontaktieren?
              Dann schick mir eine Nachricht.
            </StyledText>
            <StyledForm ref={form} onSubmit={sendEmail}>
              <StyledLabel for="name">Name*</StyledLabel>
              <StyledInputField
                type="text"
                id="name"
                name="user_name"
                placeholder="Jane Doe"
                min-length="2"
                max-length="20"
                required
                defaultValue=""
                onBlur={(event) => {
                  const trimedInput = trimStringInput(event);
                  event.currentTarget.value = trimedInput;
                  const isValid = validateStringInput(
                    trimedInput,
                    2,
                    nameRegex
                  );
                  setIsWrong((elements) => ({
                    ...elements,
                    name: !isValid,
                  }));
                }}
              />
              {isWrong.name && (
                <StyledErrorMessage>
                  Bitte gib deinen Namen ein
                </StyledErrorMessage>
              )}
              <StyledLabel for="email">E-Mail*</StyledLabel>
              <StyledInputField
                type="email"
                id="email"
                name="user_email"
                placeholder="Jane@mail.com"
                min-length="10"
                max-length="20"
                required
                onBlur={(event) => {
                  const trimedInput = trimStringInput(event);
                  event.currentTarget.value = trimedInput;
                  const isValid = validateStringInput(
                    trimedInput,
                    10,
                    emailRegex
                  );
                  setIsWrong((elements) => ({
                    ...elements,
                    email: !isValid,
                  }));
                }}
              />
              {isWrong.email && (
                <StyledErrorMessage>
                  Bitte gib deine E-Mail Adresse ein
                </StyledErrorMessage>
              )}
              <StyledTextArea
                name="message"
                rows="6"
                cols="15"
                placeholder="Hi Feli, ..."
                min-length="10"
                required
                defaultValue=""
                onBlur={(event) => {
                  const trimedInput = trimStringInput(event);
                  event.currentTarget.value = trimedInput;
                  const isValid = validateStringInput(
                    trimedInput,
                    10,
                    textRegex
                  );
                  setIsWrong((elements) => ({
                    ...elements,
                    textarea: !isValid,
                  }));
                }}
              />
              {isWrong.textarea && (
                <StyledErrorMessage>
                  Was möchtest du mir sagen?
                </StyledErrorMessage>
              )}
              <StyledModalButton type="submit">Senden</StyledModalButton>
            </StyledForm>
          </StyledModalContent>
        </StyledModal>
      )}
    </>
  );
}
