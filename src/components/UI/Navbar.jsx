import React from 'react';
import { useDispatch } from 'react-redux';
import { changeTheme } from '../../features/themeSlice';

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <nav className="bg-whiteTXT font-extrabold dark:text-whiteTXT dark:bg-darkBlue absolute top-0 left-0 w-full flex justify-between text-2xl py-4">
      <div className="ml-20">Where in the world?</div>
      <button type="button" className="mr-20" onClick={() => dispatch(changeTheme())}>
        Dark Mode
      </button>
    </nav>
  );
};

export default Navbar;
