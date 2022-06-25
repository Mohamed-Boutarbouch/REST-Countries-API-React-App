import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Error from './pages/ErrorPage';
import CountryDetailsPage from './pages/CountryDetailsPage';
import Navbar from './components/UI/Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/country/:countryId" element={<CountryDetailsPage />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </>
  );
};

export default App;
