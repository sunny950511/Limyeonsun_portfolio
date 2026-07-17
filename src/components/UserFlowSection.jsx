import React from 'react';
import userFlow1 from '../assets/user_flow_1.png';
import userFlow2 from '../assets/user_flow_2.png';
import userFlow3 from '../assets/user_flow_3.png';
import userFlow4 from '../assets/user_flow_4.png';
import userFlow5 from '../assets/user_flow_5.png';
import userFlow6 from '../assets/user_flow_6.png';
import userFlow7 from '../assets/user_flow_7.png';

import arrow1 from '../assets/arrow_1.svg';
import arrow2 from '../assets/arrow_2.svg';
import arrow3 from '../assets/arrow_3.svg';
import arrow4 from '../assets/arrow_4.svg';
import arrow5 from '../assets/arrow_5.svg';
import arrow6 from '../assets/arrow_6.svg';

function UserFlowSection() {
  const steps = [
    { number: '1', detail: '관람예약 버튼 클릭', image: userFlow1 },
    { number: '2', detail: '전시 종류 선택', image: userFlow2 },
    { number: '3', detail: '전시명 선택', image: userFlow3 },
    { number: '4', detail: '관람 일정 선택', image: userFlow4 },
    { number: '5', detail: '정보 입력', image: userFlow5 },
    { number: '6', detail: '예약 정보 확인', image: userFlow6 },
    { number: '7', detail: '예약 확정', image: userFlow7 }
  ];

  return (
    <section className="user-flow-section">
      <h2 className="user-flow-title">UserFlow</h2>
      
      <div className="user-flow-container-wrapper">
        <div className="user-flow-grid">
          {steps.map((step) => (
            <div key={step.number} className="user-flow-card">
              <div className="step-desc-container">
                <div className="step-number">
                  <span>{step.number}</span>
                </div>
                <span className="step-detail">{step.detail}</span>
              </div>
              <img src={step.image} alt={`Step ${step.number}`} className="step-image" />
            </div>
          ))}
        </div>

        {/* 피그마의 절대좌표 화살표 오버레이 */}
        <img src={arrow1} alt="" className="flow-arrow arrow-1" />
        <img src={arrow2} alt="" className="flow-arrow arrow-2" />
        <img src={arrow3} alt="" className="flow-arrow arrow-3" />
        <img src={arrow4} alt="" className="flow-arrow arrow-4" />
        <img src={arrow5} alt="" className="flow-arrow arrow-5" />
        <img src={arrow6} alt="" className="flow-arrow arrow-6" />
      </div>
    </section>
  );
}

export default UserFlowSection;
