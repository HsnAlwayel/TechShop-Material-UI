import React, { useState } from "react";

//Components
import ProductModal from "../../modals/ProductModal";
import VendorModal from "../../modals/VendorModal";

// Styling
import Button from "@material-ui/core/Button";

const UpdateButton = ({ product, vendor, productId }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <>
      <Button onClick={openModal} variant="contained">
        Update
      </Button>
      {vendor ? (
        <VendorModal
          isOpen={isOpen}
          closeModal={closeModal}
          oldVendor={vendor}
        />
      ) : (
        <>
          <ProductModal
            isOpen={isOpen}
            closeModal={closeModal}
            oldProduct={product}
          />
        </>
      )}
    </>
  );
};

export default UpdateButton;
