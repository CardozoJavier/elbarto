const windowExists = () => {
  const existsWindow = typeof window === 'object'
    && window !== undefined
    && window !== null
    && Object.keys(window).length > 0;

  return existsWindow;
};

export default windowExists();
