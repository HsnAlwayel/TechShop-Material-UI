import React from "react";
import { observer } from "mobx-react";

//Styles
import { Container, Typography, Button, Grid } from "@material-ui/core";
import useSyles from "./styles";
//Stores
import cartStore from "../../stores/CartStore";
import CartItem from "./CartItem/CartItem";
import productStore from "../../stores/ProductStore";

function Cart() {
  const classes = useSyles();

  const cartList = cartStore.items
    .map((item) => ({
      ...productStore.getProductById(item.productId),
      quantity: item.quantity,
    }))
    .map((item) => (
      <Grid item xs={12} sm={4} key={item.id}>
        <CartItem item={item} key={item.id} />
      </Grid>
    ));
  return (
    <Container>
      <div className={classes.toolbar}>
        <Typography className={classes.title} variant="h3">
          Shopping Cart
        </Typography>
      </div>
      {cartStore.items ? (
        <div>
          <Grid container spacing={3}>
            {cartList}
          </Grid>
        </div>
      ) : (
        <Typography variant="subtitle1">
          No items in Your Shopping cart
        </Typography>
      )}
    </Container>
  );
}

export default observer(Cart);
