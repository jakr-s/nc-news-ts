import { useEffect, useState } from "react";
import { fetchCommentsByArticle } from "../api/index.ts";
import Comment from "../types/Comment.ts";

export default function useFetchCommentsByArticle(article_id: number) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetchCommentsByArticle(article_id)
      .then((fetchedComments) => {
        setComments(fetchedComments);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [article_id]);

  return { comments, setComments, loading, error };
}
