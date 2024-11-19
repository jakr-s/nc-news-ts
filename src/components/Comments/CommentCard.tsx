import { useState } from "react";
import { deleteComment, updateCommentVotes } from "../../api/index.ts";
import Comment from "../../types/Comment.ts";
import VoteButton from "../Common/VoteButton";
import "./Styles/CommentCard.css";

interface CommentCardProps {
  comment: Comment;
  currentUser: string;
  onDelete: (commentId: number) => void;
}

export default function CommentCard({
  comment,
  currentUser,
  onDelete,
}: CommentCardProps) {
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
