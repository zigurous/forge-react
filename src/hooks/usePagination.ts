import { useEffect, useState } from 'react';

export type PaginationState<T> = {
  currentPage: number;
  pageCount: number;
  paginated: boolean;
  itemsPerPage: number;
  items: T[];
};

export function usePagination<T>(
  items: T[],
  itemsPerPage = 6,
  storageKey?: string,
): [PaginationState<T>, React.Dispatch<React.SetStateAction<number>>] {
  const [currentPage, setCurrentPage] = useState(1);
  const pageCount = Math.ceil(items.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  useEffect(() => {
    if (storageKey && typeof sessionStorage !== 'undefined') {
      const storedValue = sessionStorage.getItem(storageKey);
      const storedPageNumber = storedValue ? parseInt(storedValue, 10) : NaN;
      if (!Number.isNaN(storedPageNumber)) {
        setCurrentPage(storedPageNumber);
      }
      sessionStorage.removeItem(storageKey);
    }
  }, [storageKey, items]);

  const state: PaginationState<T> = {
    currentPage,
    pageCount,
    paginated: pageCount > 1,
    itemsPerPage,
    items: items.slice(startIndex, endIndex),
  };

  return [state, setCurrentPage];
}
