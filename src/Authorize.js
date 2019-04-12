import { useEffect } from 'react';
import { func } from 'prop-types';
import useAuth0 from './useAuth0';

export default function Authorize(props = {}) {
  const {
    authenticate,
    authenticated,
    authenticating,
    error,
  } = useAuth0();

  useEffect(() => {
    authenticate();
  }, []);

  return props.children({
    authenticating,
    authenticated,
    error,
  });
}

Authorize.propTypes = {
  children: func,
};

Authorize.defaultProps = {
  children() {},
};
