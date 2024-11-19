import VoteButton from "../Common/VoteButton";
import { deleteComment, updateCommentVotes } from "../api";
import { useState } from "react";
import "./Styles/CommentCard.css";

export default function CommentCard({ comment, currentUser, onDelete }) {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = () => {
    setIsDeleting(true);
    deleteComment(comment.comment_id)
      .then(() => {
        onDelete(comment.comment_id);
      })
      .catch((error) => {
        console.error("Error deleting comment", error);
        setIsDeleting(false);
      });
  };

  return (
    <div className="comment">
      <div className="comment--info">
        <small>{comment.author}</small>
        <small>{comment.created_at}</small>
        {comment.author === currentUser && (
          <button onClick={handleDelete} disabled={isDeleting}>
            {isDeleting ? "Deleting..." : "Delete"}
          </button>
        )}
      </div>
      <div className="comment--body">
        <p>{comment.body}</p>
        <div className="comment--actions">
          <VoteButton
            id={comment.comment_id}
            votes={comment.votes}
            updateVotes={updateCommentVotes}
          />
        </div>
      </div>
    </div>
  );
}
