const Svg2Js = require('svg2js');
const clipboardy = require('clipboardy');
const encode = require('./svg-url-encoder');

async function encodeLogos() {
  return new Promise((resolve, reject) => {
    const variants = ['logo', 'logomark'];
    const themes = ['dark', 'light', 'mono-black', 'mono-white'];
    const logos = { logo: {}, logomark: {} };

    let count = 0;
    variants.forEach((variant) => {
      themes.forEach((theme) => {
        Svg2Js.default
          .convert({
            source: `svg/zigurous-${variant}-${theme}.svg`,
          })
          .then((svg) => {
            logos[variant][theme] = encode(svg).replace(
              "id='Logo'",
              `id='zigurous-${variant}-${theme}'`
            );

            if (++count === variants.length * themes.length) {
              resolve(logos);
            }
          })
          .catch(reject);
      });
    });
  });
}

encodeLogos().then((logos) => {
  const result = JSON.stringify(logos);
  clipboardy.writeSync(result);
  console.log(result);
});