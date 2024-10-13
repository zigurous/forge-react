import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

function ReactPortal({ children, rootElement = 'body' }) {
  const [root, setRoot] = useState(null);

  useEffect(() => {
    setRoot(
      typeof document !== 'undefined'
        ? document.querySelector(rootElement)
        : null
    );
  }, [rootElement]);

  if (root) {
    return createPortal(children, root);
  } else {
    return null;
  }
}

ReactPortal.propTypes = {
  children: PropTypes.node.isRequired,
  rootElement: PropTypes.string,
};

export default ReactPortal;
