import React from 'react';
import SearchBar from './SearchBar';
import FilterByRegion from './FilterByRegion';

const Control = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5 mb-10">
      <SearchBar />
      <FilterByRegion />
    </div>
  );
};

export default Control;
