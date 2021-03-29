import React from "react";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";

//Components
import DeleteButton from "../../Buttons/DeleteButton";
import UpdateButton from "../../Buttons/UpdateButton";

//Styles
import { ProductImage } from "../../../styles";

const VendorItem = ({ vendor }) => {
  return (
    <ProductImage className="col-lg-4 col-md-4 col-sm-4">
      <Link to={`/vendors/${vendor.slug}`}>
        <img alt={vendor.name} src={vendor.image} />
      </Link>
      <p>{vendor.name}</p>
      <UpdateButton vendor={vendor} />
      <DeleteButton vendorId={vendor.id} />
    </ProductImage>
  );
};

export default observer(VendorItem);
