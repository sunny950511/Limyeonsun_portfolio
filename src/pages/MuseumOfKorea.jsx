import React from 'react';
import { Link } from 'react-router-dom';
import UserFlowSection from '../components/UserFlowSection';
import DesignGuideSection from '../components/DesignGuideSection';
import MockupSection from '../components/MockupSection';
import ReviewSection from '../components/ReviewSection';
import VideoSection from '../components/VideoSection';
import ScrollToTopButton from '../components/ScrollToTopButton';

// Import Assets
import linkIcon from '../assets/projects/museum/link_icon.png';
import heroMockup from '../assets/projects/museum/museum_hero_mockup.png';
import bg01 from '../assets/projects/museum/section01_bg.png';
import personaImg from '../assets/projects/museum/section02_persona.png';

function MuseumOfKorea() {
  return (
    <div className="museum-detail-page">
      {/* 1. Hero Section (1920*1080) */}
      <section className="mok-hero">
        <div className="mok-hero-inner">
          <div className="mok-hero-left">
            {/* Block 1: 타이틀 박스 (771*269 HUG) */}
            <div className="mok-hero-top-group">
              <Link to="/" className="mok-back-btn">← Back to Home</Link>
              <div className="mok-title-block">
                <h1 className="mok-title">국립중앙박물관<br />UX/UI 웹 접근성 개선</h1>
                <p className="mok-subtitle">디지털 취약계층을 위해 예약 과정을 단축하고 정보 가독성을 높인 시스템 개선</p>
              </div>
            </div>

            {/* Block 2: Live Demo (970 FIXED * 93 HUG) */}
            <div className="mok-live-demo-wrapper">
              <a href="https://sunny950511.github.io/museum/" target="_blank" rel="noopener noreferrer" className="mok-live-demo">
                <img src={linkIcon} alt="" className="mok-link-icon" />
                <span>Live Demo</span>
              </a>
            </div>

            {/* Block 3: PERIOD 리스트 (970 FIXED * 452 HUG) */}
            <div className="mok-info-list">
              <div className="mok-info-row">
                <span className="mok-info-label">PERIOD</span>
                <span className="mok-info-value">2026.03 ~ 2026.05</span>
              </div>
              <div className="mok-info-row">
                <span className="mok-info-label">My Role</span>
                <span className="mok-info-value">UI/UX 기획 및 퍼블리싱 100%</span>
              </div>
              <div className="mok-info-row">
                <span className="mok-info-label">Tech&Tools</span>
                <span className="mok-info-value">Adobe Photoshop, Illustrator, Figma, Generative AI(Gemini,ChatGPT), Vibe Coding</span>
              </div>
              <div className="mok-info-row">
                <span className="mok-info-label">Focus</span>
                <span className="mok-info-value">웹 접근성 & AI 기반 UX 개선</span>
              </div>
            </div>
          </div>
          <div className="mok-hero-right">
            <img src={heroMockup} alt="Museum Mockup" className="mok-hero-img" />
          </div>
        </div>
      </section>

      {/* 2. Overview Section (1920*1080) */}
      <section className="mok-overview" style={{ backgroundImage: `url(${bg01})` }}>
        <div className="mok-overview-layout">
          {/* 상단: 태그 & 슬로건 (좌측 정렬) */}
          <div className="mok-overview-tag-block">
            <span className="mok-overview-tag">PROJECT OVERVIEW</span>
            <h2 className="mok-overview-slogan">
              모두에게 열려 있는 서비스가<br />
              누군가에게 멈춤의 이유가 될 수 없도록
            </h2>
          </div>
          {/* 하단: 본문 (우측 정렬 및 피그마 2단 문단 줄바꿈 일치) */}
          <div className="mok-overview-text-block">
            <p>
              해외 유명 박물관 사이트(루브르,메트로폴리탄,대영박물관)는 티켓 구매나 예약을 헤매지 않고 할 수 있게 되어 있는 반면,<br />
              우리나라의 박물관 사이트에서는 예약 버튼조차 찾기 힘들었습니다.
            </p>
            <p>
              모두가 이용하는 공공서비스인 만큼, 복잡하고 불필요한 단계를 줄이고<br />
              누구나 쉽게 사용할 수 있어야 한다는 생각으로 이 프로젝트를 시작했습니다.
            </p>
          </div>
        </div>
      </section>

      {/* 3. User Persona Section (1920*1080) */}
      <section className="museum-persona">
        <div className="persona-flat-container-2col">
          {/* 좌측 프레임: 페르소나 이미지, 정보, 워딩 */}
          <div className="persona-left-frame">
            <div className="persona-image-wrapper">
              <img src={personaImg} alt="Persona 박영희" className="persona-img" />
            </div>
            <div className="profile-meta-line-refined">
              <span className="profile-name">박영희</span>
              <span className="profile-age-job">68세 , 전업주부</span>
              <span className="profile-proficiency-badge">IT 숙련도 : 하</span>
            </div>
            <p className="persona-quote">
              " 예약을 하려고 들어갔는데 예약 버튼이 보이지 않고, 화면이 여러 단계로 나뉘어 있어 헷갈려서 예약을 못 한 적이 있어요. "
            </p>
          </div>

          {/* 우측 프레임: 페인포인트 & 가설 */}
          <div className="persona-right-frame">
            <div className="pain-points-flat">
              <h3 className="flat-sub-title">PAIN POINTS</h3>
              <div className="pain-points-list-refined">
                <div className="pain-point-item-refined">
                  <strong>1. 비효율적 동선</strong>
                  <p>- 예약이라는 핵심 과업을 수행하기 위해 사용자가 불필요하고 반복적인 단계를 거침</p>
                </div>
                <div className="pain-point-item-refined">
                  <strong>2. 가시성 저하</strong>
                  <p>- 예약 버튼의 형태가 불분명하고 클릭 요소의 크기가 작아 핵심 과업을 시작하고 조작하는데 어려움이 있음</p>
                </div>
                <div className="pain-point-item-refined">
                  <strong>3. 정보 중복 노출</strong>
                  <p>- 성격이 다른 콘텐츠가 명확한 구분 없이 혼재되어 있고, 동일한 정보가 화면 여러곳에 반복적으로 나타남</p>
                </div>
                {/* 피드백 반영: 정보 중복 노출 항목 하단 얇은 스트로크 선 */}
                <div className="pain-point-stroke"></div>
              </div>
            </div>

            {/* 가설 (위에 정확히 160px의 여백 지정) */}
            <div className="hypothesis-flat">
              <h3 className="flat-sub-title-hypothesis">HYPOTHESIS</h3>
              <p className="hypothesis-text-blue">
                CTA 버튼을 시각적으로 강조하고 단계 인디케이터와 단일 페이지 폼으로 예약 흐름을 단순화 한다면, 디지털 취약계층의 사용자도 예약 흐름을 직관적으로 따라가고 단계별 진행 상황을 이해하며, 예약 완료율이 높아질 것이다.
              </p>
              {/* 피드백 반영: 가설 텍스트 아래 얇은 스트로크 선 */}
              <div className="pain-point-stroke"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 섹션3: AS-IS / TO-BE (1920*2460)                             */}
      {/* ============================================================ */}
      <section className="mok-asis-tobe">
        <div className="mok-asis-tobe-inner">

          {/* 타이틀 */}
          <h2 className="mok-asis-tobe-title">
            가설을 실현하기 위해 도출된 개선방향을 기능 단위로 정의하고<br />
            As-is 와 To-be 를 비교했습니다.
          </h2>

          {/* ── 카드 01 ────────────────────────── */}
          <div className="mok-asis-card">
            {/* 스크린 이미지 (518×626) - absolute 배치 */}
            <img src="./section03_asis01.png" alt="As-Is 스크린 01" className="mok-asis-screen-img" />

            {/* AS-IS 01: 흰 박스 [박스 → 선 → 원●] */}
            <div className="mok-asis-box mok-asis-box--01-asis">
              <div className="mok-desc-box mok-desc-box--white">
                <p>예약 버튼이 텍스트 형태로 제공되어<br />예약 시작 지점을 인지하기 어려움</p>
              </div>
              <span className="mok-pointer-line mok-pointer-line--olive"></span>
              <span className="mok-pointer-dot mok-pointer-dot--olive"></span>
            </div>

            {/* TO-BE 01: 딥블루 박스 [●원 → 선 → 박스] */}
            <div className="mok-asis-box mok-asis-box--01-tobe">
              <span className="mok-pointer-dot mok-pointer-dot--red"></span>
              <span className="mok-pointer-line mok-pointer-line--red"></span>
              <div className="mok-desc-box mok-desc-box--blue">
                <p>시각적으로 강조된 예약버튼 제공</p>
              </div>
            </div>
          </div>

          {/* ── 카드 02 ────────────────────────── */}
          <div className="mok-asis-card">
            {/* 스크린 이미지 (526×635) - absolute 배치 */}
            <img src="./section03_asis02.png" alt="As-Is 스크린 02" className="mok-asis-screen-img mok-asis-screen-img--02" />

            {/* AS-IS 02-1: 흰 박스 [박스 → 선 → 원●] */}
            <div className="mok-asis-box mok-asis-box--02-asis1">
              <div className="mok-desc-box mok-desc-box--white">
                <p>현재 진행 단계와<br />남은 과정을 알기 어려움</p>
              </div>
              <span className="mok-pointer-line mok-pointer-line--olive"></span>
              <span className="mok-pointer-dot mok-pointer-dot--olive"></span>
            </div>

            {/* TO-BE 02-1: 딥블루 박스 "예약 페이지 단계를 상단 인디케이터로 표시" (237:783 - 누락 복구) */}
            <div className="mok-asis-box mok-asis-box--02-tobe1a">
              <span className="mok-pointer-dot mok-pointer-dot--red"></span>
              <span className="mok-pointer-line mok-pointer-line--red"></span>
              <div className="mok-desc-box mok-desc-box--blue">
                <p>예약 페이지 단계를 상단 인디<br />케이터로 표시</p>
              </div>
            </div>

            {/* TO-BE 02-2: 딥블루 박스 "이탈 없이 다음 단계로 진입할 수 있도록..." */}
            <div className="mok-asis-box mok-asis-box--02-tobe1b">
              <span className="mok-pointer-dot mok-pointer-dot--red"></span>
              <span className="mok-pointer-line mok-pointer-line--red"></span>
              <div className="mok-desc-box mok-desc-box--blue mok-desc-box--blue-wide">
                <p>이탈 없이 다음 단계로 진입할 수 있도록 직관적인 여정 안내 요소를 강화</p>
              </div>
            </div>

            {/* AS-IS 02-2: 흰 박스 [박스 → 선 → 원●] */}
            <div className="mok-asis-box mok-asis-box--02-asis2">
              <div className="mok-desc-box mok-desc-box--white">
                <p>정보 과다로<br />필요한 정보를 찾기 어려움</p>
              </div>
              <span className="mok-pointer-line mok-pointer-line--olive"></span>
              <span className="mok-pointer-dot mok-pointer-dot--olive"></span>
            </div>

            {/* TO-BE 02-3: 딥블루 박스 "필요한 정보만 순차적 입력" */}
            <div className="mok-asis-box mok-asis-box--02-tobe2">
              <span className="mok-pointer-dot mok-pointer-dot--red"></span>
              <span className="mok-pointer-line mok-pointer-line--red"></span>
              <div className="mok-desc-box mok-desc-box--blue">
                <p>필요한 정보만 순차적 입력</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. User Flow Section */}
      <UserFlowSection />

      {/* 5. Design Guide Section */}
      <DesignGuideSection />

      {/* 6. Mockup Section */}
      <MockupSection />

      {/* 7. Review Section (성과회고) */}
      <ReviewSection />

      {/* 8. Video Section (비디오 재생) */}
      <VideoSection />

      {/* 하단 다음 버튼 */}
      <div className="bottom-nav-container">
        <Link to="/project/mellobe" className="back-home-button">Next Project →</Link>
      </div>

      <ScrollToTopButton themeClass="theme-museum" />
    </div>
  );
}

export default MuseumOfKorea;
