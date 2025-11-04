import axios from "axios";
import { API_BASE_URL } from "../util/config";

// 回傳 Promise
const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true, // 讓瀏覽器自動帶 cookie
});

export const getProductImageUrl = (id) =>
  `${API_BASE_URL}/api/product/${id}/photo`; // 回傳 URL 字串
export const getProducts = () => api.get(`/api/product`);
export const getProductsByVendor = () => api.get(`/api/product/vendor`);
export const login = (data) => api.post(`/api/login`, data);
export const logout = () => api.post(`/api/logout`);
