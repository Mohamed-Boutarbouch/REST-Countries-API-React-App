import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import CountryDetailsPage from './pages/CountryDetailsPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/details" element={<CountryDetailsPage />} />
    </Routes>
  );
};

export default App;
