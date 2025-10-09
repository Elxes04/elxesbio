import { useState } from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';
import LanguageSelector from './LanguageSelector';
import ThemeToggle from './ThemeToggle';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${({ theme }) => theme.headerBg};
  backdrop-filter: blur(10px);
  transition: background 0.3s ease;
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text};
`;

const Header = ({ isDark, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo>Elxes</Logo>
        <Navigation isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <LanguageSelector />
          <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
        </div>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;