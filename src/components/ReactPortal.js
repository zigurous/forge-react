import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

const ReactPortal = ({ children, rootElement = '#root' }) => {
  const [parent] = useState(
    typeof document !== 'undefined' ? document.createElement('div') : null
  );

  const root =
    typeof document !== 'undefined'
      ? document.querySelector(rootElement)
      : null;

  useEffect(() => {
    if (root && parent) {
      root.appendChild(parent);
    }
    return () => {
      if (root && parent) {
        root.removeChild(parent);
      }
    };
  }, [parent, root]);

  if (parent) {
    return ReactDOM.createPortal(children, parent);
  } else {
    return null;
  }
};

ReactPortal.propTypes = {
  children: PropTypes.node.isRequired,
  rootElement: PropTypes.string,
};

export default ReactPortal;
