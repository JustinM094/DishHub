import { Link } from "react-router-dom";
import "./NavBar.css";
import { useNavigate } from "react-router-dom";

export const NavBar = () => {
  const navigate = useNavigate();
  return (
    <ul className="navbar">
      <div className="navbar-logo">
        <img
          src="Logo/logo.png"
          alt="DishHub Logo"
          className="navbar-logo-img"
        />
      </div>
      <li className="navbar-item">
        <Link className="navbar-link" to="/">
          Home
        </Link>
      </li>
      <li className="navbar-item">
        <Link className="navbar-link" to="/recipes">
          Your Recipes
        </Link>
      </li>
      <li className="navbar-item">
        <Link className="navbar-link" to="/add">
          Add Recipe
        </Link>
      </li>
      {localStorage.getItem("dishhub_user") ? (
        <li className="navbar-item navbar-logout">
          <Link
            className="navbar-link"
            to=""
            onClick={() => {
              localStorage.removeItem("dishhub_user");
              navigate("/login", { replace: true });
            }}
          >
            Logout
          </Link>
        </li>
      ) : (
        ""
      )}
    </ul>
  );
};
