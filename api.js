import axios from "axios";

const api = axios.create({
  baseURL: "https://jashys-nc-news.onrender.com/api",
});

export const getArticles = (topic) => {
  const url = topic ? `/articles?topic=${topic}` : "/articles";
  return api.get(url);
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

export const postComment = (article_id, username, body) => {
  return api.post(`/articles/${article_id}/comments`, {
    username,
    body,
  });
};

export const getAllUsers = () => {
  return api.get("/users").then((res) => res.data.users);
};

export const deleteComment = (comment_id) => {
  return api.delete(`/comments/${comment_id}`);
};

export const getTopics = () => {
  return api.get("/topics");
};
