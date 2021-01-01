const useDocumentTitle = (
  currentPath,
  matchPath = () => null,
  routes = [],
  defaultTitle
) => {
  for (let i = 0; i < routes.length; i += 1) {
    const route = routes[i];

    if (matchPath(currentPath, route) !== null && route.documentTitle) {
      document.title = route.documentTitle;
      return true;
    }
  }

  if (defaultTitle) {
    document.title = defaultTitle;
  }

  return false;
};

export default useDocumentTitle;
