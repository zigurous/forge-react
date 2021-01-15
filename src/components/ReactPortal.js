import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const ReactPortal = ({ children, rootElement = '#root' }) => {
  const parent = document.querySelector(rootElement) || document.body;
  return ReactDOM.createPortal(children, parent);
};

ReactPortal.propTypes = {
  children: PropTypes.node.isRequired,
  rootElement: PropTypes.string.isRequired,
};

export default ReactPortal;
