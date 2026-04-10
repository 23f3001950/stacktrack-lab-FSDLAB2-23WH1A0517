// TODO: Set the base URL for your API

const BASE_URL = "http://localhost:5000";

export const put = async (url, data) => {
  const response = await fetch(`${BASE_URL}${url}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  return response.json();
};