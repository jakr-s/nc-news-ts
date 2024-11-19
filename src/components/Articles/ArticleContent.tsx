import { updateArticleVotes } from "../../api/index.ts";
import useFetchArticleById from "../../hooks/useFetchArticleById.ts";
import VoteButton from "../Common/VoteButton.tsx";

interface ArticleContentProps {
  article_id: number;
}

export default function ArticleContent({ article_id }: ArticleContentProps) {
  const { article, loading, error } = useFetchArticleById(article_id);

  if (loading) return <p>Loading article...</p>;
  if (error) {
    return (
      <div>
        <h2>Error</h2>
        <p>{error}</p>
      </div>
    );
  }

  if (!article) return null;

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
