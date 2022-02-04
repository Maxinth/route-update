import React from "react";
import { Link, Outlet } from "react-router-dom";

const User = () => {
  return (
    <>
      <div>Users </div>
      <nav className="nav">
        {/* <Link to="/user/profile">Profile</Link>
        <Link to="/user/account">Account</Link> */}

        {/* using relative paths also work as the <Profile /> and <Account /> components are nested
        within <User /> in the Routes in app.js */}

        <Link to="profile">Profile</Link>
        <Link to="account">Account</Link>
      </nav>

      {/** HERE :  */}
      {/* nested components within the <Route /> in App.js show up here */}
      <Outlet />
      {/* nested components within the <Route /> in App.js show up here */}
    </>
  );
};

export default User;
