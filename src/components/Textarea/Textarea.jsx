import React, { useState, useRef, useEffect, ChangeEvent } from "react";
import "./Textarea.scss";

const TextAreaWithCounter = ({
  placeholder = "Message",
  maxLength = 1000,
  rows = 4,
  className = "",
}) => {
  const [text, setText] = useState("");
  const textAreaRef = useRef(null);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.scrollTop = textAreaRef.current.scrollHeight;
    }
  }, [text]);

  return (
    <div className={`textarea-wrapper ${className}`}>
      <div className="textarea-container">
        <textarea
          ref={textAreaRef}
          maxLength={maxLength}
          rows={rows}
          placeholder={placeholder}
          className="textarea-input"
          value={text}
          onChange={handleChange}
        />
        <div className="textarea-counter">
          {text.length} / {maxLength}
        </div>
      </div>
    </div>
  );
};

export default TextAreaWithCounter;
