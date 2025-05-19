import axios from "axios";

const api = axios.create({
  baseURL: "https://be-nc-news-example-46vu.onrender.com/api",
});

export const getArticles = () => {
  return api.get("/articles");
};
