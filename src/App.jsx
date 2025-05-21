import "./App.css";
import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { ArticlesList } from "./components/ArticleList";
import { Header } from "./components/Header";
import { SingleArticle } from "./components/SingleArticle";
import { useState } from "react";
import { Login } from "./components/Login";
import { HomePage } from "./components/HomePage";
import { TopicsList } from "./components/TopicList";
import { NotFound } from "./components/NotFound";

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
        <Route path="/topics" element={<TopicsList />} />
        <Route path="/topics/:topic" element={<ArticlesList />} />
        <Route path="/login" element={<Login setUser={setUser} />} />{" "}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
