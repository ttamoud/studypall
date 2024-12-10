import { Variants } from 'framer-motion';

export const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.3 }
  }
};

export const slideIn: Variants = {
  hidden: { x: -100, opacity: 0 },
  visible: { 
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  },
  exit: {
    x: 100,
    opacity: 0,
    transition: { duration: 0.3 }
  }
};

export const cardFlip: Variants = {
  hidden: { rotateY: 180, opacity: 0 },
  visible: {
    rotateY: 0,
    opacity: 1,
    transition: { duration: 0.6 }
  },
  exit: {
    rotateY: -180,
    opacity: 0,
    transition: { duration: 0.3 }
  }
};