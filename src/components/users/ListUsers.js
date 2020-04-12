import React from "react";
import { Link } from "react-router-dom";

function ListUsers({ users, onDelete, ...props }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th />
          <th>Name</th>
          <th>User Name</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {users.map((user) => {
          return (
            <tr key={user.id}>
              <td>
                <Link
                  className="btn btn-outline-primary"
                  to={"/user/" + user.id}
                >
                  Edit User
                </Link>
              </td>
              <td>
                {user.first_name} {user.last_name}
              </td>
              <td>{user.userName}</td>
              <td>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => onDelete(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default ListUsers;
