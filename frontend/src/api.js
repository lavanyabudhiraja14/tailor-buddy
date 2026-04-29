const API = import.meta.env.VITE_API_URL;

export const signup = (data) =>
  fetch(`${API}/api/users/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

export const login = (data) =>
  fetch(`${API}/api/users/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });