import React from 'react';
import { List } from '@material-ui/core';

import BoldTypography from '../common/bold-typography';
import LaunchItem from './launch-item';

import { LaunchesData } from './types';

interface DashboardProps {
  data?: LaunchesData;
  onNavigate: (path: string) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ data, onNavigate }) => {
  return (
    <React.Fragment>
      <BoldTypography variant="h4" align="left">
        Last Launches{' '}
        <span role="img" aria-label="rocket">
          🚀
        </span>
      </BoldTypography>
      <List>
        {data?.launchesPast.map(launch => (
          <LaunchItem key={launch?.id} launch={launch} onClick={onNavigate} />
        ))}
      </List>
    </React.Fragment>
  );
};

export default Dashboard;
