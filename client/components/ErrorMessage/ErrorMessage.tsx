import React from "react";
import styled from "@emotion/styled";
import { ErrorResponse } from "apollo-link-error";

const ErrorMessage = styled.div`
  padding: 1rem;
  margin-bottom: 1.5rem;
  font-size: 0.875rem;
  color: ${p => p.theme.colors.error};
  text-align: center;
  background-color: ${p => p.theme.colors.errorBg};
`;

interface Props {
  error?: {} | ErrorResponse;
}

const DisplayError: React.FunctionComponent<Props> = ({ error }) => {
  if (!error || !error.message) return null;
  if (
    error.networkError &&
    error.networkError.result &&
    error.networkError.result.errors.length
  ) {
    return error.networkError.result.errors.map((error, i: number) => (
      <ErrorMessage key={i}>
        <p>
          <strong>Error</strong> {error.message.replace("GraphQL error: ", "")}
        </p>
      </ErrorMessage>
    ));
  }
  return (
    <ErrorMessage>
      <p>
        <strong>Error!</strong> {error.message.replace("GraphQL error: ", "")}
      </p>
    </ErrorMessage>
  );
};

ErrorMessage.displayName = "ErrorMessage";
DisplayError.defaultProps = {
  error: {}
};

export default DisplayError;
