import React from "react";
import { motion } from "framer-motion";

const Button = ({ children, ...props }) => {
  return (
    <motion.button
      initial={{
        scale: 1,
      }}
      whileTap={{
        scale: 0.8,
      }}
      exit={{
        scale: 1,
      }}
      transition={{
        type: "spring",
        stiffness: "200",
        duration: 3,
      }}
      {...props}
      className="bg-gradient-to-br from-green-500 vai-gray-900 to-emerald-900 backdrop-blur-xl backdrop-filter shadow-md ring-1 ring-green-600 text-white font-bold text-xl px-4 py-1 rounded-md shadow-violet-400/45 w-full disabled:cursor-not-allowed"
    >
      {children}
    </motion.button>
  );
};

export default Button;
