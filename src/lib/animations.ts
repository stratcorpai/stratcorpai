import type { MotionProps } from "framer-motion";

export const motionToken = {
  quick: 0.28,
  base: 0.46,
  slow: 0.62,
  easing: [0.22, 0.61, 0.36, 1] as const,
};

export const getRevealInView = (
  reduceMotion: boolean,
  delay = 0
): Pick<MotionProps, "initial" | "whileInView" | "transition" | "viewport"> => {
  if (reduceMotion) {
    return {
      initial: { opacity: 1, y: 0 },
      whileInView: { opacity: 1, y: 0 },
      transition: { duration: 0 },
      viewport: { once: true },
    };
  }

  return {
    initial: { opacity: 0, y: 14 },
    whileInView: { opacity: 1, y: 0 },
    transition: {
      duration: motionToken.base,
      delay,
      ease: motionToken.easing,
    },
    viewport: { once: true, amount: 0.2 },
  };
};

export const getDrawOnce = (
  reduceMotion: boolean,
  delay = 0
): Pick<MotionProps, "initial" | "animate" | "transition"> => {
  if (reduceMotion) {
    return {
      initial: { pathLength: 1, opacity: 1 },
      animate: { pathLength: 1, opacity: 1 },
      transition: { duration: 0 },
    };
  }

  return {
    initial: { pathLength: 0, opacity: 0.65 },
    animate: { pathLength: 1, opacity: 1 },
    transition: {
      duration: motionToken.slow,
      delay,
      ease: motionToken.easing,
    },
  };
};

