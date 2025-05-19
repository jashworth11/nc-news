import "./App.css";
import { Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { ArticlesList } from "./components/ArticleList";
import { Header } from "./components/Header";
import { SingleArticle } from "./components/SingleArticle";

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <Routes>
        <Route path="/" element={<ArticlesList />} />
        <Route path="/articles" element={<ArticlesList />} />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
      </Routes>
    </>
  );
}

export default App;
