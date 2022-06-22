/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-undef */
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectAllCountriesState } from '../../features/countriesSlice';

const Countries = () => {
  const { countries } = useSelector(selectAllCountriesState);

  return (
    <section className="grid grid-cols-4 gap-10">
      {countries.map((country) => {
        const { cca3, name, flags, population, region, capital, borders } = country;
        return (
          <div
            key={cca3}
            className="bg-whiteTXT rounded overflow-hidden shadow-md min-h-80 dark:bg-darkBlue dark:text-whiteTXT transition-all"
          >
            <Link to={`/${cca3}`} state={{ country }}>
              <img
                src={flags.png}
                alt={name.common}
                className="w-full h-40 object-cover hover:cursor-pointer"
                // onClick={() => {
                //   navigate(`/details/${cca3}`, { state: { id: cca3 } });
                // }}
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

export default Countries;
