import "./App.css";
import { Routes, Route } from "react-router-dom";
import Users from "./components/Users";
import MainHome from "./components/MainHome";
import Navbar from "./components/Nav/Navbar";

function App() {
  return (
    <div className="App">
      <h1>Route6</h1>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainHome />} />
        <Route path="users" element={<Users />} />
      </Routes>
    </div>
  );
}

export default App;
