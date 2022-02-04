import React from "react";
import { Link } from "react-router-dom";

const User = () => {
  return (
    <>
      <div>Users </div>
      <nav className="nav">
        <Link to="/user/profile">Profile</Link>
        <Link to="/user/account">Account</Link>
      </nav>
    </>
  );
};

export default User;
