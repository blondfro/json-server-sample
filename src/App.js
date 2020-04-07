import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import { getUsers } from "./api/usersApi";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getAllUsers() {
      const results = await getUsers();

      setUsers(results);
    }
    getAllUsers();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {users.map((user) => (
        <div key={user.id}>
          {user.first_name} {user.last_name}
        </div>
      ))}
    </div>
  );
}

export default App;
