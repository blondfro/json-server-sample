import React, { useEffect, useState } from "react";
import ListUsers from "./ListUsers";
import { Link } from "react-router-dom";
import { getAllUsers, deleteUser } from "../../api/usersApi";

function UsersPage() {
  const [users, setUsers] = useState([]);
  const [update, setUpdate] = useState(true);

  useEffect(() => {
    if (update) {
      getUsers();
    }
    setUpdate(false);
  }, [update]);

  async function getUsers() {
    const results = await getAllUsers();
    setUsers(results);
  }

  function handleDelete(id) {
    deleteUser(id);
    setUpdate(true);
  }

  return (
    <>
      <h2>Users Page</h2>
      <Link to="/user">
        <button className="btn btn-primary">Add User</button>
      </Link>

      <ListUsers users={users} onDelete={handleDelete} />
    </>
  );
}

export default UsersPage;
