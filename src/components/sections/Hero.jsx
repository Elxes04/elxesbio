import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { FaCode } from 'react-icons/fa';
import TextTransition from '../common/TextTransition';
import SkillsGrid from './SkillsGrid';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6rem 1rem;
`;

const HeroContent = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
`;

const Avatar = styled(motion.div)`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: ${({ theme }) => theme.gradient};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 2rem;
  font-size: 3rem;
  color: white;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  margin-bottom: 1rem;
  background: ${({ theme }) => theme.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.textSecondary};
  margin-bottom: 2rem;
`;

const Description = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.text};
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
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
          <FaCode />
        </Avatar>
        
        <TextTransition>
          <Title>
            {t('home.greeting')}
          </Title>
        </TextTransition>
        
        <TextTransition>
          <Subtitle>
            {t('home.subtitle')}
          </Subtitle>
        </TextTransition>
        
        <TextTransition>
          <Description>
            {t('home.description')}
          </Description>
        </TextTransition>
        
        <SkillsGrid />
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;