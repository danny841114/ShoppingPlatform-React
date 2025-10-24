import axios from "axios";
import { API_BASE_URL } from "../util/config";

const api = axios.create({
  baseURL: `${API_BASE_URL}`,
});

export const getProducts = () => api.get(`/api/product`);
