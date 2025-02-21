import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const springConfig = { damping: 30, stiffness: 100, mass: 2 };

export default function TiltedCard({
  imageSrc,
  altText = "Tilted card image",
  captionText = "",
  containerHeight = "300px",
  containerWidth = "100%",
  imageHeight = "300px",
  imageWidth = "300px",
  scaleOnHover = 1.1,
  rotateAmplitude = 14,
  showMobileWarning = true,
  showTooltip = true,
  overlayContent = null,
  displayOverlayContent = false,
}) {
  const ref = useRef(null);

  // Motion Values
  const rotateX = useSpring(0, springConfig);
  const rotateY = useSpring(0, springConfig);
  const scale = useSpring(1, springConfig);
  const opacity = useSpring(0);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateCaption = useSpring(0, { stiffness: 350, damping: 30, mass: 1 });

  const handleMouse = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    rotateX.set((offsetY / (rect.height / 2)) * -rotateAmplitude);
    rotateY.set((offsetX / (rect.width / 2)) * rotateAmplitude);

    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
    rotateCaption.set(-offsetY * 0.3);
  };

  const handleMouseEnter = () => {
    scale.set(scaleOnHover);
    opacity.set(1);
  };

  const handleMouseLeave = () => {
    scale.set(1);
    opacity.set(0);
    rotateX.set(0);
    rotateY.set(0);
    rotateCaption.set(0);
  };

  return (
    <figure
      ref={ref}
      className="relative flex flex-col items-center justify-center w-full h-full [perspective:800px]"
      style={{ height: containerHeight, width: containerWidth }}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Mobile Warning */}
      {showMobileWarning && (
        <div className="absolute top-4 text-sm text-center sm:hidden">
          This effect is not optimized for mobile. Check on desktop.
        </div>
      )}

      {/* Tilted Image */}
      <motion.div
        className="relative [transform-style:preserve-3d]"
        style={{
          width: imageWidth,
          height: imageHeight,
          rotateX,
          rotateY,
          scale,
        }}
      >
        <motion.img
          src={imageSrc}
          alt={altText}
          className="absolute top-0 left-0 object-cover rounded-[15px] will-change-transform"
          style={{ width: imageWidth, height: imageHeight }}
        />

        {/* Overlay Content */}
        {displayOverlayContent && overlayContent && (
          <motion.div className="absolute top-0 left-0 z-[2] [transform:translateZ(30px)]">
            {overlayContent}
          </motion.div>
        )}
      </motion.div>

      {/* Tooltip */}
      {showTooltip && captionText && (
        <motion.figcaption
          className="absolute top-0 left-0 px-2 py-1 text-xs bg-white text-gray-800 rounded opacity-0 hidden sm:block"
          style={{ x, y, opacity, rotate: rotateCaption }}
        >
          {captionText}
        </motion.figcaption>
      )}
    </figure>
  );
}
