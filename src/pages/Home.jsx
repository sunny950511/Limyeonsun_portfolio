import React from 'react';
import MainSection from '../components/MainSection';
import AboutSection from '../components/AboutSection';
import IndexSection from '../components/IndexSection';

function Home() {
  return (
    <div className="home-page">
      <MainSection />
      <AboutSection />
      <IndexSection />
    </div>
  );
}

export default Home;
