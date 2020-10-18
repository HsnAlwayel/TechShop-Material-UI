import React, { useState } from "react";

//Components
import ProductModal from "../../modals/ProductModal"
import VendorModal from "../../modals/VendorModal"

// Styling
import { UpdateButtonStyled } from "../../styles";

const UpdateButton = ({ product, vendor, productId }) => {
    const [isOpen, setIsOpen] = useState(false);

    const closeModal = () => setIsOpen(false);
    const openModal = () => setIsOpen(true);

    return (
        <>
            <UpdateButtonStyled onClick={openModal}>Update</UpdateButtonStyled>;
            {vendor ? (
                <VendorModal isOpen={isOpen} closeModal={closeModal} oldVendor={vendor} />
            ) : (
                    <>
                        <ProductModal isOpen={isOpen} closeModal={closeModal} oldProduct={product} />
                    </>
                )
            }
        </>
    )
};

export default UpdateButton;