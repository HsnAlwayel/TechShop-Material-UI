import React, { useState } from "react";
import { observer } from "mobx-react";

//Components
import SearchBar from "../SearchBar/SearchBar";
import ProductItem from "./ProductItem/ProductItem";
import AddButton from "../Buttons/AddButton";
//Styles
import { List } from "../../styles";
import { Grid } from "@material-ui/core";
import useStyles from "./styles";

const ProductList = ({ products }) => {
  const [query, setQuery] = useState("");
  const classes = useStyles();
  const productList = products
    .filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((product) => (
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <ProductItem product={product} key={product.id} />
      </Grid>
    ));

  return (
    // <div className="container-fluid">
    //   <SearchBar setQuery={setQuery} />
    //   <List className="row">{productList}</List>
    //   {/* <AddButton /> */}
    // </div>
    <div className={classes.content}>
      <div className={classes.toolbar} />
      <SearchBar setQuery={setQuery} />
      <Grid container justify="center" spacing={4}>
        {productList}
      </Grid>
    </div>
  );
};

export default observer(ProductList);
