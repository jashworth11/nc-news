import { useEffect, useState } from "react";
import { getArticles } from "../../api";
import { ArticleCard } from "./ArticleCard";

export const ArticlesList = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticles().then((response) => {
      console.log(response);
      setArticles(response.data.articles);
      setIsLoading(false);
    });
  }, []);
  if (isLoading) return <p>Loading articles...</p>;

  return (
    <div className="articles-container">
      {articles.map((article) => (
        <ArticleCard key={article.article_id} article={article} />
      ))}
    </div>
  );
};
