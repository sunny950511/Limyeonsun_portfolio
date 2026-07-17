import React from 'react';
import portfolioImg from '../assets/main/portfolio_img.png';

function MainSection() {
  return (
    <section className="section main-section">
      <div className="main-container">
        <div className="main-image-wrapper">
          <img 
            src={portfolioImg} 
            alt="PORTFOLIO" 
            className="main-image"
          />
        </div>
        <div className="main-header-container">
          <p className="main-title">UI/UX Design Portfolio_2026</p>
          <h1 className="main-author">LIMYEONSUN</h1>
        </div>
      </div>
    </section>
  );
}

export default MainSection;
