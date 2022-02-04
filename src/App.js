import "./App.css";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import Home from "./components/Home";
import User from "./components/User";
import NoMatch from "./components/NoMatch";
import Profile from "./components/Profile";
import Account from "./components/Account";

const App = () => {
  return (
    <>
      <h1>Rou6</h1>

      <nav className="nav">
        <Link to="/home">Home</Link>
        <Link to="/user">User</Link>
        <Link to="/">Root(/)</Link>
      </nav>
      <Outlet />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/user" element={<User />}>
          <Route path="profile" element={<Profile />} />
          <Route path="account" element={<Account />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
};

export default App;
