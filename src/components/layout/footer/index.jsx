import React from "react";
import { motion } from "framer-motion";
import styles from "@/styles/marquee.module.css";

const marqueeVariants = {
  animate: {
    x: [0, -1036],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 10,
        ease: "linear",
      },
    },
  },
};

export function Footer() {
  return (
    <div>
      <div className={styles.marquee}>
        <motion.div
          className={styles.track}
          variants={marqueeVariants}
          animate="animate"
        >
          <h1>
            &copy; 2025 Ahmad Rifal. Let's Work Together. &copy; 2025 Ahmad
            Rifal. Let's Work Together. &copy; 2025 Ahmad Rifal. Let's Work
            Together. &copy; 2025 Ahmad Rifal. Let's Work Together. &copy; 2025
            Ahmad Rifal. Let's Work Together. &copy; 2025 Ahmad Rifal. Let's
            Work Together. &copy; 2025 Ahmad Rifal. Let's Work Together. &copy;
            2025 Ahmad Rifal. Let's Work Together.
          </h1>
        </motion.div>
      </div>
    </div>
  );
}
