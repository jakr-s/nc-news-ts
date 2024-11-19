import { useEffect, useState } from "react";
import { fetchArticleById } from "../api";
import VoteButton from "../Common/VoteButton";
import { updateArticleVotes } from "../api";
// import "./ArticleContent.css";

export default function ArticleContent({ article_id }) {
  const [article, setArticle] = useState(null);
  const [loadingArticle, setLoadingArticle] = useState(true);
  const [errorArticle, setErrorArticle] = useState(null);

  useEffect(() => {
    fetchArticleById(article_id)
      .then((fetchedArticle) => {
        setArticle(fetchedArticle);
        setLoadingArticle(false);
      })
      .catch((error) => {
        setErrorArticle(error);
        setLoadingArticle(false);
      });
  }, [article_id]);

  if (loadingArticle) return <p>Loading article...</p>;
  if (errorArticle) {
    return (
      <div>
        <h2>Error</h2>
        <p>{errorArticle}</p>
      </div>
    );
  }

  return (
    <div className="article-content">
      <h2>{article.title}</h2>
      <p>By {article.author}</p>
      <p>{article.body}</p>
      <VoteButton
        id={article.article_id}
        votes={article.votes}
        updateVotes={updateArticleVotes}
      />
    </div>
  );
}
