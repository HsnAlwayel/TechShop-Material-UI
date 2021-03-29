import React from "react";
import { observer } from "mobx-react";

//Store
import productStore from "../../stores/ProductStore";
import vendorStore from "../../stores/VendorStore";

//Styling
import Button from "@material-ui/core/Button";

const DeleteButton = ({ productId, vendorId }) => {
  const handleDelete = () => {
    if (productId) {
      productStore.deleteProduct(productId);
      console.log("handleDelete -> productId", productId);
    } else {
      vendorStore.deleteVendor(vendorId);
    }
  };

  return (
    <Button variant="contained" color="secondary" onClick={handleDelete}>
      Delete
    </Button>
  );
};
export default observer(DeleteButton);
