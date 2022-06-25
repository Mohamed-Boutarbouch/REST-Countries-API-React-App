import { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllCountriesState, filterRegion } from '../../features/countriesSlice';

import { ChevronUp } from '../UI/Icons';

const filterByRegion = () => {
  const [isOpen, setIsOpen] = useState(false);
  const btnRef = useRef();

  useEffect(() => {
    const closeDropdown = (e) => {
      if (e.path[0] !== btnRef.current) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', closeDropdown);

    return () => {
      document.body.removeEventListener('click', closeDropdown);
    };
  }, []);

  const toggleFiltersHandler = () => {
    setIsOpen((prev) => !prev);
  };

  const showFiltersMenu = isOpen ? '' : 'hidden';

  const dispatch = useDispatch();

  const { allRegions } = useSelector(selectAllCountriesState);

  return (
    <div className="sm:justify-self-end">
      <button
        ref={btnRef}
        type="button"
        className="bg-whiteTXT dark:bg-darkBlue dark:text-whiteTXT shadow-md px-4 py-2 rounded flex gap-3 h-12 pt-3"
        onClick={toggleFiltersHandler}
      >
        Filter by Region
        <ChevronUp isOpen={isOpen} />
      </button>
      <div
        className={`bg-whiteTXT shadow-md dark:bg-darkBlue dark:text-whiteTXT flex flex-col rounded mt-1 p-2 text-sm w-44 absolute ${showFiltersMenu}`}
      >
        {allRegions.map((region) => {
          return (
            <button
              key={region}
              type="button"
              className="px-2 py-1 hover:bg-veryLightGray text-left pl-6 dark:hover:bg-veryDarkBlueBG rounded"
              onClick={() => dispatch(filterRegion(region))}
            >
              {region}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default filterByRegion;
