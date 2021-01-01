import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Input from './Input';
import debounce from '../utils/debounce';
import { enterKeyHandler } from '../utils/eventHandlers';

const SearchInput = ({
  className,
  placeholder,
  onSearch = () => {},
  ...props
}) => {
  const debounced = debounce((query) => onSearch(query), 500);
  const handleChange = (event) => {
    const value = event.target.value;
    debounced(value);
  };
  return (
    <Input
      aria-label="Search"
      className={classNames('search-input', className)}
      icon="search"
      onChange={handleChange}
      onKeyDown={enterKeyHandler((event) => event.target.blur())}
      placeholder={placeholder || 'Search'}
      {...props}
    />
  );
};

SearchInput.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  onSearch: PropTypes.func,
};

export default SearchInput;
