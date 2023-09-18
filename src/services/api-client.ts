import axios from "axios";
import { CanceledError } from "axios";

const apiClient = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: { 
    key: "bb79c3a0907846f1b8ff0c0fc9c2a723"
  },
});

export default apiClient;
export {CanceledError};