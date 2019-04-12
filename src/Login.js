import { useEffect } from 'react';
import useAuth0 from './useAuth0';

export default function Login(props = {}) {
  const { login } = useAuth0();
  useEffect(() => {
    login(props);
  }, []);

  return null;
}
