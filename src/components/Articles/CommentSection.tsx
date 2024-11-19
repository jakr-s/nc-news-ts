import { useEffect, useState } from "react";
import { fetchCommentsByArticle } from "../api";
import CommentList from "../Comments/CommentList";
import CommentForm from "../Comments/CommentForm";
// import "./CommentSection.css";

export default function CommentSection({ article_id, currentUser }) {
  const [comments, setComments] = useState([]);
  const [loadingComments, setLoadingComments] = useState(true);
  const [errorComments, setErrorComments] = useState(null);

  useEffect(() => {
    fetchCommentsByArticle(article_id)
      .then((fetchedComments) => {
        setComments(fetchedComments);
        setLoadingComments(false);
      })
      .catch((error) => {
        setErrorComments(error);
        setLoadingComments(false);
      });
  }, [article_id]);

  const addComment = (newComment) => {
    setComments((prevComments) => [newComment, ...prevComments]);
  };

  if (loadingComments) return <p>Loading comments...</p>;
  if (errorComments) {
    return <p>Error loading comments: {errorComments.message}</p>;
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
