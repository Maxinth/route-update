import React from "react";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div>
      <div>top here</div>
      <Outlet />
      <div>bottom here</div>
    </div>
  );
};

export default Layout;
