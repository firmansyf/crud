import ax from "axios";
const token = localStorage.getItem("accessToken");
console.log("token :", token);
const axios = ax.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}`,
  withCredentials: false,
  headers: {
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers":
      "Origin, X-Requested-With, Content-Type, Accept",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
    Authorization: `Bearer 36|1b3HkdQ15nnywvBzYnOvcndEpWHX4fGF0epFNywt65b2d3de`,
    // 'Access-Control-Max-Age': 0,
    // 'Cache-Control': 'no-cache',
  },
});

export default axios;
