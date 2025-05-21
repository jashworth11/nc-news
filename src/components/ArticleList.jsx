import { useEffect, useState } from "react";
import { getArticles } from "../../api";
import { ArticleCard } from "./ArticleCard";
import { useParams, useSearchParams } from "react-router-dom";
import { SortControls } from "./SortControls";

export const ArticlesList = () => {
  const { topic } = useParams();
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchParams] = useSearchParams();

  const sortBy = searchParams.get("sort_by") || "created_at";
  const order = searchParams.get("order") || "desc";

  useEffect(() => {
    setIsLoading(true);
    setError("");
    getArticles(topic, sortBy, order)
      .then((res) => {
        setArticles(res.data.articles);
        setIsLoading(false);
      })
      .catch(() => {
        setError("Failed to load articles");
        setIsLoading(false);
      });
  }, [topic, sortBy, order]);

  if (isLoading) return <p>Loading articles...</p>;

  return (
    <div className="article-list">
      <h2>{topic ? `Articles about ${topic}` : "All Articles"}</h2>
      <SortControls />
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
