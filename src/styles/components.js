import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

// Container that maintains consistent width and padding
export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

// Flex container with common flex properties
export const Flex = styled.div`
  display: flex;
  ${({ direction }) => direction && `flex-direction: ${direction}`};
  ${({ justify }) => justify && `justify-content: ${justify}`};
  ${({ align }) => align && `align-items: ${align}`};
  ${({ gap }) => gap && `gap: ${gap}rem`};
  ${({ wrap }) => wrap && `flex-wrap: ${wrap}`};
`;

// Grid container with auto-fit columns
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(${({ minWidth }) => minWidth || '250px'}, 1fr));
  gap: ${({ gap }) => gap || '1rem'};
  width: 100%;
`;

// Card component with consistent styling
export const Card = styled(motion.div)`
  background: ${({ theme }) => theme.cardBg};
  border-radius: 12px;
  padding: ${({ padding }) => padding || '1.5rem'};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
  }
`;

// Button with different variants
export const Button = styled.button`
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  border: none;
  font-weight: 500;
  cursor: pointer;
  transition: transform 0.2s ease, background 0.2s ease;

  ${({ variant }) => {
    switch (variant) {
      case 'primary':
        return css`
          background: ${({ theme }) => theme.gradient};
          color: white;
          
          &:hover {
            transform: translateY(-2px);
          }
        `;
      case 'secondary':
        return css`
          background: ${({ theme }) => theme.cardBg};
          color: ${({ theme }) => theme.text};
          border: 2px solid ${({ theme }) => theme.primary};
          
          &:hover {
            background: ${({ theme }) => theme.primary};
            color: white;
          }
        `;
      case 'ghost':
        return css`
          background: transparent;
          color: ${({ theme }) => theme.text};
          padding: 0.5rem;
          
          &:hover {
            background: ${({ theme }) => theme.hover};
            border-radius: 4px;
          }
        `;
      default:
        return '';
    }
  }}
`;

// Section with consistent spacing
export const Section = styled.section`
  padding: 6rem 0;
  min-height: ${({ fullHeight }) => fullHeight ? '100vh' : 'auto'};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

// Gradient text
export const GradientText = styled.span`
  background: ${({ theme }) => theme.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
`;

// Responsive image
export const Image = styled.img`
  width: 100%;
  height: ${({ height }) => height || 'auto'};
  object-fit: ${({ fit }) => fit || 'cover'};
  border-radius: ${({ rounded }) => rounded ? '12px' : '0'};
`;

// Typography
export const Title = styled.h1`
  font-size: ${({ size }) => {
    switch (size) {
      case 'lg':
        return '3rem';
      case 'md':
        return '2.5rem';
      case 'sm':
        return '2rem';
      default:
        return '2.5rem';
    }
  }};
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1rem;
  color: ${({ theme, gradient }) => gradient ? 'transparent' : theme.text};
  background: ${({ theme, gradient }) => gradient ? theme.gradient : 'none'};
  -webkit-background-clip: ${({ gradient }) => gradient ? 'text' : 'none'};
  -webkit-text-fill-color: ${({ gradient }) => gradient ? 'transparent' : 'inherit'};

  @media (max-width: 768px) {
    font-size: ${({ size }) => {
      switch (size) {
        case 'lg':
          return '2.5rem';
        case 'md':
          return '2rem';
        case 'sm':
          return '1.75rem';
        default:
          return '2rem';
      }
    }};
  }
`;

// Badge/Tag component
export const Badge = styled.span`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
  background: ${({ theme }) => theme.tagBg};
  color: ${({ theme }) => theme.tagText};
`;