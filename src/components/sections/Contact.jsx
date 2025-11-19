import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import '@material/web/button/text-button.js';
import '@material/web/icon/icon.js';
import '@material/web/ripple/ripple.js';

const ContactSection = styled.section`
  min-height: 100vh;
  padding: 6rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.surface};
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

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
  flex-wrap: wrap;
`;

const GitHubLink = styled.a`
  width: 64px;
  height: 64px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.shape.full};
  background: ${({ theme }) => theme.primaryContainer};
  color: ${({ theme }) => theme.onPrimaryContainer};
  text-decoration: none;
  transition: background .3s, transform .2s;
  &:hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.onPrimary};
    transform: translateY(-2px);
  }
  svg {
    width: 32px;
    height: 32px;
    fill: currentColor;
  }
`;

const IconWrapper = styled.span`
  font-size: 1.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

const Contact = () => {
  const { t } = useTranslation();

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Elxes04'
    }
  ];

  return (
    <ContactSection id="contact">
      <Container>
        <Title className="md-typescale-display-small">
          {t('contact.title')}
        </Title>

        <Description className="md-typescale-body-large">
          {t('contact.intro')}
        </Description>

        <SocialLinks>
          {socialLinks.map(link => (
            <GitHubLink
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.4 7.86 10.94.58.11.79-.25.79-.56 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.53-1.33-1.29-1.69-1.29-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.04 1.77 2.74 1.26 3.41.96.11-.76.41-1.26.74-1.55-2.55-.29-5.23-1.28-5.23-5.71 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.74.81 1.19 1.84 1.19 3.1 0 4.44-2.69 5.41-5.25 5.69.42.36.79 1.08.79 2.18 0 1.58-.02 2.85-.02 3.24 0 .31.21.68.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"/>
              </svg>
            </GitHubLink>
          ))}
        </SocialLinks>
      </Container>
    </ContactSection>
  );
};

export default Contact;
