import { useParams } from "react-router-dom";
import ArticleContent from "./ArticleContent";
import CommentSection from "./CommentSection";
import "./Styles/ArticlePage.css";

export default function ArticlePage() {
  const currentUser = "grumpy19"; // Hardcoded user
  const { article_id } = useParams();

  return (
    <div className="article-page">
      <ArticleContent article_id={article_id} />
      <CommentSection article_id={article_id} currentUser={currentUser} />
    </div>
  );
}
