"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./intro.module.scss";

export function Intro() {
  const [windowsWidth, setWindowsWidth] = useState(0);

  useEffect(() => {
    setWindowsWidth(window.innerWidth);
  }, []);

  const getBlocks = () => {
    const blockSize = windowsWidth * 0.05;
    const nbOfBlocks = Math.ceil(window.innerHeight / blockSize);
    return [...Array(nbOfBlocks).keys()].map((_, index) => {
      return (
        <div
          onMouseEnter={(e) => {
            colorize(e.target);
          }}
          key={index}
        ></div>
      );
    });
  };

  const colorize = (el) => {
    el.style.backgroundColor = "var(--iceblue)";
    setTimeout(() => {
      el.style.backgroundColor = "var(--bone)";
    }, 300);
  };

  return (
    <div className={styles.container}>
      <div className={styles.body}>
        <motion.p
          initial={{ opacity: 0, y: 300 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          Not just a developer, but a problem-solver. Expect results, not
          excuses. Delivering pixel-perfect frontend solutions that don't break
          the bank (and a good dose of humor too)
        </motion.p>
      </div>
      <div className={styles.grid}>
        {windowsWidth > 0 &&
          [...Array(20).keys()].map((_, index) => {
            return (
              <div key={index} className={styles.column}>
                {getBlocks()}
              </div>
            );
          })}
      </div>
    </div>
  );
}
