import React from "react";
import ListUsers from "./ListUsers";
import { Link } from "react-router-dom";
import { deleteUser } from "../../api/usersApi";

function UsersPage({ users, ...props }) {
  const handleDelete = (id) => {
    deleteUser(id).then(console.log("user ID: " + id + " deleted"));
  };

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
