import React from "react";

//Styles
import { Container, Typography, Button, Grid } from "@material-ui/core";

//Stores
import cartStore from "../../stores/CartStore";

function Cart() {
  return (
    <Container>
      <div className={classes.toolbar}>
        <Typography className={classes.title} variant="h3">
          Shopping Cart
        </Typography>
      </div>
      {cartStore.items ? (
        <Typography variant="subtitle1">
          No items in Your Shopping cart
        </Typography>
      ) : (
        <div>
          <Grid container spacing={3}>
            {cartStore.items.map((item) => (
              <Grid item xs={12} sm={4} key={item.id}>
                <div></div>
              </Grid>
            ))}
          </Grid>
        </div>
      )}
    </Container>
  );
}

export default Cart;
