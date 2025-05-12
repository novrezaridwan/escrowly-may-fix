import React, { useState } from "react";
import "./ChipsFilter.scss"; // Gaya terpisah, lihat di bawah

const topics = [
  "All Topics (237 posts)",
  "Data Science",
  "Design",
  "Development",
  "Infrastructure",
  "Writing",
  "Product",
];

const ChipsFilter = () => {
  const [activeChip, setActiveChip] = useState(topics[0]);

  return (
    <div className="chips-container">
      {topics.map((topic) => (
        <button
          key={topic}
          className={`chip ${activeChip === topic ? "active" : ""}`}
          onClick={() => setActiveChip(topic)}
        >
          {topic}
        </button>
      ))}
    </div>
  );
};

export default ChipsFilter;
