import { useSelector } from 'react-redux';
import { selectThemeState } from '../../features/themeSlice';

const ThemeWrapper = ({ children }) => {
  const { isDark } = useSelector(selectThemeState);

  return <div className={`${isDark ? 'dark' : 'light'}`}>{children}</div>;
};

export default ThemeWrapper;
