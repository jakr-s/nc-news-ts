import { useEffect, useState } from "react";
import { fetchArticles } from "../api/index.ts";
import Article from "../types/Article.ts";

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
