import React, { useState } from 'react';
import { instanceOf } from 'prop-types';
import WebClient from './WebClient';
import Context from './Context';

export default function Auth0Provider(props) {
  const { client } = props;

  const [authenticated, setAuthenticated] = useState(client.isAuthenticated());
  const [error, setError] = useState();
  const [authenticating, setAuthenticating] = useState(false);

  function logout(logoutProps) {
    setAuthenticated(false);
    client.logout(logoutProps);
  }

  async function authenticate() {
    try {
      setError(undefined);
      setAuthenticating(true);
      await client.authenticate();
      setAuthenticated(client.isAuthenticated());
    } catch (err) {
      setError(err);
    } finally {
      setAuthenticating(false);
    }
  }

  return (
    <Context.Provider
      value={{
        login: client.login,
        logout,
        authenticate,
        authenticated,
        authenticating,
        error,
      }}
      {...props}
    />
  );
}

Auth0Provider.propTypes = {
  client: instanceOf(WebClient).isRequired,
};
