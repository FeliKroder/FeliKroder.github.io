import { StyledContactButton } from "@/design-system/StyledImage";
import { StyledLamp } from "@/design-system/StyledImage";
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
        <StyledModal>
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
            <StyledForm action="submit">
              <StyledLabel for="name">Name</StyledLabel>
              <StyledInputField
                type="text"
                id="name"
                placeholder="Jane Doe"
              ></StyledInputField>
              <StyledLabel for="email">E-Mail</StyledLabel>
              <StyledInputField
                type="email"
                id="email"
                placeholder="Jane@mail.com"
              ></StyledInputField>
              <StyledTextArea
                name="textarea"
                rows="6"
                cols="15"
                placeholder="Hi Feli, ..."
              ></StyledTextArea>
              <StyledModalButton type="submit">Senden</StyledModalButton>
            </StyledForm>
          </StyledModalContent>
        </StyledModal>
      )}
    </>
  );
}
