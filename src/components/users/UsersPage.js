import React, { useEffect, useState } from "react";
import { getAllUsers } from "../../api/usersApi";
import ListUsers from "./ListUsers";

function UsersPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      const results = await getAllUsers();

      setUsers(results);
    }
    getUsers();
  }, []);

  return (
    <>
      <h2>Users Page</h2>
      <button className="btn btn-primary">Add User</button>
      <ListUsers users={users} />
    </>
  );
}

export default UsersPage;
