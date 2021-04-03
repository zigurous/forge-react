import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Input from './Input';
import debounce from '../utils/debounce';
import { enterKeyHandler } from '../utils/eventHandlers';

const SearchInput = ({
  className,
  placeholder,
  onChange = () => {},
  onSearch = () => {},
  ...props
}) => {
  const debounced = debounce((query) => onSearch(query), 500);
  const handleChange = (event) => {
    const value = event.target.value;
    onChange(event);
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
  onChange: PropTypes.func,
  onSearch: PropTypes.func,
  placeholder: PropTypes.string,
};

export default SearchInput;
