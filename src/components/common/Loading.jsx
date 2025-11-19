import styled from 'styled-components';
import '@material/web/progress/circular-progress.js';

const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.surface};
  z-index: 9999;
  
  md-circular-progress {
    --md-circular-progress-size: 56px;
    --md-circular-progress-active-indicator-width: 6px;
    --md-circular-progress-active-indicator-color: ${({ theme }) => theme.primary};
  }
`;

const Loading = () => (
  <LoadingContainer>
    <md-circular-progress indeterminate></md-circular-progress>
  </LoadingContainer>
);

export default Loading;
