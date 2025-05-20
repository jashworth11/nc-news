import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCommentsByArticleId } from "../../api";
import { CommentCard } from "./CommentCard";
import { CommentForm } from "./CommentForm";
import { deleteComment } from "../../api";

export const CommentList = ({ user }) => {
  const { article_id } = useParams();
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deletionError, setDeletionError] = useState(null);

  useEffect(() => {
    getCommentsByArticleId(article_id)
      .then((response) => {
        setComments(response.data.comments);
        setIsLoading(false);
      })
      .catch(() => {
        setError("Failed to load comments.");
        setIsLoading(false);
      });
  }, [article_id]);

  const handleNewComment = (newComment) => {
    setComments((current) => [newComment, ...current]);
  };
  const handleDeleteComment = (comment_id, onDone) => {
    setDeletionError(null);

    deleteComment(comment_id)
      .then(() => {
        setComments((curr) => curr.filter((c) => c.comment_id !== comment_id));
      })
      .catch(() => {
        setDeletionError("Failed to delete comment. Try again.");
      })
      .finally(() => {
        onDone();
      });
  };

  if (isLoading) return <p>Loading comments...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="comment-list">
      <h3>Comments</h3>
      {deletionError && <p style={{ color: "red" }}>{deletionError}</p>}
      <CommentForm user={user} onAddComment={handleNewComment} />
      {comments.length === 0 ? (
        <p>No comments yet. Be the first to comment!</p>
      ) : (
        comments.map((comment) => (
          <CommentCard
            key={comment.comment_id}
            comment={comment}
            user={user}
            onDelete={handleDeleteComment}
          />
        ))
      )}
    </div>
  );
};
