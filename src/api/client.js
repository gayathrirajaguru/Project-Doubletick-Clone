// src/api/JS_client.js

// 1) Your backend base URL on the VPS
export const API_BASE_URL = "http://72.61.227.124:8080/api";

// 2) Helper to send POST JSON requests
export async function postJson(path, body) {
  const res = await fetch(`${API_BASE_URL}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  // Try to parse response body
  const text = await res.text();
  let data;
  try {
    data = text ? JSON.parse(text) : {};
  } catch {
    data = {};
  }

  if (!res.ok) {
    // Show backend error message if available
    throw new Error(data.message || text || "Request failed");
  }

  return data;
}
