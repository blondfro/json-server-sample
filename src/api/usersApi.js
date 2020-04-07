const baseUrl = "http://localhost:3001/users";

export function getUsers() {
  return fetch(baseUrl)
    .then((response) => response.json())
    .catch((err) => console.log(err));
}
