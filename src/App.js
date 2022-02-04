import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import User from "./components/User";
import NoMatch from "./components/NoMatch";

const App = () => {
  return (
    <>
      <h1>Rou6</h1>

      <nav>
        <Link to="/home">Home</Link>
        <Link to="/user">User</Link>
      </nav>

      <Routes>
        {/* index prop ensures the root path returns the Home component */}
        <Route index element={<Home />} />
        {/* index prop ensures the root path returns the Home component */}
        <Route path="home" element={<Home />} />
        <Route path="user" element={<User />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
};

export default App;
