/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-undef */
import { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectAllCountriesState, getBorderDetails } from '../../features/countriesSlice';
import { selectThemeState } from '../../features/themeSlice';
import { LoadingLightTheme, LoadingDarkTheme } from '../UI/Icons';

const Countries = () => {
  const { filterByRegion, searchInput, loading } = useSelector(selectAllCountriesState);
  const { isDark } = useSelector(selectThemeState);
  const dispatch = useDispatch();

  const filteredCountries = filterByRegion.filter((country) => {
    return Object.values(country.name.common)
      .join('')
      .toLowerCase()
      .includes(searchInput.toLowerCase());
  });

  if (loading) {
    return isDark ? <LoadingDarkTheme /> : <LoadingLightTheme />;
  }

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-10">
      {filteredCountries.map((country) => {
        const { cca3, name, flags, population, region, capital, borders } = country;
        return (
          <div
            key={cca3}
            className="bg-whiteTXT rounded overflow-hidden shadow-md min-h-80 dark:bg-darkBlue dark:text-whiteTXT transition-all"
          >
            <Link to={`/country/${cca3}`} state={{ country }}>
              <img
                src={flags.png}
                alt={name.common}
                className="w-full h-40 object-cover hover:cursor-pointer"
                onClick={() => dispatch(getBorderDetails(borders))}
              />
            </Link>
            <div className="m-4">
              <h2 className="font-extrabold text-xl leading-5 mb-2">{name.common}</h2>
              <h4 className="text-sm leading-7">
                <span className="font-semibold">Population: </span>
                {population.toLocaleString('en-US')}
              </h4>
              <h4 className="text-sm leading-7">
                <span className="font-semibold">Region: </span>
                {region}
              </h4>
              <h4 className="text-sm leading-7">
                <span className="font-semibold">Capital: </span>
                {capital}
              </h4>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default memo(Countries);
