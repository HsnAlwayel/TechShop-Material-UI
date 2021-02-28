import React from "react";
import { Redirect } from "react-router-dom";
import { observer } from "mobx-react";

//Stores
import authStore from "../../stores/authStore";

//Styles
import { ShopImage, Title } from "../../styles";

const Home = () => {
  if (!authStore.user) {
    return <Redirect to="/" />;
  }
  if (authStore.user.vendorSlug) {
    return <Redirect to={`/vendors/${authStore.user.vendorSlug}`} />;
  }

  return (
    <>
      <Title>Gadget</Title>
      <ShopImage
        alt="Tech Shop"
        src="https://techclad.com/wp-content/uploads/2019/02/2018-07-10-image-35.jpg"
      />
    </>
  );
};

export default observer(Home);
