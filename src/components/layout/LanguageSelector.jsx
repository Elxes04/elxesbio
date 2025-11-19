import { useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import '@material/web/menu/menu.js';
import '@material/web/menu/menu-item.js';
import '@material/web/iconbutton/icon-button.js';
import '@material/web/icon/icon.js';
import '@material/web/ripple/ripple.js';

const LanguageWrapper = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  cursor: pointer;
  .indicator {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px 16px;
    border-radius: 16px;
    background: transparent; /* rimuove effetto "premuto" persistente */
    transition: background 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden; /* per clip del ripple */
  }
  
  &:hover .indicator {
    background: ${({ theme }) => theme.surfaceContainer};
  }
`;

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  
  md-menu {
    --md-menu-container-color: ${({ theme }) => theme.surfaceContainer};
    --md-menu-container-shape: ${({ theme }) => theme.shape.extraSmall};
  }
  
  md-menu-item {
    --md-menu-item-label-text-color: ${({ theme }) => theme.onSurface};
    --md-menu-item-container-color: transparent;
    --md-menu-item-selected-container-color: ${({ theme }) => theme.surfaceContainerHighest};
  }
  
  md-icon-button {
    --md-icon-button-icon-color: ${({ theme }) => theme.onSurfaceVariant};
  }
`;

const Label = styled.span`
  font-size: 0.75rem;
  font-weight: 500;
  color: ${({ theme }) => theme.onSurfaceVariant};
  transition: color 0.2s cubic-bezier(0.4, 0, 0.2, 1);
`;

const LanguageSelector = () => {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  // ref non più necessario dopo rimozione md-icon-button

  const languages = [
    { code: 'it', label: 'Italiano', flag: '🇮🇹' },
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'ru', label: 'Русский', flag: '🇷🇺' },
    { code: 'pl', label: 'Polski', flag: '🇵🇱' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
  ];

  const handleLanguageChange = (langCode) => {
    i18n.changeLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <LanguageWrapper
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <MenuContainer>
        <div className="indicator" id="lang-button" onClick={() => setIsOpen(!isOpen)}>
          <md-ripple></md-ripple>
          <md-icon>translate</md-icon>
        </div>
        <Label>{t('nav.language')}</Label>
        <md-menu
          anchor="lang-button"
          open={isOpen}
          onClosed={() => setIsOpen(false)}
          style={{ zIndex: 2002 }}
        >
          {languages.map((lang) => (
            <md-menu-item
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
            >
              <div slot="headline">{lang.flag} {lang.label}</div>
            </md-menu-item>
          ))}
        </md-menu>
      </MenuContainer>
    </LanguageWrapper>
  );
};

export default LanguageSelector;
