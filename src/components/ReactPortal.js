import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const ReactPortal = ({ children, rootElement = '#root' }) => {
  if (typeof document !== 'undefined') {
    const parent = document.querySelector(rootElement) || document.body;
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
