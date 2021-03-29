import React, { useState } from "react";
import { observer } from "mobx-react";
import { Redirect } from "react-router-dom";

//Components
import SearchBar from "../SearchBar/SearchBar";
import VendorItem from "./VendorItem/VendorItem";
import AddButton from "../Buttons/AddButton";

// Stores
import vendorStore from "../../stores/VendorStore";
import authStore from "../../stores/authStore";
//Styles
import useStyles from "../ProductList/styles";
import { Grid } from "@material-ui/core";

const VendorList = () => {
  const classes = useStyles();

  const [query, setQuery] = useState("");

  const vendorList = vendorStore.vendors
    .filter((vendor) => vendor.name.toLowerCase().includes(query.toLowerCase()))
    .map((vendor) => (
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <VendorItem vendor={vendor} key={vendor.id} />
      </Grid>
    ));
  // if (!authStore.user || authStore.user.role !== "vendor") return <Redirect to="/" />;
  if (authStore.user && authStore.user.vendorSlug) {
    return <Redirect to={`/vendors/${authStore.user.vendorSlug}`} />;
  }

  return (
    <div className={classes.content}>
      <div className={classes.toolbar} />
      <SearchBar setQuery={setQuery} />
      <Grid container justify="center" spacing={4}>
        {vendorList}
      </Grid>
      <AddButton />
    </div>
  );
};

export default observer(VendorList);
