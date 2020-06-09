import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_MOVIES_URL,
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
  },
});

export default api;
