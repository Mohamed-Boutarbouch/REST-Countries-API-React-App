import { useRef, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Search } from '../UI/Icons';
import { searchInputHandler } from '../../features/countriesSlice';

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState('');
  const inputRef = useRef();

  const inputHandler = () => {
    setSearchInput(inputRef.current.value);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchInputHandler(searchInput));
  }, [searchInput]);

  return (
    <section className="bg-whiteTXT text-VeryDarkBlueTXT dark:text-whiteTXT dark:bg-darkBlue shadow-md flex items-center justify-start p-2 pl-5 gap-4 rounded w-2/4 h-12">
      <Search />
      <input
        ref={inputRef}
        type="text"
        className="dark:bg-darkBlue w-full outline-none"
        placeholder="Search for a country..."
        value={searchInput}
        onChange={inputHandler}
      />
    </section>
  );
};

export default SearchBar;
