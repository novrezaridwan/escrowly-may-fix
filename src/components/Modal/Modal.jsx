// Modal.js
import React, { useRef } from "react";
import "./Modal.scss";

export default function Modal({ isOpen, onClose, children, className }) {
  const modalRef = useRef(null);

  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  return (
    <div
      className={`modal-backdrop ${className}`}
      onClick={handleBackdropClick}
    >
      <div className="modal-container" ref={modalRef}>
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
}
