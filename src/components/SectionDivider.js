import React from 'react';

/**
 * SectionDivider — decorative SVG dividers with rice/wheat motifs.
 * Two variants: "wave" (flowing wave shape) and "ornament" (centered wheat with lines).
 * Place between sections to add visual rhythm.
 */
export default function SectionDivider({ variant = 'wave', flip = false, color1 = '#2C6B37', color2 = '#C99414' }) {
  if (variant === 'wave') {
    return (
      <div
        style={{
          width: '100%',
          overflow: 'hidden',
          lineHeight: 0,
          transform: flip ? 'rotate(180deg)' : 'none',
          margin: '-1px 0',
          position: 'relative',
          zIndex: 2,
        }}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          style={{ width: '100%', height: '80px', display: 'block' }}
        >
          <defs>
            <linearGradient id={`wave-grad-${flip ? 'f' : 'n'}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={color1} stopOpacity="0.15" />
              <stop offset="50%" stopColor={color2} stopOpacity="0.12" />
              <stop offset="100%" stopColor={color1} stopOpacity="0.15" />
            </linearGradient>
          </defs>
          {/* Main wave */}
          <path
            d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z"
            fill={`url(#wave-grad-${flip ? 'f' : 'n'})`}
          />
          {/* Accent wave */}
          <path
            d="M0,80 C320,40 640,100 960,60 C1120,40 1280,80 1440,70 L1440,120 L0,120 Z"
            fill={color1}
            opacity="0.06"
          />
          {/* Decorative rice grain dots along the wave */}
          {[120, 360, 600, 840, 1080, 1320].map((x, i) => (
            <g key={i} transform={`translate(${x}, ${50 + Math.sin(i * 1.2) * 15})`}>
              <ellipse rx="3" ry="7" fill={color2} opacity="0.25" transform={`rotate(${30 + i * 15})`} />
            </g>
          ))}
        </svg>
      </div>
    );
  }

  // Ornament variant — centered wheat/rice graphic with decorative lines
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0',
        padding: '2.5rem 2rem',
        width: '100%',
        position: 'relative',
        zIndex: 2,
      }}
      aria-hidden="true"
    >
      <style>{`
        @keyframes ornamentSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .ornament-wheat {
          animation: ornamentGlow 3s ease-in-out infinite;
        }
        @keyframes ornamentGlow {
          0%, 100% { filter: drop-shadow(0 0 4px rgba(201, 148, 20, 0.2)); }
          50% { filter: drop-shadow(0 0 12px rgba(201, 148, 20, 0.5)); }
        }
      `}</style>
      {/* Left decorative line */}
      <div style={{ flex: 1, maxWidth: '300px', height: '1px', position: 'relative' }}>
        <div style={{ 
          width: '100%', height: '1px', 
          background: `linear-gradient(90deg, transparent, ${color1}40, ${color2}60)`,
        }} />
        <div style={{ 
          width: '60%', height: '1px', marginTop: '4px',
          background: `linear-gradient(90deg, transparent, ${color2}30)`,
          marginLeft: 'auto'
        }} />
      </div>

      {/* Center wheat ornament */}
      <div style={{ padding: '0 1.5rem', flexShrink: 0 }} className="ornament-wheat">
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
          {/* Central stem */}
          <line x1="25" y1="45" x2="25" y2="8" stroke={color2} strokeWidth="1.5" />
          {/* Left grains */}
          {[12, 18, 24, 30].map((y, i) => (
            <ellipse key={`l${i}`} cx={21 - i * 0.5} cy={y} rx="3" ry="5" fill={color2}
              opacity={0.6 + i * 0.1} transform={`rotate(-20, ${21 - i * 0.5}, ${y})`} />
          ))}
          {/* Right grains */}
          {[12, 18, 24, 30].map((y, i) => (
            <ellipse key={`r${i}`} cx={29 + i * 0.5} cy={y} rx="3" ry="5" fill={color2}
              opacity={0.6 + i * 0.1} transform={`rotate(20, ${29 + i * 0.5}, ${y})`} />
          ))}
          {/* Top grain */}
          <ellipse cx="25" cy="6" rx="2.5" ry="5" fill={color2} opacity="0.9" />
          {/* Small accent dots */}
          <circle cx="25" cy="40" r="2" fill={color1} opacity="0.4" />
        </svg>
      </div>

      {/* Right decorative line */}
      <div style={{ flex: 1, maxWidth: '300px', height: '1px', position: 'relative' }}>
        <div style={{
          width: '100%', height: '1px',
          background: `linear-gradient(90deg, ${color2}60, ${color1}40, transparent)`,
        }} />
        <div style={{
          width: '60%', height: '1px', marginTop: '4px',
          background: `linear-gradient(90deg, ${color2}30, transparent)`,
        }} />
      </div>
    </div>
  );
}
