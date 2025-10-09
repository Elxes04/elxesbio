import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const ToggleButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  position: relative;
  overflow: hidden;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const ThemeToggle = ({ isDark, toggleTheme }) => {
  const { t } = useTranslation();

  return (
    <ToggleButton
      onClick={toggleTheme}
      aria-label={t('theme.toggle')}
      title={t('theme.toggle')}
    >
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: isDark ? 360 : 0 }}
        transition={{ duration: 0.5 }}
      >
        {isDark ? <FaSun /> : <FaMoon />}
      </motion.div>
    </ToggleButton>
  );
};

export default ThemeToggle;