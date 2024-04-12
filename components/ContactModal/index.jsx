import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { StyledContactButton } from "@/design-system/StyledImage";
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

export default function ConfirmModal({}) {
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
            <StyledForm action="submit" ref={form} onSubmit={sendEmail}>
              <StyledLabel for="name">Name</StyledLabel>
              <StyledInputField
                type="text"
                id="name"
                name="user_name"
                placeholder="Jane Doe"
              ></StyledInputField>
              <StyledLabel for="email">E-Mail</StyledLabel>
              <StyledInputField
                type="email"
                id="email"
                name="user_email"
                placeholder="Jane@mail.com"
              ></StyledInputField>
              <StyledTextArea
                name="message"
                rows="6"
                cols="15"
                placeholder="Hi Feli, ..."
              ></StyledTextArea>
              <StyledModalButton type="submit" value="Send">
                Senden
              </StyledModalButton>
            </StyledForm>
          </StyledModalContent>
        </StyledModal>
      )}
    </>
  );
}
