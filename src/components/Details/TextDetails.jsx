/* eslint-disable indent */
import { useSelector } from 'react-redux';
import BorderButtons from './BorderButtons';
import { selectAllCountriesState } from '../../features/countriesSlice';

const TextDetails = ({ country }) => {
  const { detailOnBorders } = useSelector(selectAllCountriesState);

  const {
    name,
    population,
    region,
    subregion,
    capital,
    tld,
    currencies,
    languages,
  } = country;

  const currList = currencies
    ? Object.values(currencies).map((curr) => curr.name)
    : '(not available)';

  const langList = languages
    ? Object.entries(languages).map(([k]) => languages[k])
    : '(not available)';

  const tldList = tld ? Object.entries(tld).map(([k]) => tld[k]) : '(not available)';

  const convertToString = (data) => {
    return data.toString().replaceAll(',', ', ');
  };

  return (
    <div className="p-4 text-VeryDarkBlueTXT dark:text-whiteTXT">
      <h1 className="font-extrabold text-2xl">{name.common}</h1>
      <div className="leading-7 grid grid-cols-1 lg:grid-cols-2 mt-2 gap-4">
        <div className="font-semibold">
          <ul>
            <li>
              Native Name: <span className="font-normal">{name.official}</span>
            </li>
            <li>
              Population: <span className="font-normal">{population.toLocaleString('en-US')}</span>
            </li>
            <li>
              Region: <span className="font-normal">{region}</span>
            </li>
            <li>
              Sub Region: <span className="font-normal">{subregion || '(not available)'}</span>
            </li>
          </ul>
        </div>
        <div className="font-semibold">
          <ul>
            <li>
              Capital: <span className="font-normal">{capital || '(not available)'}</span>
            </li>
            <li>
              Top Level domain: <span className="font-normal">{convertToString(tldList)}</span>
            </li>
            <li>
              Currencies: <span className="font-normal">{convertToString(currList)}</span>
            </li>
            <li>
              Languages: <span className="font-normal">{convertToString(langList)}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-4">
        Border Countries:&nbsp; <BorderButtons countryBorders={detailOnBorders} />
      </div>
    </div>
  );
};

export default TextDetails;
