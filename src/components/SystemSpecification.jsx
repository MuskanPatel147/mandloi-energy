import React from 'react';

const SPECIFICATIONS = [
  {
    label: 'SOLAR PV MODULES',
    value: 'Adani / Waaree',
    detail: 'TOPCon 610–650 Wp',
  },
  {
    label: 'INVERTER',
    value: 'Havells / Polycab',
  },
  {
    label: 'MODULE ELEVATED STRUCTURE',
    value: 'JSW GI / Hot Dip',
    detail: '140° × 50 C-channel,\n140° × 50 rafter,\n41° × 41 purlin',
  },
  {
    label: 'OUTPUT WARRANTY',
    value: '27 / 30 Years',
    detail: 'Performance',
  },
  {
    label: 'STANDARD DISCOM COMPLIANT',
    value: '100% Assured',
  },
];

export default function SystemSpecification() {
  return (
    <aside className="spec-card" aria-label="System Specification">
      <div className="spec-card-header">
        <h2 className="spec-card-title">SYSTEM SPECIFICATION</h2>
        <span className="spec-card-badge">SOLAR SOLUTIONS</span>
      </div>

      <div className="spec-list">
        {SPECIFICATIONS.map((spec) => (
          <div className="spec-row" key={spec.label}>
            <div className="spec-label-col">
              <span className="spec-label">{spec.label}</span>
            </div>
            <div className="spec-value-col">
              <span className="spec-value">{spec.value}</span>
              {spec.detail && (
                <span className="spec-detail">
                  {spec.detail.split('\n').map((line, idx) => (
                    <React.Fragment key={idx}>
                      {line}
                      {idx < spec.detail.split('\n').length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}
