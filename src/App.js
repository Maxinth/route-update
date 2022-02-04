import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Users from "./components/User";
import NoMatch from "./components/NoMatch";
// import Profile from "./components/Profile";
// import Account from "./components/Account";
import Layout from "./components/Layout";
import SingleUser from "./components/SingleUser";

const App = () => {
  const users = [
    { id: "1", fullName: "Robin Wieruch" },
    { id: "2", fullName: "Sarah Finnley" },
  ];

  return (
    <>
      <h1>React Router</h1>

      <nav>
        <Link to="/home">Home</Link>
        <Link to="/users">Users</Link>
      </nav>

      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="users" element={<Users users={users} />}>
            <Route path=":userId" element={<SingleUser />} />
          </Route>
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
