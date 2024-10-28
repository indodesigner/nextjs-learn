"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function FadeUp({
  children,
  delay = 0,
  duration = 0.5,
  className,
}) {
  let ref = useRef(null);
  let isInView = useInView(ref);
  let [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isInView && !isVisible) {
      setIsVisible(true);
    }
  }, [isInView, isVisible]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: {
          opacity: 0,
          y: 15,
        },
        visible: {
          opacity: 1,
          y: 0,
        },
      }}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      transition={{ delay, type: "spring", duration }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
