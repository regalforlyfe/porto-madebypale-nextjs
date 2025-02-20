import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { education, exp } from "./data/career";

export function Career() {
  const scrollRef = useRef(null);
  const isInView = useInView(scrollRef, { threshold: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      className="min-h-screen grid grid-cols-1 sm:grid-cols-3 sm:gap-6 p-4"
      id="career"
    >
      {/* Profile Image */}
      <motion.div
        ref={scrollRef}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0, x: -300 },
          visible: { opacity: 1, x: 0 },
        }}
        transition={{
          duration: 2,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="relative m-4 sm:m-16"
      >
        <Image
          src="/images/myself.jpg"
          fill
          alt="Portrait of Ahmad Rifal"
          style={{ objectFit: "cover" }}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw"
        />
      </motion.div>

      {/* Experience Section */}
      <ContentSection
        title="Experience"
        isInView={isInView}
        containerVariants={containerVariants}
        itemVariants={itemVariants}
        data={exp}
        renderItem={(item) => (
          <>
            <div className="text-lg sm:text-xl font-medium">
              {item.title} ({item.work_type})
            </div>
            <div className="text-sm sm:text-lg">
              {item.start} - {item.end ?? "Present"}, {item.company}
            </div>
          </>
        )}
      />

      {/* Education Section */}
      <ContentSection
        title="Education"
        isInView={isInView}
        containerVariants={containerVariants}
        itemVariants={itemVariants}
        data={education}
        renderItem={(item) => (
          <>
            <div className="text-lg sm:text-xl font-medium">{item.school}</div>
            <div className="text-sm sm:text-lg">
              {item.degree}, {item.field_study}
            </div>
            <div className="text-sm sm:text-lg">
              {item.start} - {item.end ?? "Present"}
            </div>
          </>
        )}
      />
    </div>
  );
}

// Reusable Content Section Component
const ContentSection = ({
  title,
  isInView,
  containerVariants,
  itemVariants,
  data,
  renderItem,
}) => (
  <div className="flex flex-col justify-center space-y-4 sm:space-y-5">
    <h2 className="text-2xl sm:text-3xl font-bold">{title}</h2>
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="space-y-4 sm:space-y-6"
    >
      {data.map((item, index) => (
        <motion.div key={index} variants={itemVariants} className="space-y-1">
          {renderItem(item)}
        </motion.div>
      ))}
    </motion.div>
  </div>
);
