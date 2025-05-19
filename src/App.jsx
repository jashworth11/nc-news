import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ArticlesList } from "./components/ArticleList";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ArticlesList />} />
        <Route path="/articles" element={<ArticlesList />} />
      </Routes>
    </>
  );
}

export default App;
