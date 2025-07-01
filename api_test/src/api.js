import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_API_URL,
  headers: {
    "X-API-KEY": import.meta.env.VITE_REACT_APP_X_API_KEY,
    "content-Type": "application/json",
    Accept: "application/json",
  },
});

export function getAllUsers() {
  return api.get("/");
}

export function getUser(id) {
  return api.get(`/${id}`);
}

export function createUser(name, age) {
  return api.post(`/`, { name, age });
}

export function updateUser(id, name, age) {
  return api.put(`/${id}`, { name, age });
}

export function deleteUser(id) {
  return api.delete(`/${id}`);
}
