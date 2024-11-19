import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticles } from "../../api/index.ts";
import Article from "../../types/Article.ts";
import ArticleCard from "./ArticleCard.tsx";
import "./Styles/ArticleList.css";

interface ArticleListParams {
  topic?: string;
  [key: string]: string | undefined;
}

export default function ArticleList() {
  const { topic } = useParams<ArticleListParams>();
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchArticles(topic)
      .then((fetchedArticles) => {
        setArticles(fetchedArticles);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [topic]);

  if (loading) return <div>Loading articles...</div>;
  if (error) {
    return (
      <div>
        <h2>Error</h2>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="article-list">
      {articles.map((article) => (
        <ArticleCard key={article.article_id} article={article} />
      ))}
    </div>
  );
}
