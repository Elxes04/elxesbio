import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

const AnimatedText = styled(motion.span)`
  display: inline-block;
  width: 100%;
`;

const TextTransition = ({ children, animate = true }) => {
  return (
    <AnimatePresence mode="wait">
      <AnimatedText
        key={children} // This key change triggers the animation
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </AnimatedText>
    </AnimatePresence>
  );
};

export default TextTransition;