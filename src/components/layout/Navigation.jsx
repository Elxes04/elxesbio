import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Nav = styled.nav`
  @media (max-width: 768px) {
    position: fixed;
    top: 70px;
    left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    width: 100%;
    height: calc(100vh - 70px);
    background: ${({ theme }) => theme.headerBg};
    backdrop-filter: blur(10px);
    transition: left 0.3s ease;
  }
`;

const NavList = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
  
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2rem;
  }
`;

const NavItem = styled(motion.li)`
  a {
    color: ${({ theme }) => theme.text};
    text-decoration: none;
    font-weight: 500;
    transition: color 0.2s ease;
    
    &:hover {
      color: ${({ theme }) => theme.primary};
    }
  }
`;

const Navigation = ({ isOpen, setIsOpen }) => {
  const { t } = useTranslation();
  
  const navItems = [
    { href: '#home', label: t('nav.home') },
    { href: '#about', label: t('nav.about') },
    { href: '#contact', label: t('nav.contact') },
  ];

  return (
    <Nav isOpen={isOpen}>
      <NavList>
        {navItems.map((item, index) => (
          <NavItem
            key={item.href}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <a 
              href={item.href}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          </NavItem>
        ))}
      </NavList>
    </Nav>
  );
};

export default Navigation;