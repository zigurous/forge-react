const symbols = /[\r\n%#()<>?[\\\]^`{|}]/g;

function encode(svg, charset = 'charset=UTF-8') {
  let data = svg;

  if (data.indexOf(`http://www.w3.org/2000/svg`) < 0) {
    data = data.replace(/<svg/g, `<svg xmlns='http://www.w3.org/2000/svg'`);
  }

  data = data.replace(/"/g, `'`);
  data = data.replace(/>\s{1,}</g, `><`);
  data = data.replace(/\s{2,}/g, ` `);

  const uri = data.replace(symbols, encodeURIComponent);
  return `data:image/svg+xml;${charset},${uri}`;
}

module.exports = encode;
