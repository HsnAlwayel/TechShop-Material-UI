import React from "react";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
//Components
import DeleteButton from "../../Buttons/DeleteButton";
import UpdateButton from "../../Buttons/UpdateButton";

//Styles
import { ProductImage } from "../../../styles";
import useStyles from "./styles";

const ProductItem = ({ product }) => {
  const classes = useStyles();
  console.log(product);
  return (
    // <ProductImage className="col-lg-4 col-md-4 col-sm-4">
    //   <Link to={`/products/${product.slug}`}>
    //     <img alt={product.name} src={product.image} />
    //   </Link>
    //   <p>{product.name}</p>
    //   <p className="product-price">{product.price} KD</p>
    //   <UpdateButton product={product} />
    //   <DeleteButton productId={product.id} />
    //   {console.log("ProductItem -> product.id", product.id)}
    // </ProductImage>
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={product.image}
        title={product.name}
      />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h5" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="h5">{product.price}</Typography>
        </div>
        <Typography variant="h2" color="textSecondary">
          {product.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label="Add to Cart"></IconButton>
      </CardActions>
    </Card>
  );
};

export default observer(ProductItem);
