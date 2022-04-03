export function luminance(rgb) {
  if (rgb === null) return 0;
  const a = rgb.map((v) => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

export function contrastRatio(rgb1, rgb2) {
  const luminance1 = luminance(rgb1);
  const luminance2 = luminance(rgb2);

  const darker = Math.min(luminance1, luminance2);
  const lighter = Math.max(luminance1, luminance2);

  return (lighter + 0.05) / (darker + 0.05);
}

export function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16),
      ]
    : null;
}

export function rgbToHex(rgb) {
  function componentToHex(c) {
    const hex = c.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }
  return (
    '#' +
    componentToHex(rgb[0]) +
    componentToHex(rgb[1]) +
    componentToHex(rgb[2])
  );
}
