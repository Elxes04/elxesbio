import { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme';
import GlobalStyle from './styles/GlobalStyle';

import Header from './components/layout/Header';
import Navigation from './components/layout/Navigation';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Contact from './components/sections/Contact';
import Loading from './components/common/Loading';
import ScrollToTop from './components/common/ScrollToTop';

const Main = styled.main`
  /* Space for bottom nav on mobile & tablet */
  @media (max-width: 1024px) {
    padding-bottom: calc(80px + env(safe-area-inset-bottom));
    padding-top: 60px; /* spazio per header mobile */
  }
  
  /* Space for top header and left rail on desktop */
  @media (min-width: 1025px) {
    margin-left: 80px; /* spazio per navigation rail */
    padding-top: 84px; /* spazio per header fluttuante */
    transition: margin-left 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

function App() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' 
      : window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Save theme preference
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  useEffect(() => {
    // Simulate loading time for smoother transitions
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => setIsDark(!isDark);

  if (isLoading) {
    return (
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Loading />
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Header isDark={isDark} toggleTheme={toggleTheme} />
      {/* Navigation è ora fuori dall'Header per essere sempre montata */}
      <Navigation />
      <Main>
        <Hero />
        <About />
        <Contact />
      </Main>
      <ScrollToTop />
    </ThemeProvider>
  );
}

export default App;
