import React from 'react';
import { Search } from '../UI/Icons';

const SearchBar = () => {
  return (
    <section className="bg-whiteTXT text-VeryDarkBlueTXT dark:text-whiteTXT dark:bg-darkBlue flex items-center justify-start p-2 pl-5 gap-4 rounded w-2/4 h-12">
      <Search />
      <input type="text" className="dark:bg-darkBlue w-full outline-none" placeholder="Search for a country..." />
    </section>
  );
};

export default SearchBar;
