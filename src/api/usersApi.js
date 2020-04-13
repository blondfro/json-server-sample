const baseUrl = "http://localhost:3001/users";

export function getAllUsers() {
  return fetch(baseUrl)
    .then((response) => response.json())
    .catch((err) => console.log(err));
}

export function getUserByID(id) {
  return fetch(baseUrl + "/" + id)
    .then((response) => response.json())
    .catch((err) => console.log(err));
}

export function saveNewUser(user) {
  return fetch(baseUrl, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(user),
  })
    .then((response) => response.json())
    .catch((err) => console.log(err));
}

export function updateUser(user) {
  return fetch(baseUrl + "/" + user.id, {
    method: "PUT",
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
