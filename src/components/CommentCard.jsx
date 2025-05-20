import { useState } from "react";

export const CommentCard = ({ comment, user, onDelete }) => {
  const [isDeleting, setIsDeleting] = useState(false);
  const isAuthor = user && user.username === comment.author;

  const handleDelete = () => {
    setIsDeleting(true);
    onDelete(comment.comment_id, () => setIsDeleting(false));
  };
  return (
    <div className="comment-card">
      <p>
        <strong>{comment.author}</strong> says:
      </p>
      <p>{comment.body}</p>
      <p>
        <small>{new Date(comment.created_at).toLocaleString()}</small>
      </p>
      <p>Votes: {comment.votes}</p>
      {isAuthor && (
        <button onClick={handleDelete} disabled={isDeleting}>
          {isDeleting ? "Deleting..." : "Delete"}
        </button>
      )}
    </div>
  );
};
