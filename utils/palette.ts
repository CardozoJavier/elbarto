const shared = {
  black: {
    b05: 'rgba(0, 0, 0, 0.5)',
    b08: 'rgba(0, 0, 0, 0.8)',
    b04: 'rgba(0, 0, 0, 0.4)',
  },
  white: {
    w100: '#fff',
    w08: 'rgba(255, 255, 255, 0.8)',
    w65: 'rgba(255, 255, 255, 0.65)',
  },
  orange: {
    o100: '#ce8832',
    o60: '#c63c00',
    o50: '#ed4a00',
    o40: '#FF5722',
    o30: '#ff9586',
    o10: '#ffdbd7',
  },
  gray: {
    g0: '#FBFBFD',
    g1: '#EFF0F5',
    g07: '#C5C3C3',
    g100: '#1f2021',
  },
  purple90: '#5e5e90',
};

const dark = {
  background: {
    main: '#333'
  },
  text: {
    primary: '#fff'
  },
  hightlight: {
    error: '#ff0000',
  },
  ...shared,
};

const light = {
  background: {
    main: '#fff'
  },
  text: {
    primary: '#333'
  },
  hightlight: {
    error: '#ff0000'
  },
  ...shared,
};

export default {
  dark,
  light,
};
