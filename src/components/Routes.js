import React from 'react';
import { Route, Switch } from "react-router";

//Components
import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail"
import Home from "./Home";
import VendorList from './VendorList';
import VendorDetail from './VendorDetail';
import SignupForm from './SignupForm';
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
            <Route path="/products">
                <ProductList products={productStore.products} />
            </Route>
            <Route exact path="/">
                <Home />
            </Route>
        </Switch>
    )
}

export default Routes;