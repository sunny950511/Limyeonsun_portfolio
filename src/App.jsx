import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MuseumOfKorea from './pages/MuseumOfKorea';
import Mellobe from './pages/Mellobe';
import AiDashboard from './pages/AiDashboard';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="portfolio-app">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/museum" element={<MuseumOfKorea />} />
        <Route path="/project/mellobe" element={<Mellobe />} />
        <Route path="/project/dashboard" element={<AiDashboard />} />
      </Routes>
    </div>
  );
}

export default App;
