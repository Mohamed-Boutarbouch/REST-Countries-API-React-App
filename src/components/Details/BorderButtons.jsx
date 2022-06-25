/* eslint-disable indent */
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getBorderDetails } from '../../features/countriesSlice';

const BorderButtons = ({ countryBorders }) => {
  const dispatch = useDispatch();
  return countryBorders
    ? countryBorders.map((country) => {
        const { name, cca3, borders } = country;
        return (
          <Link to={`/country/${cca3}`} state={{ country }}>
            <button
              key={cca3}
              type="button"
              className="py-2 px-8 rounded text-VeryDarkBlueTXT dark:text-whiteTXT shadow-md bg-whiteTXT dark:bg-darkBlue"
              onClick={() => dispatch(getBorderDetails(borders))}
            >
              {name.common}
            </button>
          </Link>
        );
      })
    : '';
};

export default BorderButtons;
