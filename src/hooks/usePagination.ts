import { useEffect, useState } from 'react';

export type PaginationState<T> = {
  page: number;
  paginated: boolean;
  currentPage: number;
  totalPages: number;
  itemsPerPage: number;
  items: T[];
};

export function usePagination<T>(
  items: T[],
  itemsPerPage = 6,
  storageKey?: string,
): [PaginationState<T>, React.Dispatch<React.SetStateAction<number>>] {
  const [page, setPage] = useState(0);
  const startIndex = page * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const totalPages = Math.ceil(items.length / itemsPerPage);

  useEffect(() => {
    if (storageKey && typeof sessionStorage !== 'undefined') {
      const storedValue = sessionStorage.getItem(storageKey);
      const storedPageNumber = storedValue ? parseInt(storedValue, 10) : NaN;
      if (!Number.isNaN(storedPageNumber)) {
        setPage(storedPageNumber);
      }
      sessionStorage.removeItem(storageKey);
    }
  }, [storageKey, items]);

  const state: PaginationState<T> = {
    page,
    paginated: totalPages > 1,
    currentPage: page,
    totalPages,
    itemsPerPage,
    items: items.slice(startIndex, endIndex),
  };

  return [state, setPage];
}
