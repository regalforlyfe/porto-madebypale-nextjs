import styles from "./project.module.scss";
import gsap from "gsap";
import { projects } from "./data/project";

export function Project() {
  const manageMouseEnter = (e, index) => {
    gsap.to(e.target, {
      top: "-2vw",
      backgroundColor: projects[index].color,
      duration: 0.3,
    });
  };

  const manageMouseLeave = (e, index) => {
    gsap.to(e.target, {
      top: "0",
      backgroundColor: "var(--bone)",
      duration: 0.3,
      delay: 0.1,
    });
  };

  return (
    <div className={styles.container} id="projects">
      <div className={styles.projectContainer}>
        <div>
          <p className="text-black">this are my project</p>
        </div>
        {projects.map((project, index) => {
          return (
            <div
              onMouseEnter={(e) => {
                manageMouseEnter(e, index);
              }}
              onMouseLeave={(e) => {
                manageMouseLeave(e, index);
              }}
              onClick={() => (window.location = project.href)}
              key={index}
            >
              <p>{project.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
