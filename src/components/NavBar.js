import React, { useState } from "react";

// Stores
import authStore from "../stores/authStore";

//Styles
import { Logo, NavStyled, NavItem, UsernameStyled } from "../styles";
import LogoImg from "../favicon.ico"
import { FiLogOut } from "react-icons/fi";

//Components
import SigninButton from "./Buttons/SigninButton";
import { observer } from "mobx-react";
import VendorModal from "../modals/VendorModal";

const NavBar = ({ toggleTheme, currentTheme }) => {

    const [isOpen, setIsOpen] = useState(false);

    const closeModal = () => setIsOpen(false);
    const openModal = () => setIsOpen(true);

    return (
        <NavStyled className="navbar navbar-expand-lg ">
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Logo className="nav-item nav-link active" to="/">
                        <img alt="logo" src={LogoImg} width="50" />
                    </Logo>

                    {
                        authStore.user && authStore.user.role === "admin" && (
                            <div className="navbar-nav ml-auto mt-2 mt-lg-0">
                                <NavItem className="nav-item nav-link" to="/vendors">
                                    Vendors
                        </NavItem>
                                <NavItem className="nav-item nav-link" to="/products">
                                    Products
                        </NavItem>
                            </div>
                        )
                    }


                    {
                        authStore.user ? (
                            <>
                                <UsernameStyled>Hello, {authStore.user.username}</UsernameStyled>
                                <FiLogOut onClick={authStore.signout} size="2em" color="red" />
                            </>
                        ) : (
                                <>
                                    <SigninButton />
                                </>
                            )
                    }

                    <div>

                        {
                            authStore.user && !authStore.user.vendorSlug && (
                                <UsernameStyled onClick={openModal}>Create a Vendor</UsernameStyled>
                            )
                        }
                        <VendorModal isOpen={isOpen} closeModal={closeModal} />;
                    </div>
                    <div class="custom-control custom-switch">

                        <input type="checkbox" className="custom-control-input" id="customSwitch1" />
                        <label className="custom-control-label" for="customSwitch1" onClick={toggleTheme}> {currentTheme === "light" ? "Dark" : "Light"} Mode</label>
                    </div>
                </div>
            </div>
        </NavStyled>
    );
};

export default observer(NavBar);