import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/articles">Articles</Link>
      <Link to="/topics">Topics</Link>
      <Link to="/users">Users</Link>
    </nav>
  );
};
