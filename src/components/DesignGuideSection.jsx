import React from 'react';
import variablesImg from '../assets/projects/museum/section05_variables.png';

function DesignGuideSection() {
  const colors = [
    { name: 'Primary', code: '003366', hex: '#003366', isDark: true },
    { name: 'Accent', code: 'E91A3A', hex: '#E91A3A', isDark: true },
    { name: 'Hover', code: '006540', hex: '#006540', isDark: true },
    { name: 'Black', code: '191919', hex: '#191919', isDark: true },
    { name: 'Gray', code: 'f4f4f4', hex: '#f4f4f4', isDark: false },
    { name: 'White', code: 'c4c4c4', hex: '#c4c4c4', isDark: false }
  ];

  const typography = [
    { name: 'HERO', desc: 'Desktop 40px Tablet,Mobile 32px', weight: 'Bold' },
    { name: 'HEADING1', desc: 'Desktop 32px Tablet,Mobile 24px', weight: 'SemiBold' },
    { name: 'HEADING2', desc: 'Desktop 28px Tablet,Mobile 20px', weight: 'Medium' },
    { name: 'Body', desc: 'Desktop 20px Tablet,Mobile 16px', weight: 'Regular' },
    { name: 'Small', desc: 'Desktop 20px Tablet 16px Mobile 14px', weight: 'Light' }
  ];

  return (
    <section className="design-guide-section">
      <h2 className="design-guide-title">Design Guide</h2>

      <div className="design-guide-inner">
        {/* 좌측: 컬러 가이드 */}
        <div className="dg-colors-panel">
          {/* 컬러 헤더 */}
          <div className="dg-color-header">
            <span className="dg-color-main-title">Color</span>
          </div>

          <div className="dg-colors-list">
            {colors.map((color) => (
              <div
                key={color.name}
                className={`dg-color-bar ${color.isDark ? 'is-dark' : 'is-light'}`}
                style={{ backgroundColor: color.hex }}
              >
                <div className="dg-color-text-wrap">
                  <span className="dg-color-name">{color.name}</span>
                  <span className="dg-color-code">{color.code}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 우측: 타이포 및 Variables 가이드 */}
        <div className="dg-specs-panel">
          {/* 타이포 헤더 */}
          <div className="dg-typo-header">
            <span className="dg-typo-main-title">Typography</span>
            <span className="dg-typo-sub-title">Pretendard</span>
          </div>

          {/* 타이포 리스트 */}
          <div className="dg-typo-list">
            {typography.map((typo) => (
              <div key={typo.name} className={`dg-typo-item dg-typo-item-${typo.name.toLowerCase()}`}>
                <div className="dg-typo-item-row">
                  <span className="dg-typo-name">{typo.name}</span>
                  <span className="dg-typo-weight">{typo.weight}</span>
                </div>
                <div className="dg-typo-item-row">
                  <span className="dg-typo-desc">{typo.desc}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Variables 이미지 교체 */}
          <div className="dg-variables-image-wrapper">
            <img src={variablesImg} alt="Variables Table" className="dg-variables-image" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default DesignGuideSection;
