import React from "react";
import DeleteButton from "../../../Buttons/DeleteButton";
import { Link, useParams, Redirect } from "react-router-dom";
import { observer } from "mobx-react";

//Stores
import productStore from "../../../../stores/ProductStore";

//Styles
import { DetailWrapper } from "./styles";
import useStyles from "../../styles";
import UpdateButton from "../../../Buttons/UpdateButton";

const ProductDetail = () => {
  const classes = useStyles();

  const { productSlug } = useParams();
  const product = productStore.products.find(
    (product) => product.slug === productSlug
  );

  if (!product) return <Redirect to="/" />;

  return (
    <div className={classes.content}>
      <div className={classes.toolbar}>
        <DetailWrapper>
          <Link to="/">
            <p>Back to products</p>
          </Link>
          <h1>{product.name}</h1>
          <img src={product.image} alt={product.name} />
          <p>{product.desc}</p>
          <p>{product.price} KD</p>
          <UpdateButton product={product} />
          <DeleteButton productId={product.id} />
        </DetailWrapper>
      </div>
    </div>
  );
};

export default observer(ProductDetail);
