import React, { useState } from "react";
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

//Stores
import cartStore from "../../../stores/CartStore";
const ProductItem = ({ product }) => {
  const classes = useStyles();

  const [quantity, setQuantity] = useState(0);

  const handleAdd = () => {
    const newItem = { quantity, productId: product.id };
    cartStore.addItem(newItem);
  };

  return (
    <Card className={classes.root}>
      <Link to={`/products/${product.slug}`}>
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
      </Link>
    </Card>
  );
};

export default observer(ProductItem);
