import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getArticleById } from "../../api";
import { CommentList } from "./CommentList";
import { patchArticleVotes } from "../../api";

export const SingleArticle = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [voteError, setVoteError] = useState(null);
  const [hasVoted, setHasVoted] = useState(false);

  useEffect(() => {
    getArticleById(article_id)
      .then((response) => {
        setArticle(response.data.article);
        setIsLoading(false);
      })
      .catch((err) => {
        setError("Article not found.");
        setIsLoading(false);
      });
  }, [article_id]);

  const handleVote = (amount) => {
    setArticle((prev) => ({ ...prev, votes: prev.votes + amount }));
    setHasVoted(true);
    setVoteError(null);

    patchArticleVotes(article_id, amount).catch(() => {
      setArticle((prev) => ({ ...prev, votes: prev.votes - amount }));
      setHasVoted(false);
      setVoteError("Vote failed. Please try again.");
    });
  };

  if (isLoading) return <p>Loading article...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="single-article">
      <h2>{article.title}</h2>
      <img src={article.article_img_url} alt={article.title} />
      <p>
        <strong>Author:</strong> {article.author}
      </p>
      <p>
        <strong>Topic:</strong> {article.topic}
      </p>
      <p>
        <strong>Created at:</strong>{" "}
        {new Date(article.created_at).toLocaleDateString()}
      </p>
      <p>
        <strong>Votes:</strong> {article.votes}
      </p>

      <button onClick={() => handleVote(1)} disabled={hasVoted}>
        👍 Upvote
      </button>
      <button onClick={() => handleVote(-1)} disabled={hasVoted}>
        👎 Downvote
      </button>
      {voteError}

      <p>{article.body}</p>
      <CommentList />
    </div>
  );
};
