import React, { useRef, useState } from "react";
import { motion, useAnimationFrame } from "framer-motion";

const images = [
  "/services.jpg",
  "/services.jpg",
  "/services.jpg",
  "/services.jpg",
  "/services.jpg",
  "/services.jpg",
  "/services.jpg",
  "/services.jpg",
  "/services.jpg",
  "/services.jpg",
  "/services.jpg",
  "/services.jpg",
];

const CurvedImageSlider = () => {
  const containerRef = useRef(null);
  const [transforms, setTransforms] = useState(images.map(() => ({ rotateY: 0, scale: 1, translateZ: 0 })));

  useAnimationFrame(() => {
    const container = containerRef.current;
    if (!container) return;

    const containerRect = container.getBoundingClientRect();
    const centerX = containerRect.left + containerRect.width / 2;

    const newTransforms = Array.from(container.children).map((child) => {
      const rect = child.getBoundingClientRect();
      const childCenter = rect.left + rect.width / 2;

      const distFromCenter = childCenter - centerX;
      const maxDist = containerRect.width / 2;

      const normalized = Math.min(Math.abs(distFromCenter) / maxDist, 1);

      // 🟢 Reverse scale logic: center is smaller, edges are larger
      const scale = 1 + normalized * 0.4; // center: 1, edges: up to 1.4
      const rotateY = (distFromCenter / maxDist) * 40; // -40deg to 40deg
      const translateZ = (1 - normalized) * -100; // center: -100px, edges: 0px

      return { rotateY, scale, translateZ };
    });

    setTransforms(newTransforms);
  });

  return (
    <div className="w-full overflow-x-auto py-10 bg-white">
      <div
        ref={containerRef}
        className="flex w-max gap-8 px-20"
        style={{ perspective: "1200px" }}
      >
        {images.map((src, i) => (
          <motion.div
            key={i}
            className="w-[200px] h-[260px] rounded-xl overflow-hidden shadow-xl flex-shrink-0 bg-white"
            animate={{
              rotateY: transforms[i]?.rotateY || 0,
              scale: transforms[i]?.scale || 1,
              z: transforms[i]?.translateZ || 0,
            }}
            transition={{ duration: 0.3 }}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            <img
              src={src}
              alt={`img-${i}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CurvedImageSlider;
