import React from "react";
import ListUsers from "./ListUsers";
import { Link } from "react-router-dom";

function UsersPage({ users, ...props }) {
  return (
    <>
      <h2>Users Page</h2>
      <Link to="/user">
        <button className="btn btn-primary">Add User</button>
      </Link>

      <ListUsers users={users} />
    </>
  );
}

export default UsersPage;
