import axios from "axios";

const api = axios.create({
  baseURL: "https://joe-news-2.onrender.com/api",
});

export const getArticles = () => {
  return api.get("/articles");
};

export const getArticleById = (article_id) => {
  return api.get(`/articles/${article_id}`);
};

export const getCommentsByArticleId = (article_id) => {
  return api.get(`/articles/${article_id}/comments`);
};

export const patchArticleVotes = (article_id, inc_votes) => {
  return api.patch(`/articles/${article_id}`, {
    inc_votes: inc_votes,
  });
};
