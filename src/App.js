import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyle";
import About from "./components/About";
import Contact from "./components/Contact";
import Product from "./components/Product";
import FeaturedProduct from "./components/FeaturedProduct";
import Home from "./components/Home";
import SingleProduct from "./components/SingleProduct";
import { ThemeProvider } from "styled-components";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import Cart from "./components/Cart";

const App = () => {
  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgba(29 ,29, 29, .8)",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",

      bg: "#F6F8FA",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <Router >
        <GlobalStyle />
        <Navbar />
        <Routes>
          <Route exact path="/ShopToHome" element={<Home />} />
          <Route exact path="/ShopToHome/about" element={<About />} />
          <Route exact path="/ShopToHome/contact" element={<Contact />} />
          <Route exact path="/ShopToHome/products" element={<FeaturedProduct />} />
          <Route exact path="/ShopToHome/products/:id" element={<SingleProduct />} />
          <Route exact path="/ShopToHome/cart" element={<Cart />} />
        </Routes>
        <Newsletter />
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
