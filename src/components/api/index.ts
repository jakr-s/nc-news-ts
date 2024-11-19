import axios from "axios";

const api = axios.create({
  baseURL: "https://be-nc-news-z0a0.onrender.com/api",
});

export function fetchArticles() {
  return api
    .get("/articles")
    .then(({ data }) => {
      if (!data.articles) {
        throw new Error("Articles not found");
      }
      return data.articles;
    })
    .catch((error) => {
      throw error.response?.data?.msg || "Articles not found";
    });
}

export function fetchArticleById(article_id) {
  return api
    .get(`/articles/${article_id}`)
    .then(({ data }) => {
      if (!data.article) {
        throw new Error("Article not found");
      }
      return data.article;
    })
    .catch((error) => {
      throw error.response?.data?.msg || "Article not found";
    });
}

export function fetchCommentsByArticle(article_id) {
  return api
    .get(`/articles/${article_id}/comments`)
    .then(({ data }) => data.comments)
    .catch((error) => {
      throw error.response?.data?.msg || "Failed to fetch comments";
    });
}

export function updateArticleVotes(article_id, inc_votes) {
  return api
    .patch(`/articles/${article_id}`, { inc_votes })
    .then(({ data }) => data.article)
    .catch((error) => {
      console.error("Error updating article votes", error);
    });
}

export function updateCommentVotes(comment_id, inc_votes) {
  return api
    .patch(`/comments/${comment_id}`, { inc_votes })
    .then(({ data }) => data.comment)
    .catch((error) => {
      console.error("Error updating comment votes", error);
    });
}

export function postComment(article_id, username, body) {
  return api
    .post(`/articles/${article_id}/comments`, { username, body })
    .then(({ data }) => data.comment)
    .catch((error) => {
      throw error.response?.data?.msg || "Failed to post comment";
    });
}

export function deleteComment(comment_id) {
  return api.delete(`/comments/${comment_id}`);
}

export function fetchTopics() {
  return api
    .get("/topics")
    .then(({ data }) => data.topics)
    .catch(() => {
      throw new Error("Failed to fetch topics.");
    });
}
