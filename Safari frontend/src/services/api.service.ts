import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    Accept: "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("ps");

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    if (config.data instanceof FormData) {
      config.headers["Content-Type"] = "multipart/form-data";
    } else {
      config.headers["Content-Type"] = "application/json";
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// Handle API responses & errors
api.interceptors.response.use(
  (response) => response,

  (error) => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          console.error("Unathenticated");
          localStorage.removeItem("ps");
          window.location.replace("/auth/login");
          break;

        case 403:
          console.error("Access Denied: You don't have permission.");
          break;

        case 422:
          console.error("Validation failed. Please check your input.");
          break;

        case 500:
          console.error("Server Error! Please try again later.");
          break;

        default:
          console.error(`Unexpected error: ${error.response.status}`);
      }
    } else if (error.request) {
      console.error("No response from server. Please check your connection.");
    } else {
      console.error(`Request setup error: ${error.message}`);
    }

    return Promise.reject(error.response?.data || error.message);
  }
);
export default api;