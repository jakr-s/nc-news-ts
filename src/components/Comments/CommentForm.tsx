import { useState } from "react";
import { postComment } from "../api";
import "./Styles/CommentForm.css";

export default function CommentForm({ article_id, addComment, currentUser }) {
  const [commentBody, setCommentBody] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (commentBody.trim() === "") {
      setError("Comment cannot be empty.");
      return;
    }
    setIsSubmitting(true);
    setError(null);

    postComment(article_id, currentUser, commentBody)
      .then((newComment) => {
        addComment(newComment);
        setCommentBody("");
        setSuccessMessage("Comment posted successfully!");
        setIsSubmitting(false);
        setTimeout(() => setSuccessMessage(""), 3000);
      })
      .catch((error) => {
        setError(error);
        setIsSubmitting(false);
      });
  };

  return (
    <form className="comment-form" onSubmit={handleSubmit}>
      <textarea
        value={commentBody}
        onChange={(e) => setCommentBody(e.target.value)}
        placeholder="Write your comment here..."
        disabled={isSubmitting}
      />
      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Posting..." : "Post Comment"}
      </button>
      {error && <p className="error-message">{error}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}
    </form>
  );
}
