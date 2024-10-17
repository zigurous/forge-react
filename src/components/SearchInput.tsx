import classNames from 'classnames';
import React, { useCallback } from 'react';
import Input, { InputProps } from './Input';
import { debounce, enterKeyHandler } from '../utils';

export type SearchInputProps = {
  className?: string;
  debounceRate?: number;
  onChange?: React.ChangeEvent<HTMLInputElement>;
  onSearch?: (query: string) => void;
} & InputProps;

export default function SearchInput({
  className,
  debounceRate = 500,
  onChange,
  onSearch,
  placeholder,
  ...rest
}: SearchInputProps) {
  const debounced = useCallback(
    debounce((query: string) => {
      if (onSearch) {
        onSearch(query);
      }
    }, debounceRate),
    [debounceRate, onSearch],
  );
  return (
    <Input
      aria-label="Search"
      className={classNames('search-input', className)}
      icon="search"
      iconAlignment="left"
      onChange={event => {
        debounced(event.target.value);
        if (onChange) {
          onChange(event);
        }
      }}
      onKeyDown={enterKeyHandler(
        (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
          e.currentTarget.blur();
        },
      )}
      placeholder={placeholder || 'Search'}
      {...rest}
    />
  );
}
