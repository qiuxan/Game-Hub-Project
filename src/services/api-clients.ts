import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "828dd65d851f4b4e9128abac8f76ec92",
  },
});