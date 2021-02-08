import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import Dashboard from './dashboard';
import { LaunchesData } from './types';

const defaultData: LaunchesData = {
  launchesPast: [
    {
      mission_name: 'test',
      launch_date_unix: 1603553460,
      details: 'test details 1',
      id: '100'
    },
    {
      mission_name: 'test',
      launch_date_unix: 1605979020,
      details: null,
      id: '101'
    },
    {
      mission_name: 'test',
      launch_date_unix: 1605486420,
      details: 'details test 3',
      id: '102'
    }
  ]
};

describe('The Dashboard Component', () => {
  it('should render a list of launches', () => {
    render(<Dashboard data={defaultData} onNavigate={jest.fn()} />);
    const items = screen.getAllByText('test');
    expect(items.length).toEqual(3);
  });

  it('should parse unix timestamps correctly', () => {
    render(<Dashboard data={defaultData} onNavigate={jest.fn()} />);
    const date = screen.getByText('24/10/2020');
    expect(date).toBeDefined();
  });

  it('should navigate to the launch page when an item is clicked', () => {
    const navigate = jest.fn();
    render(<Dashboard data={defaultData} onNavigate={navigate} />);
    const details = screen.getByText('test details 1');
    fireEvent.click(details);
    expect(navigate).toHaveBeenCalledTimes(1);
    expect(navigate).toHaveBeenLastCalledWith('launch/100');
  });
});
