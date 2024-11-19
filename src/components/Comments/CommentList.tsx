import Comment from "../../types/Comment.ts";
import CommentCard from "./CommentCard.tsx";
import "./Styles/CommentList.css";

interface CommentListProps {
  comments: Comment[];
  currentUser: string;
  setComments: React.Dispatch<React.SetStateAction<Comment[]>>;
}

export default function CommentList({
  comments,
  currentUser,
  setComments,
}: CommentListProps) {
  const handleDelete = (comment_id: number) => {
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
