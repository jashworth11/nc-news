import axios from "axios";

const api = axios.create({
  baseURL: "https://be-nc-news-example-46vu.onrender.com/api",
});

export const getArticles = () => {
  return api.get("/articles");
};

export const getArticleById = (article_id) => {
  return api.get(`/articles/${article_id}`);
};
