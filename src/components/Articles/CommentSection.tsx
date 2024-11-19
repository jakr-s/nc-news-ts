import useFetchCommentsByArticle from "../../hooks/useFetchCommentsByArticle.ts";
import Comment from "../../types/Comment.ts";
import CommentForm from "../Comments/CommentForm.tsx";
import CommentList from "../Comments/CommentList.tsx";
// import "./CommentSection.css";

interface CommentSectionProps {
  article_id: number;
  currentUser: string;
}

export default function CommentSection(
  { article_id, currentUser }: CommentSectionProps,
) {
  const { comments, setComments, loading, error } = useFetchCommentsByArticle(
    article_id,
  );

  const addComment = (newComment: Comment) => {
    setComments((prevComments) => [newComment, ...prevComments]);
  };

  if (loading) return <p>Loading comments...</p>;
  if (error) {
    return <p>Error loading comments: {error.message}</p>;
  }

  return (
    <div className="comment-section">
      <CommentForm
        article_id={article_id}
        addComment={addComment}
        currentUser={currentUser}
      />
      <CommentList
        comments={comments}
        currentUser={currentUser}
        setComments={setComments} // Pass setComments here
      />
    </div>
  );
}
