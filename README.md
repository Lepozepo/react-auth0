# React Auth0
## How to use

```
import { Provider, WebClient } from 'react-auth0rize';

export const client = new WebClient({
  domain,
  clientID,
});

function Routes() {
  const { login } = useAuth0();

  login();
  return null;
}

export default function App() {
  return (
    <Provider client={client}>
      <Routes />
    </Provider>
  );
}
```

