const API_BASE = import.meta.env.VITE_API_BASE || "";

export const sendContactMessage = async (payload) => {
  const response = await fetch(`${API_BASE}/api/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.message || "Failed to send message");
  }

  return response.json();
};
