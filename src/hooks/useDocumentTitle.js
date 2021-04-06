export default function useDocumentTitle(
  routes = [],
  currentPath,
  matchPath = () => null
) {
  const matchedRoute = routes.find((route) => matchPath(currentPath, route));
  if (matchedRoute) {
    return matchedRoute.documentTitle;
  } else {
    return null;
  }
}
