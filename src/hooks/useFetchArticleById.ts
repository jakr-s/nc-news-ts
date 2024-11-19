import { useEffect, useState } from "react";
import Article from "../types/Article";
import { fetchArticleById } from "../components/api";

export default function useFetchArticleById(article_id: number) {
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchArticleById(article_id)
      .then((fetchedArticle) => {
        setArticle(fetchedArticle);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message || "Failed to fetch article.");
        setLoading(false);
      });
  }, [article_id]);

  return { article, loading, error };
}
