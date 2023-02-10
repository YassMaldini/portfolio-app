export function rgbaToHex(rgba: string) {
  const parts = rgba.match(
    /^rgba?\((\d+),\s*(\d+),\s*(\d+),?\s*(\d+(?:\.\d+)?|\.\d+)?\)$/
  ) as RegExpMatchArray;
  const r = parseInt(parts[1], 10).toString(16).padStart(2, '0');
  const g = parseInt(parts[2], 10).toString(16).padStart(2, '0');
  const b = parseInt(parts[3], 10).toString(16).padStart(2, '0');

  return '#' + r + g + b;
}
