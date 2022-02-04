import React from "react";
import { Link, Outlet } from "react-router-dom";

const User = () => {
  return (
    <>
      <div>Users </div>
      <nav className="nav">
        <Link to="/user/profile">Profile</Link>
        <Link to="/user/account">Account</Link>
      </nav>
      {/* nested components within the <Route /> in App.js show up here */}
      <Outlet />
      {/* nested components within the <Route /> in App.js show up here */}
    </>
  );
};

export default User;
