export const ArticleCard = (props) => {
  const article = props.article;

  return (
    <div className="article-card">
      <img src={article.article_img_url} alt={article.title} />
      <h2>{article.title}</h2>
      <p>
        <strong>By:</strong> {article.author}
      </p>
      <p>
        <strong>Topic:</strong> {article.topic}
      </p>
      <p>
        <strong>Date:</strong>{" "}
        {new Date(article.created_at).toLocaleDateString()}
      </p>
      <p>
        <strong>Votes:</strong> {article.votes}
      </p>
    </div>
  );
};
