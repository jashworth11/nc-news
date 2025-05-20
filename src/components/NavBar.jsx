import { Link } from "react-router-dom";

export const NavBar = ({ user }) => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/articles">Articles</Link>
      <Link to="/topics">Topics</Link>
      <Link to="/login">
        {user ? `Logged in as: ${user.username}` : "Login"}
      </Link>
    </nav>
  );
};
