import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul className="nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="users">users</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
