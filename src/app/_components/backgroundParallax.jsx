import { useRef } from "react";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";

export function BackgroundParallax() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative z-10 p-20 mix-blend-difference w-full h-full flex flex-col justify-between">
        <p className="w-[50vw] text-[2vw] self-end uppercase mix-blend-difference font-semibold">
          Beauty and quality need the right time to be conceived and realised
          even in a world that is in too much of a hurry.
        </p>
        <p className="text-[5vw] uppercase mix-blend-difference">
          Jangan lupa istirahat
        </p>
      </div>
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          <Image
            src={"/images/mountains.jpg"}
            fill
            alt="image"
            style={{ objectFit: "cover" }}
          />
        </motion.div>
      </div>
    </div>
  );
}
