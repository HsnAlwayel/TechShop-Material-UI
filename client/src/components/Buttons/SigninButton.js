import React, { useState } from "react";
import { AuthButtonStyled } from "../../styles";
import SigninModal from "../../modals/SigninModal";
import { Button } from "@material-ui/core";

const SigninButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  return (
    <>
      <Button variant="contained" color="primary" onClick={openModal}>
        Sign In
      </Button>
      <SigninModal isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};

export default SigninButton;
