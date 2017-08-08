'use strict';

const path = require('path');

module.exports = {
 context: {
  borders: require(path.join(process.cwd(), 'fractal/src/docs/tokens/borders.json')),
  breakpoints: require(path.join(process.cwd(), 'fractal/src/docs/tokens/breakpoints.json')),
  colors: require(path.join(process.cwd(), 'fractal/src/docs/tokens/colors.json')),
  fonts: require(path.join(process.cwd(), 'fractal/src/docs/tokens/fonts.json')),
  layers: require(path.join(process.cwd(), 'fractal/src/docs/tokens/layers.json')),
  containers: require(path.join(process.cwd(), 'fractal/src/docs/tokens/containers.json')),
  // spaces: require(path.join(process.cwd(), 'fractal/docs/tokens/spaces.json'))
 }
};