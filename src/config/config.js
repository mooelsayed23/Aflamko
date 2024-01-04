import axios from "axios";
export const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "c1957a192360543dc6d86e061ad3ea4e",
    include_adult: "false",
    language: "en" || "ar",
  },
});
