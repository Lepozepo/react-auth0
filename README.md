# React Auth0

[![Greenkeeper badge](https://badges.greenkeeper.io/Lepozepo/react-auth0.svg)](https://greenkeeper.io/)

## How to use

```
import { Provider, WebClient, Login, Logout, useAuthorize } from 'react-auth0rize';

export const client = new WebClient({
  domain,
  clientID,
});

function Callback() {
  const [authResult, loading] = useAuthorize();

  if (authResult.error) {
    alert(authResult.error);
    return null;
  }
  if (authResult.authenticated) return <Redirect to="/" />;
  return <Loader />;
}

export default function App() {
  return (
    <Provider client={client}>
      <Router>
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Route path="/authorize" component={Callback} />
      </Router>
    </Provider>
  );
}
```

## What's included?
### WebClient
A class that holds your client configuration. Uses auth0-js under the hood.

```
import { WebClient } from 'react-auth0rize';

export default new WebClient({
  redirectUri: '/authorize',
  responseType: 'token id_token',
  scope: 'openid',
  logoutRedirectUri: '/login',
  storageKey: 'auth',
});
```

### Context, Provider, and useAuth0
A set of helper classes and functions that provide access to the current authentication state.

```
import { Context, Provider, useAuth0, useAuthorize } from 'react-auth0rize';

<!-- They all provide -->
login,
logout,
authenticate,
authenticated,
authenticating,
error,
```

You should use useAuth0 to check whether a user is logged in, logged out, or in the process of logging in.

### Login, Logout, Authorize
A set of helper functions that use `useAuth0` under the hood to login, logout, and authorize a user.

```
import { Login, Logout, Authorize } from 'react-auth0rize';
```

