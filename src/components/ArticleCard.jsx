import { Link } from "react-router";

export const ArticleCard = ({ article }) => {
  return (
    <Link to={`/articles/${article.article_id}`} className="article-card">
      <img src={article.article_img_url} alt={article.title} />
      <h2>{article.title}</h2>
    </Link>
  );
};
