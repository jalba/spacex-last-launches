import React from 'react';
import { CircularProgress } from '@material-ui/core';
import styled from 'styled-components';

const IndicatorContainer = styled.div`
  top: 36vh;
  position: relative;
`;

const LoadingIndicator: React.FC = () => (
  <IndicatorContainer>
    <CircularProgress size={80} title="loading" />
  </IndicatorContainer>
);

export default LoadingIndicator;
