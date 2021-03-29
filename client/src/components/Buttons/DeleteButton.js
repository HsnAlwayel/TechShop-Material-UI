import React from "react";
import { observer } from "mobx-react";

//Store
import productStore from "../../stores/ProductStore";
import vendorStore from "../../stores/VendorStore"

//Styling 
import { DeleteButtonStyled } from "../../styles"

const DeleteButton = ({ productId, vendorId }) => {

    const handleDelete = () => {
        if (productId) {
            productStore.deleteProduct(productId);
            console.log("handleDelete -> productId", productId)
        } else {
            vendorStore.deleteVendor(vendorId);
        }
    }

    return (
        <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>
    )
};
export default observer(DeleteButton)