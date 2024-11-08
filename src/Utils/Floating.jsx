import React from "react";
import { motion } from "framer-motion";

const Floating = ({ top, left, delay }) => {
  return (
    <motion.div
      animate={{
        x: ["0%", "100%", "0%"],
        y: ["0%", "100%", "0%"],
        rotate: [0, 360],
      }}
      transition={{
        duration: 3,
        ease: "liner",
        repeat: Infinity,
        delay,
      }}
      aria-hidden="true"
      style={{ top, left }}
      className={`absolute  w-[100px] h-[100px] bg-green-900 rounded-full blur-2xl `}
    ></motion.div>
  );
};

export default Floating;
