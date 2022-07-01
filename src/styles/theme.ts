export const theme = {
  border: {
    radius: {
      small: '2rem',
      medium: '3rem',
      large: '4rem',
      round: '50%'
    }
  },
  font: {
    family: {
      montserrat:
        "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
    },
    weight: {
      light: 300,
      regular: 400,
      medium: 500,
      semiBold: 600,
      bold: 700
    },
    sizes: {
      exxsmall: '1.1rem',
      xxsmall: '1.2rem',
      xsmall: '1.4rem',
      small: '1.6rem',
      medium: '1.8rem',
      xmedium: '2.0rem',
      xxmedium: '1.8rem',
      large: '2.4rem',
      huge: '3.2rem',
      giant: '9.4rem'
    }
  },
  boxShadow: {
    header: '0px 11px 23px rgba(52, 48, 144, 0.06)',
    thumb: '0px 5px 20px rgba(173, 172, 172, 0.2)',
    input: '0px 5px 10px rgba(173, 172, 172, 0.3)'
  },
  spacing: {
    xxsmall: '0.2rem',
    xsmall: '0.5rem',
    small: '0.8rem',
    medium: '1.6rem',
    large: '2.4rem',
    xlarge: '3.2rem',
    xxlarge: '4.8rem',
    huge: '6.4rem'
  },
  colors: {
    primary: '#343090',
    oceanBlue: '#4e47c2',
    violetBlue: '#7a75d1',
    babyVioletBlue: '#a7a3e0',
    maximumBlue: '#b5b3e6',
    white: '#ffffff',
    black: '#2e384d',
    gray: '#706F7C',
    secondaryGray: '#ababab',
    lightGray: '#FBFBFE',
    grayFade: '#b4b3b9',
    yellow: '#FFD600',
    success: '#00C851',
    warning: '#FF9800',
    error: '#FF5252',
    gradients: {
      bgNotFoundPage:
        'linear-gradient(180.48deg, #4E47C2 20.56%, #343090 99.59%);',
      button: 'linear-gradient(90deg, #4E47C2 0%, #7EBCDF 115.38%);'
    }
  }
};

export type AppTheme = typeof theme;
