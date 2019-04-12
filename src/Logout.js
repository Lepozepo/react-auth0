import { useEffect } from 'react';
import { func } from 'prop-types';
import useAuth0 from './useAuth0';

export default function Logout(props = {}) {
  const { logout } = useAuth0();
  useEffect(() => {
    logout(props);
    props.onDidLogout();
  }, []);

  return null;
}

Logout.propTypes = {
  onDidLogout: func,
};

Logout.defaultProps = {
  onDidLogout() {},
};
