import React, { useState, useEffect, useRef } from "react";
import { Icon } from "@iconify/react";
import iconChecked from "../../assets/icons/iconChecked.svg";
import "./DropdownCustom.scss";

const Dropdown = ({
  users,
  defaultUser = null,
  placeholder = "Select an option",
  onSelect,
  className = "",
  icon = "tabler:chevron-down",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(defaultUser);
  const [dropUp, setDropUp] = useState(false);

  const dropdownRef = useRef(null);
  const listRef = useRef(null);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const selectUser = (user) => {
    setSelectedUser(user);
    onSelect?.(user);
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen && dropdownRef.current && listRef.current) {
      const rect = dropdownRef.current.getBoundingClientRect();
      const listHeight = listRef.current.offsetHeight;
      const spaceBelow = window.innerHeight - rect.bottom;
      const spaceAbove = rect.top;

      setDropUp(spaceBelow < listHeight && spaceAbove > listHeight);
    }
  }, [isOpen]);

  return (
    <div ref={dropdownRef} className={`dropdown-custom ${className}`}>
      <button
        type="button"
        className="dropdown-button"
        onClick={toggleDropdown}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className="dropdown-selected">
          {selectedUser ? (
            <>
              {selectedUser.img && (
                <img
                  src={selectedUser.img}
                  alt={selectedUser.label}
                  className="dropdown-avatar"
                />
              )}
              <span className="dropdown-label">{selectedUser.label}</span>
            </>
          ) : (
            <span className="dropdown-placeholder">{placeholder}</span>
          )}
        </span>
        <Icon
          icon={icon}
          className={`dropdown-icon ${isOpen ? "rotated" : ""}`}
        />
      </button>

      {isOpen && (
        <ul
          ref={listRef}
          className={`dropdown-list ${dropUp ? "drop-up" : "drop-down"}`}
          role="listbox"
        >
          {users.map((user) => (
            <li
              key={user.id}
              className={`dropdown-item ${
                selectedUser && selectedUser.id === user.id ? "active" : ""
              }`}
              onClick={() => selectUser(user)}
            >
              {user.img && (
                <img
                  src={user.img}
                  alt={user.label}
                  className="dropdown-item-avatar"
                />
              )}
              <div className="dropdown-item-content">
                <span className="dropdown-item-label">{user.label}</span>
                {selectedUser && selectedUser.id === user.id && (
                  <img src={iconChecked} alt="Checked" />
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
