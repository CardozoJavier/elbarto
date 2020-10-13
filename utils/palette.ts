const shared = {
  gray: {
    g0: '#FBFBFD',
    g1: '#EFF0F5',
    g07: '#C5C3C3',
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
