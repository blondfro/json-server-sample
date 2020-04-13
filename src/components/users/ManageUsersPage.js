import React, { useEffect, useState } from "react";
import UserForm from "./UserForm";
import { saveNewUser, updateUser } from "../../api/usersApi";

function ManageUsersPage({ users, ...props }) {
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    userName: "",
    password: "",
  });
  const [saving, setSaving] = useState(false);

  const newUser = {
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
    if (user.id) {
      updateUser(user).then(console.log("user updated"));
    } else {
      saveNewUser(user)
        .then(console.log("new user saved"))
        .catch((err) => console.log(err));
    }
  };

  const handleCancel = (event) => {
    console.log("edit canceled");
  };

  return (
    <>
      <h2>Mangage User</h2>
      <UserForm
        user={user}
        onChange={handleChange}
        onSave={handleSave}
        onCancel={handleCancel}
      />
    </>
  );
}

export default ManageUsersPage;
