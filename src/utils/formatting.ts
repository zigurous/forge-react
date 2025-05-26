export function toTitleCase(title: string): string {
  return title.replace(/(^\w|\s\w)/g, l => l.toUpperCase());
}
