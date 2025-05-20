import "./App.css";
import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { ArticlesList } from "./components/ArticleList";
import { Header } from "./components/Header";
import { SingleArticle } from "./components/SingleArticle";
import { useState } from "react";
import { Login } from "./components/Login";
import { HomePage } from "./components/HomePage";

function App() {
  const [user, setUser] = useState(null);
  return (
    <>
      <NavBar user={user} />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage user={user} />} />
        <Route path="/articles" element={<ArticlesList />} />
        <Route
          path="/articles/:article_id"
          element={<SingleArticle user={user} />}
        />
        <Route path="/login" element={<Login setUser={setUser} />} />{" "}
      </Routes>
    </>
  );
}

export default App;
