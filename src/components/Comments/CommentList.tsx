import CommentCard from "./CommentCard";
import "./Styles/CommentList.css";

export default function CommentList({ comments, currentUser, setComments }) {
  const handleDelete = (comment_id) => {
    setComments((prevComments) =>
      prevComments.filter((comment) => comment.comment_id !== comment_id)
    );
  };

  if (comments.length === 0) return <div>No comments yet.</div>;

  return (
    <div className="comment-list">
      {comments.map((comment) => (
        <CommentCard
          key={comment.comment_id}
          comment={comment}
          currentUser={currentUser}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
}
