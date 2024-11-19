import { useEffect, useState } from "react";
import Article from "../types/Article";
import { fetchArticles } from "../components/api";

export default function useFetchArticles(topic?: string) {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchArticles()
      .then((fetchedArticles) => {
        setArticles(fetchedArticles);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message || "Failed to fetch articles.");
        setLoading(false);
      });
  }, [topic]);

  return { articles, loading, error };
}
