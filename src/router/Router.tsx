import { Route, Routes } from 'react-router-dom'
import MainPage from '../pages/MainPage';
import Mathematics from '../pages/Mathematics';
import Safety from '../pages/Safety';
import Guides from '../pages/Guides';
import MassivePage from '../pages/MassivePage';
import LeapYearChecker from '../pages/LeapYearChecker';
import WEBbeeshop from '../components/webbeeshop/weebbeeshop';

const Router = () => {
  return (
    <Routes>
      <Route path="/" index element={<MainPage />} />
      <Route path="/mathematics" element={<Mathematics />} />
      <Route path="/safety" element={<Safety />} />
      <Route path="/guides" element={<Guides />} />
      <Route path="mass" index element={<MassivePage />} />
      <Route path="year" index element={<LeapYearChecker />} />
      <Route path="web" index element={<WEBbeeshop />} />
    </Routes>
  );
};

export default Router;
