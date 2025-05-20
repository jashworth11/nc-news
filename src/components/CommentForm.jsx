import { useState } from "react";
import { useParams } from "react-router-dom";
import { postComment } from "../../api";

export const CommentForm = ({ user, onAddComment }) => {
  const { article_id } = useParams();
  const [commentBody, setCommentBody] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg("");
    setSuccessMsg("");

    postComment(article_id, user.username, commentBody)
      .then((response) => {
        setSuccessMsg("Comment posted!");
        setCommentBody("");
        onAddComment(response.data.comment);
      })
      .catch(() => {
        setErrorMsg("Failed to post comment. Please try again.");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="comment-form">
      <textarea
        value={commentBody}
        onChange={(e) => setCommentBody(e.target.value)}
        placeholder="Write your comment here..."
        rows="4"
        required
        disabled={isSubmitting}
      />
      <br />
      <button
        type="submit"
        disabled={isSubmitting || commentBody.trim() === ""}
      >
        {isSubmitting ? "Posting..." : "Post Comment"}
      </button>
      {successMsg}
      {errorMsg}
    </form>
  );
};
