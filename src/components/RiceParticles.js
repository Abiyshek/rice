import React, { useMemo } from 'react';

/**
 * RiceParticles — decorative floating rice grains that drift across the entire page.
 * Pure CSS animations, no canvas/WebGL. Lightweight and GPU-accelerated.
 */
export default function RiceParticles() {
  const grains = useMemo(() => {
    const items = [];
    for (let i = 0; i < 28; i++) {
      items.push({
        id: i,
        left: `${Math.random() * 100}%`,
        size: 4 + Math.random() * 8,
        opacity: 0.06 + Math.random() * 0.12,
        duration: 12 + Math.random() * 20,
        delay: Math.random() * 15,
        swayDuration: 4 + Math.random() * 6,
        rotation: Math.random() * 360,
        color: Math.random() > 0.4 ? '#C99414' : '#2C6B37',
      });
    }
    return items;
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
      }}
      aria-hidden="true"
    >
      <style>{`
        @keyframes riceFloat {
          0% {
            transform: translateY(-20px) rotate(var(--rot));
            opacity: 0;
          }
          10% {
            opacity: var(--grain-opacity);
          }
          90% {
            opacity: var(--grain-opacity);
          }
          100% {
            transform: translateY(calc(100vh + 40px)) rotate(calc(var(--rot) + 180deg));
            opacity: 0;
          }
        }
        @keyframes riceSway {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(15px); }
          75% { transform: translateX(-15px); }
        }
        .rice-grain-particle {
          position: absolute;
          top: -20px;
          animation: riceFloat var(--fall-dur) linear var(--fall-delay) infinite;
          will-change: transform, opacity;
        }
        .rice-grain-inner {
          animation: riceSway var(--sway-dur) ease-in-out infinite;
          will-change: transform;
        }
      `}</style>
      {grains.map((g) => (
        <div
          key={g.id}
          className="rice-grain-particle"
          style={{
            left: g.left,
            '--rot': `${g.rotation}deg`,
            '--grain-opacity': g.opacity,
            '--fall-dur': `${g.duration}s`,
            '--fall-delay': `${g.delay}s`,
            '--sway-dur': `${g.swayDuration}s`,
          }}
        >
          <div className="rice-grain-inner">
            <svg
              width={g.size}
              height={g.size * 2.5}
              viewBox="0 0 10 25"
              fill="none"
            >
              <ellipse cx="5" cy="12.5" rx="4" ry="11" fill={g.color} opacity="0.7" />
              <ellipse cx="5" cy="12.5" rx="2" ry="9" fill={g.color} opacity="0.3" />
            </svg>
          </div>
        </div>
      ))}
    </div>
  );
}
