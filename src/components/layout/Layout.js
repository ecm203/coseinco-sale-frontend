import React from "react";
import PropTypes from "prop-types";
import Header from "./header/Header";
import TopBanner from "./header/TopBanner";
import Footer from "./footer/Footer";
import FixedButtons from "../ui/FixedButtons";
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <TopBanner />
      <main>{children}</main>
      <FixedButtons />
      <Footer />
    </>
  );
};

Layout.protoTypes = {
  children: PropTypes.node,
};

Layout.defaultProps = {
  children: null,
};

export default Layout;
