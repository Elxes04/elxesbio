import styled, { keyframes } from 'styled-components';

const loadingAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.body};
  z-index: 9999;
`;

const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 4px solid ${({ theme }) => theme.text}20;
  border-left-color: ${({ theme }) => theme.primary};
  border-radius: 50%;
  animation: ${loadingAnimation} 1s linear infinite;
`;

const Loading = () => (
  <LoadingContainer>
    <Spinner />
  </LoadingContainer>
);

export default Loading;