import React, { useState } from "react";
import "./ChipsFilter.scss"; // Gaya terpisah, lihat di bawah

const topics = [
  "All Topics (37 posts)",
  "Crypto Escrow",
  "Escrow Wallet",
  "Benefits",
  "Real Estate Escrow",
  "Protection",
  "Domain Escrow",
  "Security",
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
