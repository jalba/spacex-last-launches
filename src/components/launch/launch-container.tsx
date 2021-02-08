import React from "react";
import { RouteComponentProps } from "@reach/router";
import { gql, useQuery } from "@apollo/client";
import styled from "styled-components";

import CenteredContainer from "../common/centered-container";
import ManagedState from "../common/managed-state";
import Launch from "./launch";

import { LaunchData } from "./types";

interface LaunchContainerProps extends RouteComponentProps {
  launchId?: number;
}

interface LaunchVariables {
  id?: number;
}

const GET_LAUNCH = gql`
  query GetLaunch($id: ID!) {
    launch(id: $id) {
      details
      links {
        article_link
        mission_patch_small
        video_link
        wikipedia
      }
      mission_name
    }
  }
`;

const Container = styled(CenteredContainer)`
  width: 60%;
`;

const LaunchContainer: React.FC<LaunchContainerProps> = ({ launchId }) => {
  const { error, loading, data } = useQuery<LaunchData, LaunchVariables>(
    GET_LAUNCH,
    {
      variables: { id: launchId },
    }
  );

  return (
    <Container>
      <ManagedState error={error} loading={loading}>
        <Launch data={data?.launch} />
      </ManagedState>
    </Container>
  );
};

export default LaunchContainer;
