import { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaGlobe } from 'react-icons/fa';

const LanguageButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: none;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  padding: 0.5rem;
  font-size: 1rem;
  position: relative;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Dropdown = styled(motion.div)`
  position: absolute;
  top: 100%;
  right: 0;
  background: ${({ theme }) => theme.cardBg};
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  min-width: 150px;
  z-index: 1000;
`;

const LanguageOption = styled.button`
  width: 100%;
  padding: 0.75rem 1rem;
  text-align: left;
  border: none;
  background: none;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.hover};
  }
`;

const LanguageSelector = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'it', label: t('languages.it') },
    { code: 'en', label: t('languages.en') },
    { code: 'ru', label: t('languages.ru') },
    { code: 'pl', label: t('languages.pl') },
    { code: 'es', label: t('languages.es') },
    { code: 'fr', label: t('languages.fr') },
    { code: 'de', label: t('languages.de') },
  ];

  const handleLanguageChange = (langCode) => {
    i18n.changeLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div style={{ position: 'relative' }}>
      <LanguageButton onClick={() => setIsOpen(!isOpen)}>
        <FaGlobe />
        <span>{t(`languages.${i18n.language}`)}</span>
      </LanguageButton>
      
      <AnimatePresence>
        {isOpen && (
          <Dropdown
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {languages.map((lang) => (
              <LanguageOption
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
              >
                {lang.label}
              </LanguageOption>
            ))}
          </Dropdown>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSelector;