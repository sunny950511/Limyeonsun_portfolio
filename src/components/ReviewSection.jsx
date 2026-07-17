import React from 'react';
import logoImg from '../assets/projects/museum/로고2.png';

function ReviewSection() {
  return (
    <section className="review-section">
      <div className="review-inner">
        {/* 좌측 컬럼: 성과회고 */}
        <div className="rv-left-col">
          {/* 카드 1: 마크업 및 바이브코딩 구현 */}
          <div className="rv-card">
            <div className="rv-card-item">
              <h3 className="rv-card-title">시맨틱 마크업</h3>
              <p className="rv-card-desc">
                React 컴포넌트 단위로 표준 시맨틱 구조를 설계하고, sr-only 클래스를 활용해 눈에 보이지 않는 계층 구조를 배치하여 스크린 리더의 올바른 읽기 순서와 자연스러운 키보드 이동 동선을 보장
              </p>
            </div>
            <div className="rv-card-item">
              <h3 className="rv-card-title">바이브코딩 활용</h3>
              <p className="rv-card-desc">
                AI를 활용하여 명도 대비 및 클릭 영역 크기 등 웹 접근성 지침을 실시간으로 교차 검증하며, 퍼블리싱 및 디버깅 시간을 단축
              </p>
            </div>
            <div className="rv-card-item">
              <h3 className="rv-card-title">WAI-ARIA 적용</h3>
              <p className="rv-card-desc">
                aria-label, aria-hidden 속성을 활용해 대화형 요소의 목적지를 명확히 하고 불필요한 리소스 탐색을 차단했으며, 예약 모달 팝업 내 포커스 트랩(Focus Trap)을 구현하여 키보드 접근성을 높임
              </p>
            </div>
          </div>

          {/* 카드 2: 성과 */}
          <div className="rv-card">
            <div className="rv-card-item">
              <h3 className="rv-card-title">정량적 기술 성과</h3>
              <ul className="rv-card-list">
                <li>LightHouse 접근성 100%</li>
              </ul>
            </div>
            <div className="rv-card-item">
              <h3 className="rv-card-title">UX 기대 효과</h3>
              <ul className="rv-card-list">
                <li>불필요한 스크롤 및 정보 탐색 시간 단축으로 사용자 피로도 감소 및 즉각적인 정보 인지</li>
                <li>반응형 환경에서의 오작동 예방 및 사용성 극대화</li>
                <li>소외 없는 보편적 설계로 IT취약 계층의 디지털 이탈 방지 및 논리적 태스크 완수율 상승</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 우측 컬럼: 리뷰 */}
        <div className="rv-right-col">
          <div className="rv-card rv-card--review">
            {/* 로고 영역 */}
            <div className="rv-logo-wrap">
              <img src={logoImg} alt="국립중앙박물관 로고" className="rv-logo-img" />
            </div>
            
            <div className="rv-card-item">
              <h3 className="rv-card-title">My Successes</h3>
              <ul className="rv-card-list">
                <li>10단계로 이루어진 예약 과정을 6단계로 축소했습니다.</li>
                <li>페이지 진입 시 어떤 흐름으로 예약을 진행해야 하는지 명확하게 인식할 수 있도록 개선했습니다.</li>
                <li>불필요한 정보 노출을 줄이고 사용자가 핵심 과업을 수행할 수 있도록 개선했습니다.</li>
                <li>공공기관 사이트에 어울리는 브랜드 컬러를 선정하여 직관적인 화면을 구성했습니다.</li>
                <li>텍스트 명도 대비를 개선하여 가독성을 강화했습니다.</li>
              </ul>
            </div>

            <div className="rv-card-item">
              <h3 className="rv-card-title">Areas for Improvement</h3>
              <ul className="rv-card-list">
                <li>공공기관 사이트의 신뢰감을 유지하며 가독성을 중요하게 설계하다 보니, 디자인 시스템이나 레이아웃을 보수적인 방향으로 설계한 점이 아쉬움으로 남았습니다.</li>
                <li>박물관만의 특색을 디자인적 측면에서 여러 방면으로 시도해 보지 못한 점이 아쉬웠습니다.</li>
              </ul>
            </div>

            <div className="rv-card-item">
              <h3 className="rv-card-title">Next Steps</h3>
              <ul className="rv-card-list">
                <li>사이트의 기능성을 해치지 않으면서 브랜드 고유의 개성을 돋보이게 만드는 작업을 진행하겠습니다.</li>
                <li>핵심 레이아웃은 직관적으로 유지하되, 밋밋하지 않게 생동감을 주는 인터랙션이나 그래픽 요소를 사용할 계획입니다.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReviewSection;
