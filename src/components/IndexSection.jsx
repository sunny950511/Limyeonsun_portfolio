import React from 'react';
import { Link } from 'react-router-dom';

function IndexSection() {
  const projects = [
    {
      title: 'National Museum of Korea',
      desc: '국립중앙박물관 UI/UX 웹 접근성 개선',
      path: '/project/museum'
    },
    {
      title: 'Mellobe',
      desc: '브랜드 경험 중심의 인터랙티브 랜딩 페이지',
      path: '/project/mellobe'
    },
    {
      title: 'AI Dashboard',
      desc: '글래스모피즘 UI 기반의 AI 웰니스 대시보드',
      path: '/project/dashboard'
    }
  ];

  return (
    <section className="section index-section">
      <div className="index-header-container">
        <h2 className="index-header">index</h2>
      </div>
      <div className="project-list-container">
        {projects.map((project, index) => (
          <Link key={index} to={project.path} className="project-item-link">
            <div className="project-item">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default IndexSection;
