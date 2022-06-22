import React from 'react';
import SearchBar from './SearchBar';
import FilterByRegion from './FilterByRegion';

const Control = () => {
  return (
    <div className="flex justify-between mt-5 mb-10">
      <SearchBar />
      <FilterByRegion />
    </div>
  );
};

export default Control;
