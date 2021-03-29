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
import { List } from "../../styles";

const VendorList = () => {
  const [query, setQuery] = useState("");

  const vendorList = vendorStore.vendors
    .filter((vendor) => vendor.name.toLowerCase().includes(query.toLowerCase()))
    .map((vendor) => <VendorItem vendor={vendor} key={vendor.id} />);

  // if (!authStore.user || authStore.user.role !== "vendor") return <Redirect to="/" />;
  if (authStore.user && authStore.user.vendorSlug) {
    return <Redirect to={`/vendors/${authStore.user.vendorSlug}`} />;
  }

  return (
    <div className="container-fluid">
      <SearchBar setQuery={setQuery} />
      <List className="row">{vendorList}</List>
      <AddButton />
    </div>
  );
};

export default observer(VendorList);
