import { useLocation } from 'react-router-dom';
import BackButton from '../components/UI/BackButton';

const CountryDetailsPage = () => {
  const location = useLocation();
  const { country } = location.state;

  console.log(country);
  return <BackButton />;
};

export default CountryDetailsPage;
