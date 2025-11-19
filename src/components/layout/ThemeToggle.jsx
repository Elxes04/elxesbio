import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import '@material/web/iconbutton/icon-button.js';
import '@material/web/icon/icon.js';
import '@material/web/ripple/ripple.js';
import { useTranslation } from 'react-i18next';

const ToggleWrapper = styled.div`
  md-icon-button {
    --md-sys-color-on-surface-variant: ${({ theme }) => theme.onSurfaceVariant};
    --md-icon-button-state-layer-height: 40px;
    --md-icon-button-state-layer-width: 40px;
  }
`;

const ThemeToggle = ({ isDark, toggleTheme }) => {
  const { t } = useTranslation();
  const iconRef = useRef(null);

  useEffect(() => {
    if (iconRef.current) {
      // Update icon based on theme
      const icon = isDark ? 'light_mode' : 'dark_mode';
      const mdIcon = iconRef.current.querySelector('md-icon');
      if (mdIcon) {
        mdIcon.textContent = icon;
      }
    }
  }, [isDark]);

  return (
    <ToggleWrapper>
      <md-icon-button
        ref={iconRef}
        onClick={toggleTheme}
        aria-label={t('theme.toggle')}
        title={t('theme.toggle')}
      >
        <md-icon>{isDark ? 'light_mode' : 'dark_mode'}</md-icon>
      </md-icon-button>
    </ToggleWrapper>
  );
};

export default ThemeToggle;
