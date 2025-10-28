import axios from "axios";
import { API_BASE_URL } from "../util/config";
import { data } from "react-router-dom";

// 回傳 Promise
const api = axios.create({
  baseURL: API_BASE_URL,
});

export const getProductImageUrl = (id) =>
  `${API_BASE_URL}/api/product/${id}/photo`; // 回傳 URL 字串
export const getProducts = () => api.get(`/api/product`);
export const login = (data) => api.post(`/api/login`, data);
