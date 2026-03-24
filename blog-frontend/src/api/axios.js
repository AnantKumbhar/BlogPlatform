import axios from "axios";

const instance = axios.create({
  baseURL: "https://localhost:7061/api", // your backend URL
});

// Attach JWT token automatically
instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;