import Shevy from 'shevyjs';
import _ from 'lodash';

const BRAND = '#4CAAD8';
const ACCENT1 = '#E0629A';
const ACCENT2 = '#FFBA49';
const ACCENT3 = '#FDE74C';
const ACCENT4 = '#89D085';
const ACCENT5 = '#EA5B3A';
const LEVELS = [1, 2, 3, 4, 5, 6];
const SIZES = ['small', 'medium', 'large', 'xlarge'];
const typography = {
  small: new Shevy({ baseFontSize: '14px' }),
  medium: new Shevy({ baseFontSize: '16px' }),
  large: new Shevy({ baseFontSize: '18px' }),
  xlarge: new Shevy({ baseFontSize: '20px' }),
};

const theme = {
  global: {
    colors: {
      brand: BRAND,
      'accent-1': ACCENT1,
      'accent-2': ACCENT2,
      'accent-3': ACCENT3,
      'accent-4': ACCENT4,
      'accent-5': ACCENT5,
    },
    font: {
      family: "'Quicksand', sans-serif",
    },
  },
  heading: {
    extend: {
      color: ACCENT1,
      'margin-top': 0,
    },
    font: {
      family: "'Indie Flower', cursive",
    },
  },
};

LEVELS.forEach(level => {
  _.set(theme, `heading.level[${level}].font`, {});

  SIZES.forEach(size => {
    const { fontSize, lineHeight } = typography[size][`h${level}`];

    _.set(theme, `heading.level[${level}][${size}]`, {
      size: fontSize,
      height: lineHeight,
    });
  });
});

export default theme;
