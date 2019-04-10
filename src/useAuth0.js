import { useContext } from 'react';
import Context from './Context';

export default function useAuth0() {
  return useContext(Context);
}
