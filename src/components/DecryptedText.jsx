import React, { useState, useEffect } from "react";

const getRandomChar = () => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:',.<>?/~";
  return chars[Math.floor(Math.random() * chars.length)];
};

const DecryptedText = ({
  text,
  speed = 50,
  maxIterations = 10,
  sequential = true,
  className = "",
  encryptedClassName = "",
  animateOn = "hover", // Can be "hover" or "load"
}) => {
  const [displayText, setDisplayText] = useState(text.split("").map(() => getRandomChar()));
  const [isRevealed, setIsRevealed] = useState(animateOn === "load");

  useEffect(() => {
    if (isRevealed) {
      const textArray = text.split("");
      let iterations = 0;

      const interval = setInterval(() => {
        if (iterations >= maxIterations) {
          setDisplayText(textArray);
          clearInterval(interval);
          return;
        }

        setDisplayText((prev) =>
          prev.map((char, i) => (sequential && i > iterations ? char : getRandomChar()))
        );

        iterations++;
      }, speed);

      return () => clearInterval(interval);
    }
  }, [isRevealed, text, speed, maxIterations, sequential]);

  return (
    <span
      className={isRevealed ? className : encryptedClassName}
      onMouseEnter={() => animateOn === "hover" && setIsRevealed(true)}
    >
      {displayText.join("")}
    </span>
  );
};

export default DecryptedText;
