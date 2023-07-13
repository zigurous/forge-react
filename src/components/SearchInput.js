import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useCallback } from 'react';
import Input from './Input';
import { debounce, enterKeyHandler } from '../utils';

function SearchInput({
  className,
  debounceRate = 500,
  disabled,
  onChange = () => {},
  onSearch = () => {},
  placeholder,
  ...props
}) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounced = useCallback(
    debounce((query) => onSearch(query), debounceRate),
    [debounceRate, onSearch]
  );

  const handleChange = (event) => {
    const value = event.target.value;
    onChange(event);
    debounced(value);
  };

  return (
    <Input
      aria-label="Search"
      className={classNames('search-input', className)}
      disabled={disabled}
      icon="search"
      iconAlignment="left"
      onChange={handleChange}
      onKeyDown={enterKeyHandler((event) => event.target.blur())}
      placeholder={placeholder || 'Search'}
      {...props}
    />
  );
}

SearchInput.propTypes = {
  className: PropTypes.string,
  debounceRate: PropTypes.number,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  onSearch: PropTypes.func,
  placeholder: PropTypes.string,
};

export default SearchInput;
