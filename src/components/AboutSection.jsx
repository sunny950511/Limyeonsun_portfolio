import React from 'react';
import mainVideo from '../assets/about/main_video.mp4';

// Import tool icons
import figmaIcon from '../assets/about/icons/figma_elements_icon.jpeg.png';
import aiIcon from '../assets/about/icons/logos_adobe-illustrator.png';
import psIcon from '../assets/about/icons/logos_adobe-photoshop.png';
import aeIcon from '../assets/about/icons/logos_adobe-after-effects.png';
import prIcon from '../assets/about/icons/logos_adobe-premiere.png';
import symbolIcon from '../assets/about/icons/Symbol.svg.png';
import slackIcon from '../assets/about/icons/devicon_slack.png';
import notionIcon from '../assets/about/icons/radix-icons_notion-logo.png';
import antigravityIcon from '../assets/about/icons/google_antigravity_icon.png.png';
import vectorIcon from '../assets/about/icons/Vector.png';
import maskIcon from '../assets/about/icons/Mask group.png';

function AboutSection() {
  const icons = [
    { src: figmaIcon, alt: 'Figma' },
    { src: antigravityIcon, alt: 'Google Antigravity' },
    { src: aiIcon, alt: 'Adobe Illustrator' },
    { src: psIcon, alt: 'Adobe Photoshop' },
    { src: aeIcon, alt: 'Adobe After Effects' },
    { src: prIcon, alt: 'Adobe Premiere' },
    { src: symbolIcon, alt: 'Symbol' },
    { src: slackIcon, alt: 'Slack' },
    { src: notionIcon, alt: 'Notion' },
    { src: vectorIcon, alt: 'Vector' },
    { src: maskIcon, alt: 'Mask Group' },
  ];

  return (
    <section className="section about-section">
      <div className="about-left">
        <div className="about-quote-container">
          <h2 className="about-quote">구조를 설계하고, 흐름을 완성합니다.</h2>
        </div>
        <div className="about-description-container">
          <div className="about-description-text-wrapper">
            <p className="about-description">
              {`정보를 쌓기보다 구조를 만들고,
              화면을 채우기보다 흐름을 설계합니다.
              사용자가 자연스럽게 이해할 수 있는 경험을 구현하며,
              AI를 활용해 더 나은 구조와 흐름을 탐색합니다.`}
            </p>
          </div>
          <div className="about-icons-container">
            {icons.map((icon, index) => (
              <img 
                key={index} 
                src={icon.src} 
                alt={icon.alt} 
                className="tech-icon"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="about-right">
        <video 
          src={mainVideo} 
          autoPlay 
          loop 
          muted 
          playsInline
          className="about-video-frame"
        />
      </div>
    </section>
  );
}

export default AboutSection;
