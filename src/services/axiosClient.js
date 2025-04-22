import axios from "axios";
const axiosClient = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",    
  },
});
export async function setData(url, data) {
    return await axiosClient.post(url, data).then((response) => response.data);
  }