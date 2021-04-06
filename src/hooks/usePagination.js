import { useEffect, useState } from 'react';

export default function usePagination(
  items,
  itemsPerPage = 6,
  storageKey = undefined
) {
  const [page, setPage] = useState(0);
  const startIndex = page * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const totalPages = Math.ceil(items.length / itemsPerPage);

  useEffect(() => {
    if (storageKey && sessionStorage) {
      const storedValue = sessionStorage.getItem(storageKey);
      const storedPageNumber = parseInt(storedValue, 10);

      if (!Number.isNaN(storedPageNumber)) {
        setPage(storedPageNumber);
      }

      sessionStorage.removeItem(storageKey);
    }
  }, [storageKey, items]);

  const state = {
    page,
    paginated: totalPages > 1,
    currentPage: page,
    totalPages,
    itemsPerPage,
    items: items.slice(startIndex, endIndex),
  };

  return [state, setPage];
}
