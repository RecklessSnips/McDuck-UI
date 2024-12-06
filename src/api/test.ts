import axios from "axios";
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

const api = axios.create({
  baseURL: apiBaseUrl,
  withCredentials: true,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getCategoryProducts(category: any) {
    return api
      .post(`/api/getCategory`, category)
      .then((response) => response.data);
  },
};
