import React from 'react';
import BorderButtons from './BorderButtons';

const TextDetails = ({ country }) => {
  return (
    <div className="p-4 text-VeryDarkBlueTXT dark:text-whiteTXT">
      <h1 className="font-extrabold text-2xl">{country.name.common}</h1>
      <div className="leading-7 grid grid-cols-1 lg:grid-cols-2 mt-2 gap-4">
        <div className="font-semibold">
          <ul>
            <li>
              Native Name: <span className="font-normal">{country.name.official}</span>
            </li>
            <li>
              {' '}
              Population: <span className="font-normal">{country.population}</span>
            </li>
            <li>
              {' '}
              Region: <span className="font-normal">{country.region}</span>
            </li>
            <li>
              {' '}
              Sub Region: <span className="font-normal">{country.subregion}</span>
            </li>
          </ul>
        </div>
        <div className="font-semibold">
          <ul>
            <li>
              Native Name: <span className="font-normal">{country.name.official}</span>
            </li>
            <li>
              {' '}
              Population: <span className="font-normal">{country.population}</span>
            </li>
            <li>
              {' '}
              Region: <span className="font-normal">{country.region}</span>
            </li>
            <li>
              {' '}
              Sub Region: <span className="font-normal">{country.subregion}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-4">
        Border Countries:&nbsp; <BorderButtons />
      </div>
    </div>
  );
};

export default TextDetails;
