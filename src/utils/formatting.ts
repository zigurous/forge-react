export function toTitleCase(title: string): string {
  return title.replace(/(?<!')\b(?!')\w/g, l => l.toUpperCase());
}
