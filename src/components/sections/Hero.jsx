import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import '@material/web/fab/fab.js';
import '@material/web/icon/icon.js';
import TextTransition from '../common/TextTransition';
import SkillsGrid from './SkillsGrid';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6rem 1rem;
  background: ${({ theme }) => theme.surface};
`;

const HeroContent = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
`;

const Avatar = styled(motion.div)`
  width: 150px;
  height: 150px;
  border-radius: ${({ theme }) => theme.shape.full};
  background: ${({ theme }) => theme.gradient};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 2rem;
  font-size: 3rem;
  color: ${({ theme }) => theme.onPrimary};
  box-shadow: ${({ theme }) => theme.elevation.level3};
  
  md-icon {
    font-size: 3rem;
    width: 3rem;
    height: 3rem;
  }
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  background: ${({ theme }) => theme.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 500;
  letter-spacing: -0.5px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.onSurfaceVariant};
  margin-bottom: 2rem;
  font-weight: 400;
  letter-spacing: 0;
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.onSurface};
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  letter-spacing: 0.25px;
`;

const Hero = () => {
  const { t } = useTranslation();

  return (
    <HeroSection id="home">
      <HeroContent>
        <Avatar
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          <md-icon>code</md-icon>
        </Avatar>
        
        <TextTransition>
          <Title className="md-typescale-display-medium">
            {t('home.greeting')}
          </Title>
        </TextTransition>
        
        <TextTransition>
          <Subtitle className="md-typescale-headline-medium">
            {t('home.subtitle')}
          </Subtitle>
        </TextTransition>
        
        <TextTransition>
          <Description className="md-typescale-body-large">
            {t('home.description')}
          </Description>
        </TextTransition>
        
        <SkillsGrid />
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
