import React from "react";
import { CircularProgress } from "@material-ui/core";
import styled from "styled-components";

const IndicatorContainer = styled.div`
  margin-top: 36vh;
`;

const LoadingIndicator: React.FC<{}> = () => (
  <IndicatorContainer>
    <CircularProgress size={80} />
  </IndicatorContainer>
);

export default LoadingIndicator;
