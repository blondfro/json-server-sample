import React from "react";
import TextInput from "../common/TextInput";

function UserForm({ user, onChange, onSave, ...props }) {
  return (
    <form onSubmit={onSave}>
      <h3>{user.id ? "Edit" : "Add"} Course</h3>
      <TextInput
        name="first_name"
        label="First Name"
        value={user.first_name}
        placeholder={user.first_name}
        onChange={onChange}
      />
      <TextInput
        name="last_name"
        label="Last Name"
        value={user.last_name}
        placeholder={user.last_name}
        onChange={onChange}
      />
      <TextInput
        name="userName"
        label="User Name"
        value={user.userName}
        placeholder={user.userName}
        onChange={onChange}
      />
      <button type="submit" className="btn btn-outline-success">
        Save
      </button>{" "}
      <button type="button" className="btn btn-outline-secondary">
        Cancel
      </button>
    </form>
  );
}

export default UserForm;
