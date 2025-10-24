import axios, { AxiosInstance } from "axios";
import { Platform } from "react-native";
import { API_URL } from "@env";

const BASE_URL =
  Platform.OS === "android" ? "http://10.0.2.2:8000" : API_URL;

const api: AxiosInstance = axios.create({
  baseURL: BASE_URL,
});

export default api;
export { BASE_URL };