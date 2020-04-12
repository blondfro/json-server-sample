const baseUrl = "http://localhost:3001/users";

export function getAllUsers() {
  return fetch(baseUrl)
    .then((response) => response.json())
    .catch((err) => console.log(err));
}

export function saveUser(user) {
  return fetch(baseUrl + "/" + (user.id || ""), {
    method: user.id ? "PUT" : "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(user),
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));
}

export function deleteUser(id) {
  return fetch(baseUrl + "/" + id, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));
}
