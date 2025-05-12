import React, { useState } from "react";
import "./Input.scss";

const domainSuggestions = [
  "@gmail.com",
  "@qq.com",
  "@hotmail.com",
  "@outlook.com",
  "@icloud.com",
];

const Input = ({ placeholder = "Placeholder", type = "text", className }) => {
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const username = value.split("@")[0];

  const filteredSuggestions =
    type === "email" && username && !value.includes("@")
      ? domainSuggestions.map((domain) => username + domain)
      : [];

  const handleSelect = (email) => {
    setValue(email);
    setIsFocused(false);
  };

  return (
    <div className={`input-wrapper ${className}`}>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setTimeout(() => setIsFocused(false), 100)}
      />

      {isFocused && filteredSuggestions.length > 0 && (
        <ul className="suggestions">
          {filteredSuggestions.map((email, idx) => (
            <li key={idx} onMouseDown={() => handleSelect(email)}>
              <span className="username">{username}</span>
              <span className="domain">{email.replace(username, "")}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Input;
