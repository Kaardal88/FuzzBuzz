import { BASE_URL, ENDPOINTS } from "../api/endpoints.js";

export async function login(user) {
  const url = `${BASE_URL}${ENDPOINTS.login}`;

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  };

  const response = await fetch(url, options);

  if (!response.ok) {
    const json = await response.json();
    throw new Error(json.errors?.[0]?.message || "Login failed");
  }

  return await response.json();
}
