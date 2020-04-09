const baseUrl = "http://localhost:3001/users";

export function getAllUsers() {
  return fetch(baseUrl)
    .then((response) => response.json())
    .catch((err) => console.log(err));
}
