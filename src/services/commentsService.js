import http from "./httpService";
import url from "../config.json";

const apiEndpoint = url.apiUrl + "/posts";

export function getComments(id) {
  return http.get(`${apiEndpoint}/${id}/comments`);
}

