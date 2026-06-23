import React, { useEffect, useRef, useState } from 'react';
import { Calendar, Cog, Users, Archive, Wheat, Factory } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import statsBg from '../assets/bg/stats_bg.png';

const stats = [
  { value: 65, suffix: '+', label: 'Years of Legacy', icon: Calendar },
  { value: 45, suffix: 'T', label: 'Tonnes Processed Daily', icon: Cog },
  { value: 150, suffix: '+', label: 'Employees', icon: Users },
  { value: 3000, suffix: 'MT', label: 'Storage Capacity', icon: Archive },
  { value: 20, suffix: '+', label: 'Rice Varieties', icon: Wheat },
  { value: 8, suffix: 'AC', label: 'Facility Area', icon: Factory },
];

function useCounter(target, active, duration = 1800) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start = Math.min(start + step, target);
      setCount(Math.floor(start));
      if (start >= target) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);
  return count;
}

function StatCard({ stat, active, index }) {
  const count = useCounter(stat.value, active);
  const fillPercentage = stat.value ? (count / stat.value) * 100 : 0;
  const [hovered, setHovered] = useState(false);

  return (
    <ScrollReveal direction="up" delay={index * 0.1} duration={0.7}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          textAlign: 'center', padding: '2.5rem 1.25rem',
          background: hovered ? 'linear-gradient(135deg, #2C6B37 0%, #0066CC 100%)' : '#FFFFFF',
          border: hovered ? '3px solid transparent' : '3px solid #5C3D24',
          borderRadius: '20px',
          position: 'relative',
          overflow: 'hidden',
          transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
          boxShadow: hovered ? '0 15px 40px rgba(0, 102, 204, 0.2)' : '0 8px 30px rgba(0, 0, 0, 0.02)',
          transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
          cursor: 'pointer',
        }}
      >
        <div className={hovered ? '' : 'icon-bounce'} style={{ transition: 'all 0.3s' }}>
          {React.createElement(stat.icon, { size: 28, style: { marginBottom: 12, color: hovered ? '#FFFFFF' : '#2C6B37', transition: 'color 0.3s' } })}
        </div>
        <div style={{
          fontFamily: "'Cinzel', serif",
          fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
          fontWeight: 900,
          color: hovered ? '#FFFFFF' : '#1C231A',
          lineHeight: 1.2,
          wordWrap: 'break-word',
          overflowWrap: 'break-word',
          minHeight: '3.2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'color 0.3s'
        }}>
          {count.toLocaleString()}{stat.suffix}
        </div>
        <div style={{
          fontSize: '0.8rem',
          color: hovered ? '#EAECEE' : '#5C6757',
          marginTop: 8,
          letterSpacing: '0.05em',
          fontWeight: 700,
          textTransform: 'uppercase',
          transition: 'color 0.3s'
        }}>
          {stat.label}
        </div>
        <div style={{
          height: '4px',
          width: '80%',
          background: hovered ? 'rgba(255, 255, 255, 0.2)' : 'rgba(44, 107, 55, 0.08)',
          borderRadius: '2px',
          margin: '1.5rem auto 0 auto',
          overflow: 'hidden',
          position: 'relative',
          transition: 'background 0.3s'
        }}>
          <div style={{
            height: '100%',
            width: `${fillPercentage}%`,
            background: hovered ? '#FFFFFF' : 'linear-gradient(90deg, #2C6B37, #4B9B5E)',
            borderRadius: '2px',
            transition: 'width 0.1s ease-out, background 0.3s'
          }} />
        </div>
      </div>
    </ScrollReveal>
  );
}

/** Decorative wheat stalk SVGs on the sides */
function WheatDecoration({ side = 'left' }) {
  const isLeft = side === 'left';
  return (
    <div className="float-animation" style={{
      position: 'absolute',
      [isLeft ? 'left' : 'right']: '-20px',
      top: '50%',
      transform: `translateY(-50%) ${isLeft ? '' : 'scaleX(-1)'}`,
      opacity: 0.12,
      pointerEvents: 'none',
      zIndex: 1,
    }}>
      <svg width="60" height="300" viewBox="0 0 60 300" fill="none">
        <path d="M30,290 Q15,150 30,10" stroke="#C99414" strokeWidth="2" fill="none" />
        {Array.from({ length: 10 }).map((_, i) => {
          const y = 30 + i * 25;
          const dir = i % 2 === 0 ? 1 : -1;
          return (
            <ellipse key={i} cx={30 + dir * 12} cy={y} rx="6" ry="10" fill="#C99414"
              transform={`rotate(${dir * 25}, ${30 + dir * 12}, ${y})`} />
          );
        })}
      </svg>
    </div>
  );
}

export default function Stats() {
  const ref = useRef();
  const [active, setActive] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setActive(true); }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} style={{
      backgroundImage: `linear-gradient(rgba(253, 250, 245, 0.70), rgba(247, 239, 227, 0.70)), url(${statsBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      padding: '6rem 3rem', minHeight: 'auto',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Decorative wheat stalks on both sides */}
      <WheatDecoration side="left" />
      <WheatDecoration side="right" />

      {/* Green shimmer line */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 2,
        background: 'linear-gradient(90deg, transparent, #2C6B37, #4B9B5E, transparent)',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 2 }}>
        <ScrollReveal direction="up">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{ fontSize: '0.9rem', letterSpacing: '0.4em', color: '#2C6B37', textTransform: 'uppercase', marginBottom: 12, fontWeight: 800 }}>
              By The Numbers
            </div>
            <h2 className="gold-shimmer-text" style={{ fontFamily: "'Cinzel', serif", fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#1C231A' }}>
              The Scale of Our Excellence
            </h2>
          </div>
        </ScrollReveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: '1.5rem', padding: '1rem 0' }}>
          {stats.map((s, i) => <StatCard key={i} stat={s} active={active} index={i} />)}
        </div>
      </div>
    </section>
  );
}
