import { func } from 'prop-types';
import useAuthorize from './useAuthorize';

export default function Authorize(props = {}) {
  const [{
    authenticated,
    error,
  }, authenticating] = useAuthorize();

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
