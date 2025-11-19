import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import TextTransition from '../common/TextTransition';

const AboutSection = styled.section`
  min-height: 100vh;
  padding: 6rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.surfaceContainerLow};
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  background: ${({ theme }) => theme.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 500;
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.onSurface};
  margin-bottom: 3rem;
  letter-spacing: 0.25px;
`;

const About = () => {
  const { t } = useTranslation();

  return (
    <AboutSection id="about">
      <Container>
        <TextTransition>
          <Title className="md-typescale-display-small">
            {t('about.title')}
          </Title>
        </TextTransition>

        <TextTransition>
          <Description className="md-typescale-body-large">
            {t('about.description')}
          </Description>
        </TextTransition>
      </Container>
    </AboutSection>
  );
};

export default About;
