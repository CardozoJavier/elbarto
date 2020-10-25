import palette from './palette';

const getTheme = (theme: string): {} => (palette[theme]);

export default getTheme;

