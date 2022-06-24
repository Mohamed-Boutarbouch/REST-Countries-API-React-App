import { useLocation } from 'react-router-dom';
import Details from '../components/Details/Details';
import BackButton from '../components/UI/BackButton';

const CountryDetailsPage = () => {
  const location = useLocation();
  const { country } = location.state;

  // console.log(country);
  return (
    <>
      <BackButton />
      <Details country={country} />
    </>
  );
};

export default CountryDetailsPage;
