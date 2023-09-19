import { Link } from "react-router-dom";
import "../../App.css";

export const NavBar = () => {
  return (
    <ul className="navbar">
      <li className="navbar-item">
        <Link to="/">Home</Link>
      </li>
      <li className="navbar-item">
        <Link to="/recipes">Your Recipes</Link>
      </li>
      <li className="navbar-item">
        <Link to="/add">Add Recipe</Link>
      </li>
    </ul>
  );
};
