import { BASE_URL } from "@/common/Api";
import axios from "axios";

// Create an axios instance with base URL from environment variables
// withCredentials:true allows sending cookies in cross-origin requests
export const Axios = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});
