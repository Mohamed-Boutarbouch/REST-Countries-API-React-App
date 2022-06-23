import React from 'react';
import Flag from './Flag';
import TextDetails from './TextDetails';

const Details = ({ country }) => {
  return (
    <div className="my-16 grid grid-cols-1 gap-10 md:grid-cols-2">
      <Flag flag={country.flags.svg} />
      <TextDetails country={country} />
    </div>
  );
};

export default Details;
