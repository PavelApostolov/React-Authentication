import React, { ReactNode } from "react";
import PropTypes from "prop-types";
import NavigationMenu from "./Navigation";
import { Wrapper } from "./LayoutStyles";

interface Layout {
  children: ReactNode;
}

const Layout = ({ children }: Layout) => {
  return (
    <Wrapper>
      <NavigationMenu />
      <main>{children}</main>
    </Wrapper>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
