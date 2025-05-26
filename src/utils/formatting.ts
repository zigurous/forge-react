export function capitalizeFirstLetter(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function toTitleCase(title: string): string {
  return title.replace(/(^\w|\s\w)/g, l => l.toUpperCase());
}
