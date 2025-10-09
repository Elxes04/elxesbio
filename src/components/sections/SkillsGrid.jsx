import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const Category = styled(motion.div)`
  background: ${({ theme }) => theme.cardBg};
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const CategoryTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.text};
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Tag = styled(motion.span)`
  background: ${({ theme }) => theme.tagBg};
  color: ${({ theme }) => theme.tagText};
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

const SkillsGrid = () => {
  const { t } = useTranslation();

  const languages = [
    'HTML', 'CSS', 'Python', 'JavaScript', 
    'Java', 'C', 'C++', 'C#'
  ];

  const specializations = [
    { key: 'web', label: t('home.specializationsList.web') },
    { key: 'desktop', label: t('home.specializationsList.desktop') },
    { key: 'mobile', label: t('home.specializationsList.mobile') },
    { key: 'backend', label: t('home.specializationsList.backend') },
    { key: 'frontend', label: t('home.specializationsList.frontend') },
    { key: 'api', label: t('home.specializationsList.api') }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <Grid>
      <Category
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <CategoryTitle>{t('home.skills.languages')}</CategoryTitle>
        <TagsContainer>
          {languages.map((lang) => (
            <Tag key={lang} variants={itemVariants}>
              {lang}
            </Tag>
          ))}
        </TagsContainer>
      </Category>

      <Category
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <CategoryTitle>{t('home.skills.specializations')}</CategoryTitle>
        <TagsContainer>
          {specializations.map((spec) => (
            <Tag key={spec.key} variants={itemVariants}>
              {spec.label}
            </Tag>
          ))}
        </TagsContainer>
      </Category>
    </Grid>
  );
};

export default SkillsGrid;