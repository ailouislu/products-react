import http from "./httpService";
import url from "../config.json";

const apiEndpoint = url.apiUrl + "/posts";

export function getPosts() {
  return http.get(apiEndpoint);
}

export function getPost(id) {
  return http.get(`${apiEndpoint}/${id}`);
}

