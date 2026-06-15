import React, { useState, useEffect } from 'react';
import { Wheat, ChevronDown } from 'lucide-react';

import bg1 from '../assets/bg/bg1.png';
import bg2 from '../assets/bg/bg2.png';
import bg3 from '../assets/bg/bg3.png';

const backgrounds = [bg1, bg2, bg3];

export default function Hero() {
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgrounds.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section style={{ position: 'relative', height: '100vh', overflow: 'hidden', backgroundColor: '#1a1a0e' }}>
      
      {/* Background Slideshow */}
      {backgrounds.map((bg, idx) => (
        <div
          key={idx}
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `linear-gradient(rgba(26, 26, 14, 0.4), rgba(26, 26, 14, 0.65)), url(${bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: bgIndex === idx ? 1 : 0,
            transition: 'opacity 1.5s ease-in-out',
            zIndex: 0,
            transform: bgIndex === idx ? 'scale(1.08)' : 'scale(1)',
            animation: bgIndex === idx ? 'kenburns 12s infinite alternate ease-in-out' : 'none',
          }}
        />
      ))}

      {/* CSS Keyframe animations for Ken Burns & fade effects */}
      <style>{`
        @keyframes kenburns {
          0% { transform: scale(1.03) translate(0px, 0px); }
          100% { transform: scale(1.1) translate(-10px, -5px); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(10px); }
        }
      `}</style>

      {/* Grain texture overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.75\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.04\'/%3E%3C/svg%3E")',
        opacity: 0.5, pointerEvents: 'none',
        zIndex: 1,
      }} />

      <div style={{
        position: 'relative', zIndex: 2,
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        height: '100%', textAlign: 'center', padding: '0 2rem',
      }}>
        <div style={{
          fontSize: '0.8rem', letterSpacing: '0.4em', textTransform: 'uppercase',
          color: '#FFF8E7', marginBottom: '1.5rem',
          fontWeight: 700,
          animation: 'fadeUp 0.8s ease both',
          textShadow: '0 2px 8px rgba(0,0,0,0.6)',
          display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center',
        }}>
          <Wheat size={16} color="#D4A017" /> Since 1960 · Puducherry, India
        </div>

        <h1 style={{
          fontFamily: "'Cinzel', serif",
          fontSize: 'clamp(3rem, 8vw, 7rem)',
          fontWeight: 900, lineHeight: 1.0,
          color: '#FFF8E7',
          textShadow: '0 0 80px rgba(212,160,23,0.5), 0 4px 20px rgba(0,0,0,0.6)',
          marginBottom: '0.5rem',
          animation: 'fadeUp 1s ease 0.2s both',
        }}>
          Sri Krishna
        </h1>
        <h1 style={{
          fontFamily: "'Cinzel', serif",
          fontSize: 'clamp(1.5rem, 4vw, 3.5rem)',
          fontWeight: 700, fontStyle: 'normal',
          color: '#D4A017',
          marginBottom: '2rem',
          animation: 'fadeUp 1s ease 0.4s both',
          textShadow: '0 2px 8px rgba(0,0,0,0.6)',
        }}>
          Modern Rice Mill
        </h1>

        <div style={{
          background: 'rgba(26, 26, 14, 0.65)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(212, 160, 23, 0.25)',
          borderRadius: '20px',
          padding: '1.25rem 2.25rem',
          maxWidth: '650px',
          marginBottom: '3rem',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
          animation: 'fadeUp 1s ease 0.6s both',
        }}>
          <p style={{
            fontSize: 'clamp(0.95rem, 1.8vw, 1.15rem)',
            color: '#FFF8E7',
            lineHeight: 1.8,
            fontWeight: 600,
            margin: 0,
          }}>
            From a humble 800 sq.ft. mill in 1960 to Tamilnadu's finest rice processor —
            delivering <span style={{ color: '#D4A017', fontWeight: 800 }}>45 tonnes of purity</span> every single day.
          </p>
        </div>

        <div style={{ display: 'flex', gap: '1rem', animation: 'fadeUp 1s ease 0.8s both' }}>
          <button onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              background: 'linear-gradient(135deg, #D4A017, #E8623A)',
              color: '#1A1A0E', padding: '1rem 2.5rem',
              borderRadius: '50px', border: 'none',
              fontFamily: "'Raleway', sans-serif",
              fontWeight: 700, fontSize: '1rem', cursor: 'pointer',
              boxShadow: '0 0 40px rgba(212,160,23,0.4)',
              transition: 'all 0.3s',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-3px)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
          >
            Explore Our Rice
          </button>
          <button onClick={() => document.getElementById('history')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              background: 'rgba(255,248,231,0.15)',
              color: '#FFF8E7', padding: '1rem 2.5rem',
              borderRadius: '50px', border: '2px solid #D4A017',
              fontFamily: "'Raleway', sans-serif",
              fontWeight: 700, fontSize: '1rem', cursor: 'pointer',
              transition: 'all 0.3s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#E8623A'; e.currentTarget.style.color = '#FFF8E7'; e.currentTarget.style.background = 'rgba(232,98,58,0.2)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = '#D4A017'; e.currentTarget.style.color = '#FFF8E7'; e.currentTarget.style.background = 'rgba(255,248,231,0.15)'; }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              Our Journey <ChevronDown size={18} />
            </span>
          </button>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: 'absolute', bottom: '2rem',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
          color: '#D4A017', fontSize: '0.75rem',
          animation: 'bounce 2s infinite',
          fontWeight: 700,
        }}>
          <span>scroll</span>
          <div style={{ width: 1, height: 50, background: 'linear-gradient(#D4A017, transparent)' }} />
        </div>
      </div>
    </section>
  );
}
