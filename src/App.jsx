import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import CountryDetailsPage from './pages/CountryDetailsPage';
import Navbar from './components/UI/Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:countryId" element={<CountryDetailsPage />} />
      </Routes>
    </>
  );
};

export default App;
