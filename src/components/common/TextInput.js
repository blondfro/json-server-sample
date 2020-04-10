import React from "react";

function TextInput({ name, label, value, placeholder, onChange, ...props }) {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <div>
        <input
          type="text"
          name={name}
          className="form-control"
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
    </div>
  );
}

export default TextInput;
