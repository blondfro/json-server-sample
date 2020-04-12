import React, { useEffect, useState } from "react";
import UserForm from "./UserForm";
import { saveUser } from "../../api/usersApi";

function ManageUsersPage({ users, ...props }) {
  const [user, setUser] = useState({
    id: 0,
    first_name: "",
    last_name: "",
    userName: "",
    password: "",
  });
  const [saving, setSaving] = useState(false);

  const newUser = {
    id: 0,
    first_name: "",
    last_name: "",
    userName: "",
    password: "",
  };

  useEffect(() => {
    const getUser = () => {
      let id = parseInt(props.match.params.id);
      const tmp = id > 0 ? users.find((user) => user.id === id) : newUser;
      setUser(tmp);
      // let tmp = users.find(user => user.id === props.match.params.id)
    };

    getUser();
    console.log(user);
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...user,
      [name]: value,
    }));
  }

  const handleSave = (event) => {
    event.preventDefault();
    setSaving(true);
    saveUser(user)
      .then(console.log("success"))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h2>Mangage User</h2>
      <UserForm user={user} onChange={handleChange} onSave={handleSave} />
    </>
  );
}

export default ManageUsersPage;
