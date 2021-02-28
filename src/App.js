import React, { useState } from "react";
import { observer } from "mobx-react";

//Components
import NavBar from "./components/NavBar/NavBar";
import Routes from "./components/Routes";
import Loading from "./components/Loading/Loading";

//Stores
import vendorStore from "./stores/VendorStore";

//Styles
import { GlobalStyle } from "./styles";
import { ThemeProvider } from "styled-components";
import productStore from "./stores/ProductStore";

const theme = {
  dark: {
    text: "Dark Mode",
    mainColor: "#242424", // main font color
    backgroundColor: "#fefafb", // main background color
    color: "#ff85a2",
  },
  light: {
    text: "Light Mode",
    mainColor: "#fefafb", // main font color
    backgroundColor: "#242424", // main background color
    color: "#ff85a2",
  },
};

function App({ type, color }) {
  const savedTheme = localStorage.getItem("theme") ?? "light";
  const [currentTheme, setCurrentTheme] = useState(savedTheme);

  const toggleTheme = () => {
    const newTheme = currentTheme === "light" ? "dark" : "light";
    setCurrentTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <NavBar toggleTheme={toggleTheme} currentTheme={currentTheme} />
      {vendorStore.loading || productStore.loading ? <Loading /> : <Routes />}
    </ThemeProvider>
  );
}

export default observer(App);
