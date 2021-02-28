import React from "react";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";

//Components
import DeleteButton from "../../Buttons/DeleteButton";
import UpdateButton from "../../Buttons/UpdateButton";

//Styles
import { ProductImage } from "../../../styles";

const ProductItem = ({ product }) => {
  return (
    <ProductImage className="col-lg-4 col-md-4 col-sm-4">
      <Link to={`/products/${product.slug}`}>
        <img alt={product.name} src={product.image} />
      </Link>
      <p>{product.name}</p>
      <p className="product-price">{product.price} KD</p>
      <UpdateButton product={product} />
      <DeleteButton productId={product.id} />
      {console.log("ProductItem -> product.id", product.id)}
    </ProductImage>
  );
};

export default observer(ProductItem);
