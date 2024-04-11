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

export default function ContactForm() {
  return (
    <>
      <button id="open-modal">Contact</button>
      <StyledModal id="modal">
        <StyledModalContent>
          <StyledModalButton $isCloseButton type="submit">
            X
          </StyledModalButton>
          <StyledTitle>Hi!</StyledTitle>
          <StyledText>
            Hast du eine Frage, oder möchtest mich einfach kontaktieren? Dann
            schick mir eine Nachricht.
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
            <StyledModalButton id="close-modal" type="submit">
              Nachricht senden
            </StyledModalButton>
          </StyledForm>
        </StyledModalContent>
      </StyledModal>
    </>
  );
}
