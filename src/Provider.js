import React, { useState } from 'react';
import { instanceOf } from 'prop-types';
import WebClient from './WebClient';
import Context from './Context';

export default function Auth0Provider(props) {
  const { client } = props;

  const [authenticated, setAuthenticated] = useState(client.isAuthenticated());
  const [error, setError] = useState();

  function logout() {
    setAuthenticated(false);
    client.logout();
  }

  async function authenticate() {
    try {
      setError(undefined);
      await client.authenticate();
      setAuthenticated(client.isAuthenticated());
    } catch (err) {
      setError(err);
    }
  }

  return (
    <Context.Provider
      value={{
        login: client.login,
        logout,
        authenticate,
        authenticated,
        error,
      }}
      {...props}
    />
  );
}

Auth0Provider.propTypes = {
  client: instanceOf(WebClient).isRequired,
};
