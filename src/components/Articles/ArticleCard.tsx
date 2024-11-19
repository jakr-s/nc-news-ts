import { Link } from "react-router-dom";
import "./Styles/ArticleCard.css";

export default function ArticleCard({ article }) {
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
