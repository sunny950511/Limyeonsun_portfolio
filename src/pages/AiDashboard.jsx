import React from 'react';
import { Link } from 'react-router-dom';

// Import Assets
import linkIcon from '../assets/projects/dashboard/link_icon (2).png';
import heroBg from '../assets/projects/dashboard/hero_bg.png';
import leftImg01 from '../assets/projects/dashboard/section01_left_img.png';
import rightImg01 from '../assets/projects/dashboard/section01_right_img.png';
import section02Mockup from '../assets/projects/dashboard/section02_Mockup.png';
import section03Mockup from '../assets/projects/dashboard/section03_Mockup.png';
import section04Mockup from '../assets/projects/dashboard/section04_Mockup.png';

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

      {/* 2. Overview Section (사용자 기준 섹션 1번) */}
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

      {/* 3. Hypothesis Section (Figma 섹션02 가설 레이아웃) */}
      <section className="aid-hypothesis-section">
        <div className="aid-hypothesis-inner">
          {/* 타이틀 영역 */}
          <div className="aid-hypo-tag-block">
            <div className="aid-hypo-quote-box">
              <span className="aid-hypo-quote">심리적 안정감이 미치는 데일리 루틴의 몰입도 향상</span>
            </div>
          </div>

          {/* 가설 및 이미지 가로 배치 영역 */}
          <div className="aid-hypo-content-wrapper">
            {/* 좌측: IF / THEN 가설 카드 그룹 */}
            <div className="aid-hypo-group">
              {/* IF 카드 */}
              <div className="aid-hypo-card aid-hypo-card--if">
                <span className="aid-hypo-title-tag">IF</span>
                <p className="aid-hypo-desc">
                  만약 기존 대시보드 서비스들처럼 정형화된 문장을 일방적으로 출력하는 대신, Gemini API를 통해 사용자의 실시간 기분과 맥락에 맞춘 초개인화된 맞춤형 메시지를 제공한다면?
                </p>
              </div>

              {/* THEN 카드 */}
              <div className="aid-hypo-card aid-hypo-card--then">
                <span className="aid-hypo-title-tag">THEN</span>
                <p className="aid-hypo-desc">
                  사용자는 화면 속 텍스트를 단순한 소비성 정보가 아닌 '나만을 위한 진정성 있는 응원'으로 받아들여 정서적 안정감을 얻고, 이를 바탕으로 일과 몰입에 더 적극적으로 참여할 것이다.
                </p>
              </div>
            </div>

            {/* 우측: iPhone 16 이미지 */}
            <div className="aid-iphone-wrapper">
              <img src={section02Mockup} alt="iPhone 16 Mockup" className="aid-iphone-img" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Architecture Section (Figma 섹션03 - 사용자 기준 섹션 3번) */}
      <section className="aid-architecture-section">
        <div className="aid-architecture-inner">
          {/* 타이틀 영역 */}
          <div className="aid-arch-tag-block">
            <div className="aid-arch-quote-box">
              <span className="aid-arch-quote">감성 케어와 생산성 루틴의 유기적 흐름을 위한 컴포넌트 아키텍처</span>
            </div>
          </div>

          {/* 목업 이미지 영역 */}
          <div className="aid-arch-mockup-wrapper">
            <img src={section03Mockup} alt="Architecture Mockup" className="aid-arch-mockup-img" />
          </div>

          {/* 하단 설명 박스 2개 */}
          <div className="aid-arch-desc-wrapper">
            {/* 설명 박스 1 */}
            <div className="aid-arch-card">
              <h4 className="aid-arch-card-title">데이터와 감정의 결합</h4>
              <ul className="aid-arch-card-list">
                <li>기존 대시보드는 일방적인 정보만 제공하여 사용자의 실제 컨디션이나 맥락을 반영하기 어려움</li>
                <li>Weather API + 오늘의 기분 입력 UI을 사용하여 날씨와 기분을 결합해 나만을 위한 맥락 데이터를 구축</li>
              </ul>
            </div>

            {/* 설명 박스 2 */}
            <div className="aid-arch-card">
              <h4 className="aid-arch-card-title">사용자 맞춤형 명언 생성</h4>
              <ul className="aid-arch-card-list">
                <li>정형화된 오늘의 명언은 반복될수록 실질적인 효용성과 공감력이 떨어짐</li>
                <li>Gemini API + 프롬프트 엔지니어링을 사용하여 매일 실시간으로 바뀌는 사용자의 상태를 분석하고 매번 다른 메세지를 생성</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Device Mockup Section (Figma 섹션04 - 사용자 기준 섹션 4번) */}
      <section className="aid-device-section">
        <div className="aid-device-inner">
          <img src={section04Mockup} alt="Device Mockup" className="aid-device-img" />
        </div>
      </section>

      {/* 6. Review Section (Figma 섹션05 - 사용자 기준 섹션 5번) */}
      <section className="aid-review-section">
        <div className="aid-review-inner">
          {/* 행 1: 정량적 기술 성과 */}
          <div className="aid-rev-row">
            <div className="aid-rev-title-box">
              <span className="aid-rev-title">정량적 기술 성과</span>
            </div>
            <div className="aid-rev-desc-box">
              <ul className="aid-rev-list">
                <li>실시간 OpenWeather API 연동</li>
                <li>Gemini API 프롬프트 최적화</li>
                <li>올인원 멀티 위젯 아키텍처 구현</li>
              </ul>
            </div>
          </div>

          {/* 행 2: UX 가설 기대 효과 */}
          <div className="aid-rev-row">
            <div className="aid-rev-title-box">
              <span className="aid-rev-title">UX 가설 기대 효과</span>
            </div>
            <div className="aid-rev-desc-box">
              <ul className="aid-rev-list">
                <li>개인화된 웰니스 워크스페이스 구축으로 단순 업무 관리에 치중되어 있던 기존 대시보드 앱들과 달리, 마인드 케어와 시간 관리를 한 화면에서 해결하여 서비스에 대한 유대감과 일일 재방문율을 높이는 효과를 기대할 수 있음.</li>
              </ul>
            </div>
          </div>

          {/* 행 3: Project Review */}
          <div className="aid-rev-row">
            <div className="aid-rev-title-box">
              <span className="aid-rev-title font-geist">Project Review</span>
            </div>
            <div className="aid-rev-desc-box">
              <ul className="aid-rev-list">
                <li>제미나이 API를 활용해 '개인 맞춤형 웰니스'라는 기획 의도를 기능적으로 구현</li>
                <li>현재 대시보드는 정적인 그라데이션 배경으로 구성되어 있어 다소 지루함을 느낄 수 있다는 아쉬움이 있었고, 이를 개선하기 위해 사용자가 입력한 to-do list나 오늘의 기분 입력에 따라 백그라운드 컬러가 라바 램프처럼 유동적으로 변하는 움직임을 넣어보고싶음.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AiDashboard;
