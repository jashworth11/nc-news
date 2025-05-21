import { useEffect, useState } from "react";
import { getArticles } from "../../api";
import { ArticleCard } from "./ArticleCard";
import { useParams } from "react-router-dom";

export const ArticlesList = () => {
  const { topic } = useParams();
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoading(true);
    setError("");
    getArticles(topic)
      .then((res) => {
        setArticles(res.data.articles);
        setIsLoading(false);
      })
      .catch(() => {
        setError("Failed to load articles");
        setIsLoading(false);
      });
  }, [topic]);

  if (isLoading) return <p>Loading articles...</p>;

  return (
    <div className="article-list">
      <h2>{topic ? `Articles about ${topic}` : "All Articles"}</h2>
      {articles.length === 0 ? (
        <p>No articles found for this topic.</p>
      ) : (
        articles.map((article) => (
          <ArticleCard key={article.article_id} article={article} />
        ))
      )}
    </div>
  );
};
