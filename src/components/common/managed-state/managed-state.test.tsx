import React from 'react';
import { render, screen } from '@testing-library/react';
import { ApolloError } from '@apollo/client';

import ManagedState from './managed-state';

describe('The ManagedState Component', () => {
  it('renders correctly a loading state', () => {
    render(
      <ManagedState loading={true}>
        <div>test</div>
      </ManagedState>
    );
    const loadingElement = screen.getByTitle('loading');
    expect(loadingElement).toBeInTheDocument();
  });

  it('renders correctly the content when there is no error and is not loading', () => {
    render(
      <ManagedState loading={false}>
        <div>test</div>
      </ManagedState>
    );
    const loadingElement = screen.getByText('test');
    expect(loadingElement).toBeInTheDocument();
  });

  it('renders the error message when there is an error present', () => {
    const error = new ApolloError({ errorMessage: 'error' });
    render(
      <ManagedState loading={false} error={error}>
        <div>test</div>
      </ManagedState>
    );
    const loadingElement = screen.getByText('Error');
    expect(loadingElement).toBeInTheDocument();
  });
});
