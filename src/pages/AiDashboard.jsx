import React from 'react';
import { Link } from 'react-router-dom';

// Import Assets
import linkIcon from '../assets/projects/dashboard/link_icon (2).png';
import heroBg from '../assets/projects/dashboard/hero_bg.png';
import leftImg01 from '../assets/projects/dashboard/section01_left_img.png';
import rightImg01 from '../assets/projects/dashboard/section01_right_img.png';

function AiDashboard() {
  return (
    <div className="aid-detail-page">
      {/* 1. Hero Section (1920*1080) */}
      <section className="aid-hero" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="aid-hero-inner">
          <div className="aid-hero-left">
            {/* Block 1: 타이틀 박스 */}
            <div className="aid-hero-top-group">
              <Link to="/" className="aid-back-btn">← Back to Home</Link>
              <div className="aid-title-block">
                <h1 className="aid-title">웰니스 AI 대시보드</h1>
                <p className="aid-subtitle">글래스모피즘 UI 기반의 감정 분석 명언과 시간 관리 툴을 결합한 올인원 웰니스 워크스페이스</p>
              </div>
            </div>

            {/* Block 2: Live Demo */}
            <div className="aid-live-demo-wrapper">
              <a href="https://dashboard-iota-bay-42.vercel.app/" target="_blank" rel="noopener noreferrer" className="aid-live-demo">
                <img src={linkIcon} alt="" className="aid-link-icon" />
                <span>Live Demo</span>
              </a>
            </div>

            {/* Block 3: PERIOD 리스트 */}
            <div className="aid-info-list">
              <div className="aid-info-row">
                <span className="aid-info-label">PERIOD</span>
                <span className="aid-info-value">2026.05 ~ 2026.06</span>
              </div>
              <div className="aid-info-row">
                <span className="aid-info-label">My Role</span>
                <span className="aid-info-value">UI/UX 기획 및 퍼블리싱 100%</span>
              </div>
              <div className="aid-info-row">
                <span className="aid-info-label">Tech&Tools</span>
                <span className="aid-info-value">Figma, Weather API, Gemini API, Vibe Coding</span>
              </div>
              <div className="aid-info-row">
                <span className="aid-info-label">Focus</span>
                <span className="aid-info-value">Open API 연동 & AI 프롬프트 엔지니어링</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Overview Section (1920*1080) */}
      <section className="aid-overview-section">
        <div className="aid-overview-inner">
          <div className="aid-ov-tag-block">
            <div className="aid-ov-quote-box">
              <span className="aid-ov-quote">"영혼 없는 응원 대신, 지금 내 상황에 스며드는 메시지가 필요할 때"</span>
            </div>
          </div>

          <div className="aid-ov-grid">
            {/* 카드 1 */}
            <div className="aid-ov-card aid-ov-card--text">
              <h3>Project Overview</h3>
              <p>기본 알람 앱이나 TO-DO앱들이 제공하는 정형화된 오늘의 명언이나 뉴스가 사용자의 실제 컨디션이나 일과를 반영하지 못해 실질적인 효용성을 극대화하기 어렵다고 느꼈습니다.</p>
              <br />
              <p>개인의 당일 기분에 맞는 맞춤형 메시지와 하루의 일과를 돕는 생산성 툴을 결합해 보자는 생각이 프로젝트의 시작이었습니다.</p>
            </div>
            {/* 카드 2 */}
            <div className="aid-ov-card aid-ov-card--img" style={{ backgroundImage: `url(${leftImg01})` }}></div>
            {/* 카드 3 */}
            <div className="aid-ov-card aid-ov-card--img" style={{ backgroundImage: `url(${rightImg01})` }}></div>
            {/* 카드 4 */}
            <div className="aid-ov-card aid-ov-card--text">
              <h3>배경</h3>
              <p>현대인들 사이에서 웰니스 루틴에 대한 관심은 높아졌으나, 기존 대시보드 서비스들은 사용자의 실시간 컨디션과 맥락을 반영하지 못한다는 공통적인 한계였습니다.</p>
              <br />
              <h3>목표</h3>
              <p>당일 기분을 분석하는 Gemini API 날씨 API, 뽀모도로 타이머, To-Do List 등 성격이 다른 다채로운 기능들을 글래스모피즘 가이드라인에 맞춰 시각적으로 일관성 있게 배치하는 것을 목표로 했습니다.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AiDashboard;
