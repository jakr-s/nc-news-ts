import { Link } from "react-router-dom";
import Article from "../../types/Article.ts";
import "./Styles/ArticleCard.css";

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link to={`/articles/${article.article_id}`}>
      <div className="article">
        <img src={article.article_img_url} alt={article.title} />
        <div className="article--info">
          <small>{article.topic}</small>
          <small>{article.author}</small>
        </div>
        <h2 className="article--title">{article.title}</h2>
      </div>
    </Link>
  );
}
