/* eslint-disable indent */
import { Link } from 'react-router-dom';

const BorderButtons = ({ countryBorders }) => {
  return countryBorders
    ? countryBorders.map((country) => {
        const { name, cca3 } = country;
        return (
          <Link to={`/country/${cca3}`} state={{ country }}>
            <button
              key={cca3}
              type="button"
              className="py-2 px-8 rounded text-VeryDarkBlueTXT dark:text-whiteTXT shadow-md bg-whiteTXT dark:bg-darkBlue"
            >
              {name.common}
            </button>
          </Link>
        );
      })
    : '';
};

export default BorderButtons;
