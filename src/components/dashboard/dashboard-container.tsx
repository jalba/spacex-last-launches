import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { gql, useQuery } from '@apollo/client';
import styled from 'styled-components';
import { useNavigate } from '@reach/router';

import CenteredContainer from '../common/centered-container';
import ManagedState from '../common/managed-state';
import Dashboard from './dashboard';

import { LaunchesData } from './types';

interface DashboardContainerProps extends RouteComponentProps {}

const GET_LAUNCHES = gql`
  {
    launchesPast(limit: 10) {
      mission_name
      launch_date_unix
      details
      id
    }
  }
`;

const Container = styled(CenteredContainer)`
  width: 50%;
`;

const DashboardContainer: React.FC<DashboardContainerProps> = () => {
  const { loading, error, data } = useQuery<LaunchesData>(GET_LAUNCHES);
  const navigate = useNavigate();
  const onNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <Container>
      <ManagedState loading={loading} error={error}>
        <Dashboard data={data} onNavigate={onNavigate} />
      </ManagedState>
    </Container>
  );
};

export default DashboardContainer;
