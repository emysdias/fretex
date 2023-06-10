import http from "./api.js";

export default {
  getAllTransports: () => {
    return http.get("transport");
  },
};
