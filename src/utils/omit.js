export default function omit(obj, omitted) {
  return Object.keys(obj).reduce((result, key) => {
    if (Array.isArray(omitted)) {
      if (!omitted.includes(key)) {
        result[key] = obj[key];
      }
    } else {
      if (key !== omitted) {
        result[key] = obj[key];
      }
    }
    return result;
  }, {});
}
