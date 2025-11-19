import styled from 'styled-components';

const TextWrapper = styled.span`
  display: inline-block;
  width: 100%;
`;

const TextTransition = ({ children }) => {
  return <TextWrapper>{children}</TextWrapper>;
};

export default TextTransition;