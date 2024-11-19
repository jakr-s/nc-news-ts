import { useState } from "react";
import { postComment } from "../../api/index.ts";
import Comment from "../../types/Comment.ts";
import "./Styles/CommentForm.css";

interface CommentFormProps {
  article_id: number;
  addComment: (comment: Comment) => void;
  currentUser: string;
}

export default function CommentForm({
  article_id,
  addComment,
  currentUser,
}: CommentFormProps) {
  const [commentBody, setCommentBody] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    postComment(article_id, currentUser, commentBody).then((newComment) => {
      addComment(newComment);
      setCommentBody("");
    });
  };

  return (
    <form onSubmit={handleSubmit} className="comment-form">
      <textarea
        value={commentBody}
        onChange={(e) => setCommentBody(e.target.value)}
        required
      />
      <button type="submit">Add Comment</button>
    </form>
  );
}
