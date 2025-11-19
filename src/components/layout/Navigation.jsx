import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import '@material/web/button/text-button.js';
import '@material/web/ripple/ripple.js';
import '@material/web/icon/icon.js';
import useActiveSection from '../../hooks/useActiveSection';

const Nav = styled.nav`
  @media (min-width: 1025px) { /* Desktop navigation rail */
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    width: 80px;
    background: ${({ theme }) => theme.surfaceContainer};
    box-shadow: ${({ theme }) => theme.elevation.level2};
    padding: 5rem 0 1rem;
    z-index: 999;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  @media (max-width: 1024px) { display: none; } /* Hidden on mobile */
`;

const BottomNav = styled.nav`
  @media (min-width: 1025px) { display: none; } /* Hidden on desktop */
  @media (max-width: 1024px) { /* Mobile bottom bar */
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1001;
    background: ${({ theme }) => theme.surfaceContainer};
    box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.1);
    padding: 0.5rem 0 calc(0.5rem + env(safe-area-inset-bottom));
    &:after { /* Safe area fill */
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: env(safe-area-inset-bottom);
      background: ${({ theme }) => theme.surfaceContainer};
      pointer-events: none;
    }
  }
`;

const BottomNavList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  max-width: 600px;
  margin: 0 auto;
`;

const BottomNavItem = styled.li`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  cursor: pointer;
  padding: 0.5rem 0.25rem;
  position: relative;
  
  .indicator {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px ${({ $isActive }) => $isActive ? '20px' : '16px'};
    border-radius: 16px;
    background: ${({ theme, $isActive }) => 
      $isActive ? theme.primaryContainer : 'transparent'};
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
  }
  
  md-icon {
    font-size: 24px;
    color: ${({ theme, $isActive }) => 
      $isActive ? theme.onPrimaryContainer : theme.onSurfaceVariant};
    transition: color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  span {
    font-size: 0.75rem;
    font-weight: 500;
    color: ${({ theme, $isActive }) => 
      $isActive ? theme.onSurface : theme.onSurfaceVariant};
    transition: color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NavItem = styled(motion.li)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  cursor: pointer;
  padding: 0.5rem;
  position: relative;
  border-radius: ${({ theme }) => theme.shape.medium};
  
  .indicator {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px ${({ $isActive }) => $isActive ? '20px' : '16px'};
    border-radius: 16px;
    background: ${({ theme, $isActive }) => 
      $isActive ? theme.primaryContainer : 'transparent'};
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
  }
  
  md-icon {
    font-size: 24px;
    color: ${({ theme, $isActive }) => 
      $isActive ? theme.onPrimaryContainer : theme.onSurfaceVariant};
    transition: color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  span {
    font-size: 0.75rem;
    font-weight: 500;
    color: ${({ theme, $isActive }) => 
      $isActive ? theme.onSurface : theme.onSurfaceVariant};
    transition: color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    white-space: nowrap;
  }
`;


const Navigation = () => {
  const { t } = useTranslation();
  
  const navItems = [
    { href: '#home', label: t('nav.home'), icon: 'home' },
    { href: '#about', label: t('nav.about'), icon: 'person' },
    { href: '#contact', label: t('nav.contact'), icon: 'mail' },
  ];

  const activeSection = useActiveSection(navItems.map(item => item.href));

  const handleClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Desktop nav */}
      <Nav>
        <NavList>
          {navItems.map((item, index) => (
            <NavItem
              key={item.href}
              $isActive={activeSection === item.href}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => handleClick(item.href)}
            >
              <div className="indicator">
                <md-ripple></md-ripple>
                <md-icon>{item.icon}</md-icon>
              </div>
              <span>{item.label}</span>
            </NavItem>
          ))}
        </NavList>
      </Nav>

      {/* Mobile nav */}
      <BottomNav>
        <BottomNavList>
          {navItems.map((item) => (
            <BottomNavItem
              key={item.href}
              $isActive={activeSection === item.href}
              onClick={() => handleClick(item.href)}
            >
              <div className="indicator">
                <md-ripple></md-ripple>
                <md-icon>{item.icon}</md-icon>
              </div>
              <span>{item.label}</span>
            </BottomNavItem>
          ))}
        </BottomNavList>
      </BottomNav>
    </>
  );
};

export default Navigation;
