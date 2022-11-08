import axios from "axios";
import { getUser } from "./localStorage";

const customFetch = axios.create({
  baseURL: "https://jobify-prod.herokuapp.com/api/v1/toolkit",
});

customFetch.interceptors.request.use((config) => {
  const user = getUser();
  if (user) {
    console.log("sss");
    //   config.headers.common["Authorization"] = `Bearer ${user.token}`;
  }
  return config;
});

export default customFetch;
