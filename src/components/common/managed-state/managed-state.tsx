import React, { ReactNode } from "react";
import { ApolloError } from "@apollo/client";

import LoadingIndicator from "../loading-indicator";
import Error from "../error";

interface ManagedStateProps {
  loading: boolean;
  error?: ApolloError;
  children: ReactNode;
}

const ManagedState: React.FC<ManagedStateProps> = ({
  loading,
  error,
  children,
}) => {
  if (loading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <Error />;
  }

  return <React.Fragment>{children}</React.Fragment>;
};

export default ManagedState;
