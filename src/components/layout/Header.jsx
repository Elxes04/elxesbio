import styled from 'styled-components';
import '@material/web/button/text-button.js';
import '@material/web/iconbutton/icon-button.js';
import '@material/web/icon/icon.js';
import ThemeToggle from './ThemeToggle';
import LanguageSelector from './LanguageSelector';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: transparent;
  pointer-events: none;
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  pointer-events: auto;

  @media (min-width: 1025px) {
    margin-top: 0.5rem;
    background: ${({ theme }) => theme.surfaceContainer};
    box-shadow: ${({ theme }) => theme.elevation.level3};
    border: 1px solid ${({ theme }) => theme.outlineVariant};
    border-radius: 16px;
    backdrop-filter: blur(10px);
  }

  @media (max-width: 1024px) {
    background: ${({ theme }) => theme.surfaceContainer};
    box-shadow: ${({ theme }) => theme.elevation.level2};
  }
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  color: ${({ theme }) => theme.onSurface};
  font-family: 'Roboto', sans-serif;
  letter-spacing: 0.25px;
`;

const Actions = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const Header = ({ isDark, toggleTheme }) => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo>Elxes</Logo>
        <Actions>
          <LanguageSelector />
          <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
        </Actions>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
