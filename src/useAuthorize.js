import { useEffect } from 'react';
import useAuth0 from './useAuth0';

export default function useAuthorize() {
  const {
    authenticate,
    authenticated,
    authenticating,
    error,
  } = useAuth0();

  useEffect(() => {
    authenticate();
  }, []);

  return [{
    authenticated,
    error,
  }, authenticating];
}
