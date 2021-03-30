import React, { useState } from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";

// Stores
import authStore from "../../stores/authStore";

//Styles
import { UsernameStyled } from "../../styles";
import LogoImg from "../../favicon.ico";
import { FiLogOut } from "react-icons/fi";
import useStyles from "./styles";

//Components
import SigninButton from "../Buttons/SigninButton";

//materialUi
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";

const NavBar = ({ toggleTheme, currentTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  const classes = useStyles();
  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="primary">
        <Toolbar>
          <Typography variant="h6" className={classes.title} color="inherit">
            <Link to={"/"}>
              <img
                src={LogoImg}
                alt="commerce.js"
                height="25px"
                className={classes.image}
              />
            </Link>{" "}
            Commerce.js
          </Typography>

          <div className={classes.grow} />
          <div className={classes.button}>
            <IconButton aria-label="Show cart items" color="inherit">
              <Badge color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>

          {/* SignIn\Out */}
          {authStore.user ? (
            <>
              <UsernameStyled>Hello, {authStore.user.username}</UsernameStyled>
              <FiLogOut onClick={authStore.signout} size="2em" color="red" />
            </>
          ) : (
            <>
              <SigninButton />
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default observer(NavBar);
