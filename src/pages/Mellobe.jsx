import React from 'react';
import { Link } from 'react-router-dom';

// Import Assets
import linkIcon from '../assets/projects/mellobe/link_icon (2).png';
import heroBg from '../assets/projects/mellobe/hero_bg.png';
import section01Bg from '../assets/projects/mellobe/section01_bg.png';
import mockup1 from '../assets/projects/mellobe/section01_Mockup_1.png';
import mockup2 from '../assets/projects/mellobe/section01_Mockup_2.png';
import logo1 from '../assets/projects/mellobe/section02_logo1.png';
import logo2 from '../assets/projects/mellobe/section02_logo2.png';
import logo3 from '../assets/projects/mellobe/section02_logo3.png';
import simVideo from '../assets/projects/mellobe/section03_left_video.mp4';
import simBgDevice from '../assets/projects/mellobe/section03_Mockup_1.png';
import simFeature1 from '../assets/projects/mellobe/section03_1_right_img.png';
import simFeature2 from '../assets/projects/mellobe/section03_2_right_img.png';
import simFeature3 from '../assets/projects/mellobe/section03_3_right_img.png';
import centerMockupImg from '../assets/projects/mellobe/section04_Mockup.png';

function Mellobe() {
  return (
    <div className="mellobe-detail-page">
      {/* 1. Hero Section (1920*1080) */}
      <section className="mlb-hero" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="mlb-hero-inner">
          <div className="mlb-hero-left">
            {/* Block 1: 타이틀 박스 (771*269 HUG) */}
            <div className="mlb-hero-top-group">
              <Link to="/" className="mlb-back-btn">← Back to Home</Link>
              <div className="mlb-title-block">
                <h1 className="mlb-title">브랜드 경험 중심<br />인터랙티브 랜딩 페이지</h1>
                <p className="mlb-subtitle">실시간 조명 시뮬레이션과 마이크로 인터렉션을 통한 몰입형 UX 구현</p>
              </div>
            </div>

            {/* Block 2: Live Demo (970 FIXED * 93 HUG) */}
            <div className="mlb-live-demo-wrapper">
              <a href="https://sunny950511.github.io/Mellobe/" target="_blank" rel="noopener noreferrer" className="mlb-live-demo">
                <img src={linkIcon} alt="" className="mlb-link-icon" />
                <span>Live Demo</span>
              </a>
            </div>

            {/* Block 3: PERIOD 리스트 (970 FIXED * 452 HUG) */}
            <div className="mlb-info-list">
              <div className="mlb-info-row">
                <span className="mlb-info-label">PERIOD</span>
                <span className="mlb-info-value">2026.05</span>
              </div>
              <div className="mlb-info-row">
                <span className="mlb-info-label">My Role</span>
                <span className="mlb-info-value">UI/UX 기획 및 퍼블리싱 100%</span>
              </div>
              <div className="mlb-info-row">
                <span className="mlb-info-label">Tech&Tools</span>
                <span className="mlb-info-value">Adobe Photoshop, Illustrator, Figma, Generative AI(Gemini,ChatGPT), Vibe Coding</span>
              </div>
              <div className="mlb-info-row">
                <span className="mlb-info-label">Focus</span>
                <span className="mlb-info-value">마이크로 인터렉션 설계 & 바이브코딩 워크플로우 학습</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Overview Section (1920*1438) */}
      <section className="mlb-overview-section" style={{ backgroundImage: `url(${section01Bg})` }}>
        <div className="mlb-overview-inner">
          {/* 주황색 카드 영역 */}
          <div className="mlb-overview-card">
            <span className="mlb-ov-tag">PROJECT OVERVIEW</span>
            
            <div className="mlb-ov-content">
              <div className="mlb-ov-block">
                <p className="mlb-ov-text">
                  <strong className="mlb-ov-highlight-lg">마이크로 인터랙션</strong>을 중심으로 사용자가 직접 체험하는 랜딩 페이지를 구현해 보고자 했습니다.<br />
                  사용자의 행동에 즉각 반응하는 인터랙션을 설계하며, 단순한 정보 전달을 넘어 <strong className="mlb-ov-highlight-lg">경험</strong>을 제공하는 웹을 제작하는 것을 목표로 프로젝트를 시작했습니다.
                </p>
              </div>

              <div className="mlb-ov-block">
                <p className="mlb-ov-text">
                  조명은 밝기와 각도, 패턴 등 사용자의 취향에 따라 다양한 인터랙션을 자연스럽게 표현할 수 있는 오브젝트입니다.<br />
                  이러한 특성을 활용해 친환경 브랜드의 메시지를 사용자가 직접 체험할 수 있는 인터랙티브 랜딩페이지를 기획했습니다.
                </p>
              </div>

              <div className="mlb-ov-block">
                <p className="mlb-ov-text">
                  클릭, 드래그, 스크롤 등 다양한 사용자 행동에 즉각 반응하는 마이크로 인터랙션을 구현하여 브랜드를 직접 체험하는 경험을 제공하는 것을 목표로 했습니다.<br />
                  또한 인터랙션이 단순한 시각 효과가 아닌 브랜드 아이덴티티를 전달하는 요소가 되도록 설계했습니다.
                </p>
              </div>
            </div>
          </div>

          {/* 목업 영역 (앱솔루트 포지셔닝용 래퍼) */}
          <div className="mlb-mockup-wrapper">
            {/* 목업 1 (iPhone 16) */}
            <div className="mlb-mockup-item mlb-mockup-item--1">
              <img src={mockup1} alt="Mellobe iPhone Mockup 1" className="mlb-mockup-img" />
            </div>
            {/* 목업 2 (iPhone 16 Pro) */}
            <div className="mlb-mockup-item mlb-mockup-item--2">
              <img src={mockup2} alt="Mellobe iPhone Mockup 2" className="mlb-mockup-img" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. UX Hypothesis Section (1920*2106) */}
      <section className="mlb-hypothesis-section">
        {/* 상단 라인 및 로고 3 데코 */}
        <div className="mlb-hypo-header-line">
          <div className="mlb-dashed-line"></div>
          <div className="mlb-decor-logo-wrapper mlb-decor-logo-wrapper--3">
            <img src={logo3} alt="Mellobe Deco Logo 3" className="mlb-decor-logo" />
          </div>
        </div>

        <div className="mlb-hypothesis-inner">
          {/* 주황색 가설 타이틀 카드 */}
          <div className="mlb-hypo-title-card">
            <h2 className="mlb-hypo-title">작은 디테일이 만드는 몰입의 차이</h2>
          </div>

          {/* IF / THEN 카드 그룹 */}
          <div className="mlb-hypo-cards-group">
            {/* IF 카드 */}
            <div className="mlb-bubble-card mlb-bubble-card--if">
              <span className="mlb-bubble-badge">IF</span>
              <p className="mlb-bubble-text">사용자가 조명의 패턴, 밝기, 각도를 직접 조작하며 실시간 피드백을 경험할 수 있다면?</p>
            </div>

            {/* THEN 카드 */}
            <div className="mlb-bubble-card mlb-bubble-card--then">
              <span className="mlb-bubble-badge">THEN</span>
              <p className="mlb-bubble-text">수동적으로 정보를 소비하는 방식보다 능동적으로 사이트를 탐색하게 되어 브랜드 경험에 대한 이해도와 체류 시간이 증가할 것이다.</p>
            </div>
          </div>

          {/* absolute 데코 로고 1 & 2 */}
          <div className="mlb-hypo-decor-wrapper">
            <div className="mlb-decor-logo-wrapper mlb-decor-logo-wrapper--1">
              <img src={logo1} alt="Mellobe Deco Logo 1" className="mlb-decor-logo" />
            </div>
            <div className="mlb-decor-logo-wrapper mlb-decor-logo-wrapper--2">
              <img src={logo2} alt="Mellobe Deco Logo 2" className="mlb-decor-logo" />
            </div>
          </div>
        </div>
      </section>

      <section className="mlb-feature-section">
        <div className="mlb-feature-card-container">

          {/* 왼쪽 회색 박스 */}
          <div className="mlb-feature-card-left">
            <div className="mlb-feature-item">제품 특징을 텍스트로만<br />이해하기 어려움</div>
            <div className="mlb-feature-item">화면에 반응이 없어<br />관심이 감소</div>
            <div className="mlb-feature-item">수동적인 정보 탐색으로<br />몰입도 하락</div>  
          </div>

          {/* 중앙 노란색 박스 */}
          <div className="mlb-feature-card-center">
            <div className="mlb-feature-item">설명보다<br />체험을 우선</div>
            <div className="mlb-feature-item">즉각적인<br />피드백 제공</div>
            <div className="mlb-feature-item">사용자의<br />행동을 유도</div>
          </div>

          {/* 오른쪽 주황색 박스 */}
          <div className="mlb-feature-card-right">
            <div className="mlb-feature-item">실시간 조명 시뮬레이터를 사용하여<br />직접 조작하며 제품을 이해할 수 있음</div>
            <div className="mlb-feature-item">패턴, 밝기, 각도를 실시간으로 반영하여<br />조작 결과를 즉시 확인할 수 있음</div>
            <div className="mlb-feature-item">클릭, 드래그 기반 인터랙션으로<br />능동적인 탐색 경험을 제공</div>
          </div>
        </div>
      </section>

      {/* 4. Simulator Features Section (1920*1765) */}
      <section className="mlb-simulator-section">
        <div className="mlb-simulator-inner">
          {/* 뒷단 대형 아이패드 기기 프레임 배경 */}
          <img src={simBgDevice} alt="iPad Pro Frame Background" className="mlb-sim-bg-device" />

          {/* 좌측 태블릿 시뮬레이터 목업 (비디오 포함) */}
          <div className="mlb-sim-mockup-wrapper">
            <video 
              src={simVideo} 
              className="mlb-sim-video" 
              autoPlay 
              loop 
              muted 
              playsInline 
            />
            <div className="mlb-sim-mockup-label">
              <span className="mlb-sim-label-text">우측 패널에 따라 변경되는 실시간 조명 시뮬레이터</span>
            </div>
          </div>

          {/* 우측 기능 설명 카드 리스트 */}
          <div className="mlb-sim-cards-list">
            {/* 카드 1 - 밝기 (디밍) */}
            <div 
              className="mlb-sim-card" 
              style={{ backgroundImage: `url(${simFeature2})` }}
              title="터치 디밍 조절 (3단) - 밝기를 클릭하면 배경 그라데이션과 조명 밝기가 변화"
            ></div>

            {/* 카드 2 - 패턴 */}
            <div 
              className="mlb-sim-card" 
              style={{ backgroundImage: `url(${simFeature1})` }}
              title="갓 패턴 선택 - 갓 패턴을 클릭하면 선택한 색상에 맞춰 패턴이 변경"
            ></div>

            {/* 카드 3 - 각도 */}
            <div 
              className="mlb-sim-card" 
              style={{ backgroundImage: `url(${simFeature3})` }}
              title="조명 기둥 각도 조절 (0도) - 조명 기둥 조절 바를 마우스로 드래그할 시 조명이 각도에 맞춰 실시간으로 기울어지고 조명 스위치 끈이 자연스럽게 흔들림"
            ></div>
          </div>
        </div>
      </section>

      {/* 5. Single Mockup Section */}
        <section className="mlb-single-mockup-section">
          <img src={centerMockupImg} alt="Mellobe Center Mockup" className="mlb-center-mockup-img" />
        </section>

        {/* 6. Dual Column Box Section */}
        <section className="mlb-dual-layout-section">
          <div className="mlb-dual-inner">
    
            {/* 좌측 단 (상/하단 박스를 묶어줌) */}
          <div className="mlb-left-column">
      
            {/* 좌측 상단 박스 */}
            <div className="mlb-box mlb-box-left-item">
              <div className="mlb-box-content-group">
                <h3 className="mlb-box-title">정량적 기술 성과</h3>
                <ul className="mlb-box-list">
                  <li>Scroll Reveal 적용 요소 4개 구현</li>
                  <li>Custom Cursor 인터랙션 4개 구현</li>
                  <li>Vibe Coding 활용 개발 시간 단축</li>
                  <li>GitHub 배포 완료 : 실제 결과물을 확인 가능</li>
                </ul>
              </div>
              
              <div className="mlb-box-content-group">
                <h3 className="mlb-box-title">UX 기대효과</h3>
                <ul className="mlb-box-list">
                  <li>브랜드 정체성 각인 및 몰입감 높은 사용자 경험 제공</li>
                  <li>시각적 피드백 제공으로 페이지 체류 시간 증가 기대</li>
                  <li>가상 제품 체험을 통한 구매 전환율 상승 기대</li>
                </ul>
              </div>
            </div>
      
            {/* 좌측 하단 박스 */}
            <div className="mlb-box mlb-box-left-item">
              <div className="mlb-box-content-group">
                <h3 className="mlb-box-title">스크롤 효과</h3>
                <ul className="mlb-box-list">
                  <li>3단계 공정 카드 순차적 등장</li>
                  <li>다크모드/라이트모드 전환</li>
                  <li>TOP 버튼</li>
                  <li>글자 타이핑 효과</li>
                </ul>
              </div>
              
              <div className="mlb-box-content-group">
                <h3 className="mlb-box-title">마우스 효과</h3>
                <ul className="mlb-box-list">
                  <li>마우스 컨페티 트레일</li>
                  <li>조명 기둥 각도 조절</li>
                  <li>3단계 조명 밝기</li>
                  <li>버튼 클릭</li>
                </ul>
              </div>
            </div>

          </div>

          {/* 우측 단일 큰 박스 */}
          <div className="mlb-box mlb-box-right">
            <h2 className="mlb-right-main-title">Project Review</h2>
            
            <div className="mlb-box-content-group">
              <h3 className="mlb-box-title">My Successes</h3>
              <ul className="mlb-box-list mlb-box-list--long">
                <li>사용자의 행동에 즉각 반응하는 '체험형 웹'이라는 기획 의도에 맞게 마이크로 인터랙션을 구현했습니다. 이를 통해 단순한 정보 전달을 넘어 브랜드 정체성을 각인시키고 페이지 체류 시간을 늘릴 수 있는 몰입감 높은 사용자 경험을 완성했습니다.</li>
                <li>기획, 설계, 디자인, 배포에 이르는 전체 프로세스에서 AI 툴과 바이브 코딩을 적극적으로 도입하여 개발 시간을 획기적으로 단축했으며, 1인 프로젝트임에도 효율적인 워크플로우를 구축할 수 있었습니다.</li>
              </ul>
            </div>
            
            <div className="mlb-box-content-group">
              <h3 className="mlb-box-title">Areas for Improvement</h3>
              <ul className="mlb-box-list mlb-box-list--long">
                <li>바이브 코딩과 AI를 활용해 복잡한 인터랙션 코드를 빠르게 짜다 보니, 간혹 AI가 생성한 스크립트나 스타일 구조에 의존하게 되는 경우가 있었습니다.</li>
                <li>완성된 실제 웹사이트를 주변 사람이나 타겟 사용자들에게 보여주고 피드백을 받는 '사용자 테스트' 과정을 거치지 못한 점이 아쉬웠습니다.</li>
              </ul>
            </div>
            
            <div className="mlb-box-content-group">
              <h3 className="mlb-box-title">Next Steps</h3>
              <ul className="mlb-box-list mlb-box-list--long">
                <li>다음 프로젝트에서는 브랜드가 가진 고유의 아이덴티티를 놓치지 않으면서, 디지털 취약계층의 사용자도 쉽고 편하게 이용할 수 있는 웹사이트를 설계해 보고 싶습니다.</li>
              </ul>
            </div>
          </div>

        </div>
</section>
    </div>
  );
}

export default Mellobe;
