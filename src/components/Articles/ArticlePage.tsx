import { useParams } from "react-router-dom";
import ArticleContent from "./ArticleContent.tsx";
import CommentSection from "./CommentSection.tsx";
import "./Styles/ArticlePage.css";

export default function ArticlePage() {
  const currentUser = "grumpy19"; // Hardcoded user
  const { article_id } = useParams<{ article_id: string }>();

  return (
    <div className="article-page">
      <ArticleContent article_id={Number(article_id)} />
      <CommentSection
        article_id={Number(article_id)}
        currentUser={currentUser}
      />
    </div>
  );
}
