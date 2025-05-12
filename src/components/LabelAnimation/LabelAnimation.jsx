import React from "react";
import { motion } from "motion/react";
import "./LabelAnimation.scss";

const LabelAnimation = ({ label, className = "", delay = 0.6 }) => {
  const lines = label
    .split("<br>")
    .map((line) => line.trim())
    .filter((line) => line);

  return (
    <span className={`${className}`}>
      {lines.map((line, lineIndex) => {
        const words = line
          .split(" ")
          .map((word) => word.trim())
          .filter((word) => word);

        return (
          <div key={lineIndex} className="section-line">
            {words.map((word, wordIndex) => (
              <div key={wordIndex} className="section-word">
                {word.split("").map((char, charIndex) => (
                  <motion.span
                    key={charIndex}
                    initial="hidden"
                    animate="visible"
                    variants={{
                      hidden: {
                        opacity: 0,
                        transform: "scaleY(0) translateY(20px)",
                      },
                      visible: {
                        opacity: 1,
                        transform: "scaleY(1) translateY(0px)",
                        transition: {
                          duration: 0.6,
                          delay:
                            delay +
                            (lineIndex * 0.2 +
                              wordIndex * 0.1 +
                              charIndex * 0.02),
                        },
                      },
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </div>
            ))}
          </div>
        );
      })}
    </span>
  );
};

export default LabelAnimation;
