import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

function ReactPortal({ children, rootElement = '#root' }) {
  const root =
    typeof document !== 'undefined'
      ? document.querySelector(rootElement)
      : null;

  if (root) {
    return ReactDOM.createPortal(children, root);
  } else {
    return null;
  }
}

ReactPortal.propTypes = {
  children: PropTypes.node.isRequired,
  rootElement: PropTypes.string,
};

export default ReactPortal;
