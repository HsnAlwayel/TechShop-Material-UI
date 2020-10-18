import React, { useState } from "react";
import { observer } from "mobx-react";

//Components
import SearchBar from "./SearchBar"
import VendorItem from "./VendorItem"
import AddButton from "./Buttons/AddButton";

// Stores
import vendorStore from "../stores/VendorStore";


//Styles
import { List } from "../styles";


const VendorList = () => {
    const [query, setQuery] = useState("")

    const vendorList = (vendorStore.vendors
        .filter((vendor) => vendor.name.toLowerCase().includes(query.toLowerCase())))
        .map((vendor) => (
            <VendorItem
                vendor={vendor}
                key={vendor.id}
            />
        ));

    // if (!authStore.user || authStore.user.role !== "vendor") return <Redirect to="/" />;

    return (
        <div className="container-fluid">
            <SearchBar setQuery={setQuery} />
            <List className="row">{vendorList}</List>
            <AddButton />
        </div>
    );
};

export default observer(VendorList);