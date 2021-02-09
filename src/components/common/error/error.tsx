import React from 'react';
import styled from 'styled-components';
import { Alert, AlertTitle } from '@material-ui/lab';

const ErrorContainer = styled.div`
  margin-top: 36vh;
`;

const StyledTitle = styled(AlertTitle)`
  text-align: left;
`;

const Error: React.FC = () => (
  <ErrorContainer>
    <Alert severity="error">
      <StyledTitle>Error</StyledTitle>
      <strong>Something has gone wrong</strong> - please try again later
    </Alert>
  </ErrorContainer>
);

export default Error;
