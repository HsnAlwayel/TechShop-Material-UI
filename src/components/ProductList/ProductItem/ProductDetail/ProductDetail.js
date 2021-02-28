import React from "react";
import DeleteButton from "../../../Buttons/DeleteButton";
import { Link, useParams, Redirect } from "react-router-dom";
import { observer } from "mobx-react";

//Stores
import productStore from "../../../../stores/ProductStore";

//Styles
import { DetailWrapper } from "../../../../styles";

const ProductDetail = () => {
  const { productSlug } = useParams();
  const product = productStore.products.find(
    (product) => product.slug === productSlug
  );

  if (!product) return <Redirect to="/" />;

  return (
    <DetailWrapper>
      <Link to="/">
        <p>Back to products</p>
      </Link>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.desc}</p>
      <p>{product.price}</p>
      <DeleteButton productId={product.id} />
    </DetailWrapper>
  );
};

export default observer(ProductDetail);
