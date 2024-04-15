import React from "react";
import { useRef } from "react";
import Title from "../Components/Title";
import { motion, useInView } from "framer-motion";
const Testimonial = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 1 * 0.5,
      },
    },
  };
  return (
    <motion.div
      className="flex justify-center items-center flex-col p-2 mt-8 mx-auto"
      id="testimonial"
      initial="initial"
      animate="animate"
    >
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={variants}
        ref={ref}
      >
        <section
          id="about"
          className="flex flex-col items-center justify-center"
        >
          <Title text="Testimonial" styles="mb-10" />
        </section>
      </motion.div>
    </motion.div>
  );
};

export default Testimonial;
