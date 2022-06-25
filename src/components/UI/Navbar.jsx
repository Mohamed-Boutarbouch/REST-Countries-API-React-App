import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Moon } from './Icons';
import { changeTheme, selectThemeState } from '../../features/themeSlice';

const Navbar = () => {
  const dispatch = useDispatch();
  const { isDark } = useSelector(selectThemeState);

  return (
    <nav className="bg-whiteTXT font-extrabold dark:text-whiteTXT dark:bg-darkBlue shadow-md absolute top-0 left-0 w-full flex justify-between text-2xl py-4">
      <div className="ml-20">Where in the world?</div>
      <button
        type="button"
        className="mr-20 font-semibold flex gap-3 items-center justify-center"
        onClick={() => dispatch(changeTheme())}
      >
        <Moon theme={isDark} />
        Dark Mode
      </button>
    </nav>
  );
};

export default Navbar;
