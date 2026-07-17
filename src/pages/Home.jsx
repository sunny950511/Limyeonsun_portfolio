import React from 'react';
import MainSection from '../components/MainSection';
import AboutSection from '../components/AboutSection';
import IndexSection from '../components/IndexSection';
import ScrollToTopButton from '../components/ScrollToTopButton';

function Home() {
  return (
    <div className="home-page">
      <MainSection />
      <AboutSection />
      <IndexSection />
      <ScrollToTopButton themeClass="theme-home" />
    </div>
  );
}

export default Home;
