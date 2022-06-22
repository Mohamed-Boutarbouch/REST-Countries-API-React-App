import React from 'react';
import { useLocation } from 'react-router-dom';

const CountryDetailsPage = () => {
  const location = useLocation();
  const { country } = location.state;

  console.log(country);
  return <div className="mt-40">gg</div>;
};

export default CountryDetailsPage;
