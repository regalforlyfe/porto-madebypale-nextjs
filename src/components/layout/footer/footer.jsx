import styles from "./style.module.scss";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <div className={styles.footer}>
      {/* <motion.div
        className={styles.track}
        animate="animate"
        variants={{
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
        }}
      >
        <h1>
          &copy; 2025 Ahmad Rifal. Let's Work Together. &copy; 2025 Ahmad Rifal.
          Let's Work Together. &copy; 2025 Ahmad Rifal. Let's Work Together.
          &copy; 2025 Ahmad Rifal. Let's Work Together. &copy; 2025 Ahmad Rifal.
          Let's Work Together. &copy; 2025 Ahmad Rifal. Let's Work Together.
          &copy; 2025 Ahmad Rifal. Let's Work Together. &copy; 2025 Ahmad Rifal.
          Let's Work Together.
        </h1>
      </motion.div> */}
    </div>
  );
}
