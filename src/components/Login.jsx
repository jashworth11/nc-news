import { useState } from "react";
import { getAllUsers } from "../../api";
import { useNavigate } from "react-router-dom";

export const Login = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);

    getAllUsers()
      .then((users) => {
        console.log(users);
        const foundUser = users.find(
          (user) =>
            user.username.toLowerCase() === username.trim().toLowerCase()
        );

        if (foundUser) {
          setUser(foundUser);
          navigate("/articles");
          setError("");
        } else {
          setError("Please enter a valid Username");
        }
      })
      .catch(() => {
        setError("Something went wrong. Please try again.");
      })
      .finally(() => {
        setIsLoading(false); // ✅ end loading
      });
  };
  return (
    <main>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Logging in..." : "Login"}
        </button>
      </form>
      {error && <p className="login-error">{error}</p>}
    </main>
  );
};
