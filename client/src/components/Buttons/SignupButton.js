import React, { useState } from "react";

//Styles
import { AuthButtonStyled } from "../../styles";

const SignupButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  return (
    <>
      <AuthButtonStyled onClick={openModal}>Sign up</AuthButtonStyled>
    </>
  );
};

export default SignupButton;
