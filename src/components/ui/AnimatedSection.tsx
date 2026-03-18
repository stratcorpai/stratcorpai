import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { getRevealInView } from "@/lib/animations";

interface AnimatedSectionProps {
  className?: string;
  delay?: number;
  children: ReactNode;
}

const AnimatedSection = ({ className, delay = 0, children }: AnimatedSectionProps) => {
  const reduceMotion = useReducedMotion();
  const reveal = getRevealInView(!!reduceMotion, delay);

  return (
    <motion.div className={cn(className)} {...reveal}>
      {children}
    </motion.div>
  );
};

export default AnimatedSection;

