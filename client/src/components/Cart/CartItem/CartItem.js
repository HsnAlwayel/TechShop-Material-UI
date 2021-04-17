import React, { useState } from "react";
import { observer } from "mobx-react";

//Styles
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@material-ui/core";
import useStyles from "./styles";
import cartStore from "../../../stores/CartStore";

function CartItem({ item }) {
  const classes = useStyles();

  return (
    <Card className="cart-item">
      <CardMedia image={item.image} alt={item.name} className={classes.media} />
      <CardContent className={classes.cardContent}>
        <Typography variant="h4">{item.name}</Typography>
        <Typography variant="h5">{item.description}</Typography>
      </CardContent>
      <CardActions className={classes.CardActions}>
        <Button
          variant="contained"
          type="button"
          color="secondary"
          onClick={() => cartStore.removeItemFromCart(item.id)}
        >
          Remove
        </Button>
      </CardActions>
    </Card>
  );
}

export default observer(CartItem);
