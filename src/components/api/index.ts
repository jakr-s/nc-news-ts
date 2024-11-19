import axios from "axios";
import Article from "../../types/Article";
import Comment from "../../types/Comment";
import Topic from "../../types/Topic";

const api = axios.create({
  baseURL: "https://be-nc-news-z0a0.onrender.com/api",
});

export function fetchArticles(): Promise<Article[]> {
  return api
    .get("/articles")
    .then(({ data }) => {
      if (!data.articles) {
        throw new Error("Articles not found");
      }
      return data.articles as Article[];
    })
    .catch((error) => {
      throw error.response?.data?.msg || "Articles not found";
    });
}

export function fetchArticleById(article_id: number): Promise<Article> {
  return api
    .get(`/articles/${article_id}`)
    .then(({ data }) => {
      if (!data.article) {
        throw new Error("Article not found");
      }
      return data.article as Article;
    })
    .catch((error) => {
      throw error.response?.data?.msg || "Article not found";
    });
}

export function fetchCommentsByArticle(article_id: number): Promise<Comment[]> {
  return api
    .get(`/articles/${article_id}/comments`)
    .then(({ data }) => data.comments as Comment[])
    .catch((error) => {
      throw error.response?.data?.msg || "Failed to fetch comments";
    });
}

export function updateArticleVotes(
  article_id: number,
  inc_votes: number,
): Promise<Article> {
  return api
    .patch(`/articles/${article_id}`, { inc_votes })
    .then(({ data }) => data.article as Article)
    .catch((error) => {
      throw error.response?.data?.msg || "Failed to update article votes";
    });
}

export function updateCommentVotes(
  comment_id: number,
  inc_votes: number,
): Promise<Comment> {
  return api
    .patch(`/comments/${comment_id}`, { inc_votes })
    .then(({ data }) => data.comment as Comment)
    .catch((error) => {
      throw error.response?.data?.msg || "Failed to update comment votes";
    });
}

export function postComment(
  article_id: number,
  username: string,
  body: string,
): Promise<Comment> {
  return api
    .post(`/articles/${article_id}/comments`, { username, body })
    .then(({ data }) => data.comment as Comment)
    .catch((error) => {
      throw error.response?.data?.msg || "Failed to post comment";
    });
}

export function deleteComment(comment_id: number): Promise<void> {
  return api
    .delete(`/comments/${comment_id}`)
    .then(() => {})
    .catch((error) => {
      throw error.response?.data?.msg || "Failed to delete comment";
    });
}

export function fetchTopics(): Promise<Topic[]> {
  return api
    .get("/topics")
    .then(({ data }) => data.topics as Topic[])
    .catch(() => {
      throw new Error("Failed to fetch topics.");
    });
}
