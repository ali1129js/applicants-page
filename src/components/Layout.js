import React from "react";
import Header from "./Header";

const Layout = (props) => (
  <div className="container-fluid">
    <Header />
    {props.children}
  </div>
);
export default Layout;
