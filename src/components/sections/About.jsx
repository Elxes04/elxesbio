import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import TextTransition from '../common/TextTransition';

const AboutSection = styled.section`
  min-height: 100vh;
  padding: 6rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  background: ${({ theme }) => theme.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Description = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.text};
  margin-bottom: 3rem;
`;

const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 3rem;
`;

const TimelineItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
`;

const Year = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.primary};
  min-width: 100px;
`;

const Content = styled.div`
  flex: 1;
  padding: 1.5rem;
  background: ${({ theme }) => theme.cardBg};
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const About = () => {
  const { t } = useTranslation();

  const timeline = {
    "2016": t('about.timeline.2016'),
    "2025": t('about.timeline.2025'),
  };

  const [titleRef, isTitleInView] = useIntersectionObserver();
  const [descRef, isDescInView] = useIntersectionObserver();

  return (
    <AboutSection id="about">
      <Container>
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <TextTransition>
            <Title>{t('about.title')}</Title>
          </TextTransition>
        </motion.div>

        <motion.div
          ref={descRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isDescInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <TextTransition>
            <Description>{t('about.description')}</Description>
          </TextTransition>
        </motion.div>

        <Timeline>
          {Object.entries(timeline).map(([year, content], index) => {
            const [itemRef, isItemInView] = useIntersectionObserver();
            return (
              <TimelineItem
                key={year}
                ref={itemRef}
                initial={{ opacity: 0, x: -50 }}
                animate={isItemInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <TextTransition>
                  <Year>{year}</Year>
                </TextTransition>
                <TextTransition>
                  <Content>{content}</Content>
                </TextTransition>
              </TimelineItem>
            );
          })}
        </Timeline>
      </Container>
    </AboutSection>
  );
};

export default About;