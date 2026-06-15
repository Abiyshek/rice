import React, { useEffect, useRef, useState } from 'react';
import { Calendar, Cog, Users, Archive, Wheat, Factory } from 'lucide-react';

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

function StatCard({ stat, active }) {
  const count = useCounter(stat.value, active);
  const fillPercentage = stat.value ? (count / stat.value) * 100 : 0;

  return (
    <div style={{
      textAlign: 'center', padding: '2.5rem 1.25rem',
      background: 'rgba(26, 26, 14, 0.75)',
      backdropFilter: 'blur(16px)',
      border: '1.5px solid rgba(212, 160, 23, 0.2)',
      borderRadius: '20px',
      position: 'relative',
      overflow: 'hidden',
      transition: 'all 0.3s ease',
      boxShadow: '0 8px 30px rgba(0, 0, 0, 0.3)',
      backgroundImage: 'linear-gradient(rgba(212, 160, 23, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(212, 160, 23, 0.03) 1px, transparent 1px)',
      backgroundSize: '20px 20px',
    }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = '#D4A017';
        e.currentTarget.style.transform = 'translateY(-5px)';
        e.currentTarget.style.boxShadow = '0 12px 35px rgba(212, 160, 23, 0.15)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'rgba(212, 160, 23, 0.2)';
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.3)';
      }}
    >
      <span style={{ position: 'absolute', top: 8, left: 8, fontSize: '0.55rem', color: 'rgba(212, 160, 23, 0.35)', fontFamily: 'monospace' }}>[x, y]</span>
      {React.createElement(stat.icon, { size: 28, style: { marginBottom: 12, color: '#D4A017' } })}
      <div style={{
        fontFamily: "'Cinzel', serif",
        fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
        fontWeight: 900, color: '#FFF8E7',
        lineHeight: 1.2,
        wordWrap: 'break-word',
        overflowWrap: 'break-word',
        minHeight: '3.2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textShadow: '0 2px 10px rgba(212, 160, 23, 0.2)',
      }}>
        {count.toLocaleString()}{stat.suffix}
      </div>
      <div style={{ fontSize: '0.8rem', color: 'rgba(255, 248, 231, 0.7)', marginTop: 8, letterSpacing: '0.05em', fontWeight: 600 }}>
        {stat.label}
      </div>
      <div style={{
        height: '4px',
        width: '80%',
        background: 'rgba(255, 255, 255, 0.08)',
        borderRadius: '2px',
        margin: '1.5rem auto 0 auto',
        overflow: 'hidden',
        position: 'relative'
      }}>
        <div style={{
          height: '100%',
          width: `${fillPercentage}%`,
          background: 'linear-gradient(90deg, #D4A017, #E8623A)',
          borderRadius: '2px',
          transition: 'width 0.1s ease-out'
        }} />
      </div>
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
      background: 'transparent',
      padding: '6rem 3rem', minHeight: 'auto',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Gold shimmer line */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 2,
        background: 'linear-gradient(90deg, transparent, #D4A017, #E8623A, transparent)',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{ fontSize: '0.9rem', letterSpacing: '0.4em', color: '#000000', textTransform: 'uppercase', marginBottom: 12, fontWeight: 700 }}>
            By The Numbers
          </div>
          <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#FFF8E7' }}>
            The Scale of Our Excellence
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: '1.5rem', padding: '1rem 0' }}>
          {stats.map((s, i) => <StatCard key={i} stat={s} active={active} />)}
        </div>
      </div>
    </section>
  );
}
