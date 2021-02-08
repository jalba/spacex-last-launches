import React from "react";
import { Router, Redirect } from "@reach/router";
import styled from "styled-components";

import Dashboard from "../dashboard";
import Launch from "../launch";

const App = ({ className }: { className?: string }) => {
  return (
    <Router className={className}>
      <Dashboard path="dashboard" />
      <Launch path="launch/:launchId" />
      <Redirect noThrow from="/" to="dashboard" />
    </Router>
  );
};

const StyledApp = styled(App)`
  text-align: center;
  height: inherit;
  width: inherit;
`;

export default StyledApp;
