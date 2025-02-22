import React from "react";
import { motion } from "framer-motion";

const images = [
  { src: "src/assets/crypto.jpg", alt: "Crypto" },
  { src: "src/assets/F&O.jpg", alt: "F&O" },
  { src: "src/assets/Fundamental.jpg", alt: "Fundamental" },
  { src: "src/assets/Algo.jpg", alt: "Algo" },
  { src: "src/assets/basics.jpg", alt: "Basics" },
  { src: "src/assets/Technical.jpg", alt: "Technical" },
];

const Course   = () => {
  return (
    <div className="flex flex-col gap-4 mt-6">
      {Array(2)
        .fill()
        .map((_, rowIndex) => (
          <div key={rowIndex} className="flex justify-center items-center gap-6">
            {images.slice(rowIndex * 3, rowIndex * 3 + 3).map((image, index) => (
              <motion.img
                key={index}
                className="h-76 w-60 rounded-xl"
                src={image.src}
                alt={image.alt}
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }} // 👈 Slow pop-up effect
                transition={{ duration: 0.4, ease: "easeOut" }} // 👈 Smooth animation
              />
            ))}
          </div>
        ))}
    </div>
  );
};

export default Course;
