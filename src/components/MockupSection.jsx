import React from 'react';
import mockupImg from '../assets/projects/museum/section06_device_mockup.png';

function MockupSection() {
  return (
    <section className="mockup-section">
      <div className="mockup-container">
        <img src={mockupImg} alt="Device Mockup" className="mockup-image" />
      </div>
    </section>
  );
}

export default MockupSection;
