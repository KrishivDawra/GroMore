import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useAnimation, useTransform } from "framer-motion";

const IMAGES = [
  "https://images.unsplash.com/photo-1528181304800-259b08848526?q=80&w=3870&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?q=80&w=3870&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=3456&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1495103033382-fe343886b671?q=80&w=3870&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1506781961370-37a89d6b3095?q=80&w=3264&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1599576838688-8a6c11263108?q=80&w=3870&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1494094892896-7f14a4433b7a?q=80&w=3870&auto=format&fit=crop",
  "https://plus.unsplash.com/premium_photo-1664910706524-e783eed89e71?q=80&w=3869&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1503788311183-fa3bf9c4bc32?q=80&w=3870&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1585970480901-90d6bb2a48b5?q=80&w=3774&auto=format&fit=crop",
];

const RollingGallery = ({ autoplay = true, pauseOnHover = true, images = IMAGES, rowCount = 6, imageSize = { width: 350, height: 150 } }) => {
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const rotation = useMotionValue(0);
  const controls = useAnimation();
  const dragFactor = 0.05;
  const containerRef = useRef(null);

  // Responsive adjustments
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cylinderWidth = screenSize <= 640 ? 1400 : 2000;
  const faceCount = Math.min(rowCount, images.length);
  const faceWidth = (cylinderWidth / faceCount) * 1.5;
  const radius = cylinderWidth / (2 * Math.PI);

  const transform = useTransform(rotation, (val) => `rotate3d(0,1,0,${val}deg)`);

  const startSpin = (angle) => {
    controls.start({
      rotateY: [angle, angle - 360],
      transition: { duration: 20, ease: "linear", repeat: Infinity },
    });
  };

  useEffect(() => {
    if (autoplay) startSpin(rotation.get());
    else controls.stop();
  }, [autoplay]);

  const handleDrag = (_, info) => {
    controls.stop();
    rotation.set(rotation.get() + info.offset.x * dragFactor);
  };

  const handleDragEnd = (_, info) => {
    const finalAngle = rotation.get() + info.velocity.x * dragFactor;
    rotation.set(finalAngle);
    if (autoplay) startSpin(finalAngle);
  };

  const handleMouseEnter = () => autoplay && pauseOnHover && controls.stop();
  const handleMouseLeave = () => autoplay && pauseOnHover && startSpin(rotation.get());

  return (
    <div className="relative h-[550px] w-full overflow-hidden bg-gray-900 flex flex-col items-center">
      <h2 className="text-7xl font-bold text-white py-10 mb-6">Explore More</h2>
      <div className="relative flex h-full items-center justify-center [perspective:1000px] [transform-style:preserve-3d]">
        <motion.div
          ref={containerRef}
          drag="x"
          dragElastic={0}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          animate={controls}
          onUpdate={(latest) => typeof latest.rotateY === "number" && rotation.set(latest.rotateY)}
          style={{ transform, rotateY: rotation, width: cylinderWidth, transformStyle: "preserve-3d" }}
          className="flex min-h-[220px] cursor-grab items-center justify-center"
        >
          {images.slice(0, rowCount).map((url, i) => (
            <div
              key={i}
              className="absolute flex items-center justify-center p-[4%] [backface-visibility:hidden]"
              style={{ width: `${faceWidth}px`, transform: `rotateY(${(360 / faceCount) * i}deg) translateZ(${radius}px)` }}
            >
              <img
                src={url}
                alt="gallery"
                className="pointer-events-none rounded-[15px] border-[3px] border-white object-cover transition-transform duration-300 ease-out group-hover:scale-110"
                style={{ width: imageSize.width, height: imageSize.height }}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default RollingGallery;
