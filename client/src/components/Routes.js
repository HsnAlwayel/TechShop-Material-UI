import React from "react";
import { Route, Switch } from "react-router";

//Components
import ProductList from "./ProductList/ProductList";
import ProductDetail from "./ProductList/ProductItem/ProductDetail/ProductDetail";
import VendorList from "./VendorList/VendorList";
import VendorDetail from "./VendorList/VendorItem/VendorDetail/VendorDetail";
import SignupForm from "../components/SignUpForm/SignupForm";
import Cart from "../components/Cart/Cart";
// Stores
import productStore from "../stores/ProductStore";

const Routes = () => {
  return (
    <Switch>
      <Route path="/signup">
        <SignupForm />
      </Route>
      <Route path="/vendors/:vendorSlug">
        <VendorDetail />
      </Route>
      <Route path="/vendors">
        <VendorList />
      </Route>
      <Route path="/products/:productSlug">
        <ProductDetail />
      </Route>
      <Route path="/cart">
        <Cart />
      </Route>
      <Route exact path="/">
        <ProductList products={productStore.products} />
      </Route>
    </Switch>
  );
};

export default Routes;
