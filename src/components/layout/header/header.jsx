"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Nav } from "./nav/nav";
import { ButtonNav } from "./button/buttonNav";
import styles from "./style.module.scss";

const menu = {
  open: {
    width: "30vw",
    height: "95vh",
    top: "-15px",
    right: "-20px",
    transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    width: "100px",
    height: "40px",
    top: "0px",
    right: "0px",
    transition: {
      duration: 0.75,
      delay: 0.35,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export function Header() {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div className={styles.header}>
        <a href="/" className="text-3xl font-bold font-advent">
          madeby<span className="font-viet text-2xl">pale.</span>
        </a>
      </div>

      <div className={styles.menuBtn}>
        <motion.div
          className={styles.menu}
          variants={menu}
          animate={isActive ? "open" : "closed"}
          initial="closed"
        >
          <AnimatePresence>{isActive && <Nav />}</AnimatePresence>
        </motion.div>
        <ButtonNav
          isActive={isActive}
          toggleMenu={() => {
            setIsActive(!isActive);
          }}
        />
      </div>
    </>
  );
}
