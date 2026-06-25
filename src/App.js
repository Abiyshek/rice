import React, { useState, useEffect, useMemo } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PaddyHistory from './components/PaddyHistory';
import About from './components/About';
import Products from './components/Products';
import Quality from './components/Quality';
import Stats from './components/Stats';
import Customers from './components/Customers';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import RiceParticles from './components/RiceParticles';
import SectionDivider from './components/SectionDivider';
import logoImg from './assets/logo/SKRM_logo.png';

/* ====================================================
   Enhanced Loading Screen — animated rice grains,
   golden progress bar, typewriter brand name
   ==================================================== */
function LoadingScreen({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  // Animated falling rice grains for loading
  const loadingGrains = useMemo(() => {
    const items = [];
    for (let i = 0; i < 18; i++) {
      items.push({
        id: i,
        left: `${Math.random() * 100}%`,
        size: 5 + Math.random() * 6,
        duration: 2.5 + Math.random() * 3,
        delay: Math.random() * 2,
        rotation: Math.random() * 360,
        color: Math.random() > 0.5 ? '#D4A017' : 'rgba(212, 160, 23, 0.5)',
      });
    }
    return items;
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 80);

    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(onFinish, 800);
    }, 4500);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [onFinish]);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: '#FAF8F5',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 99999,
      color: '#2C6B37',
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
      opacity: fadeOut ? 0 : 1,
      transition: 'opacity 0.8s ease-out',
      overflow: 'hidden',
    }}>
      <style>{`
        @keyframes pulse-glow {
          0% { transform: scale(0.95); filter: drop-shadow(0 0 15px rgba(212,160,23,0.35)); }
          50% { transform: scale(1.03); filter: drop-shadow(0 0 30px rgba(212,160,23,0.7)); }
          100% { transform: scale(0.95); filter: drop-shadow(0 0 15px rgba(212,160,23,0.35)); }
        }
        .pulse-logo {
          animation: pulse-glow 2.5s infinite ease-in-out;
          width: clamp(120px, 18vw, 170px);
          height: clamp(120px, 18vw, 170px);
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid #D4A017;
          box-shadow: 0 10px 40px rgba(0,0,0,0.5);
          display: block;
          margin: 0 auto;
        }
        .loading-text {
          font-family: 'Cinzel', serif;
          font-size: clamp(1.1rem, 2.8vw, 1.6rem);
          letter-spacing: 0.25em;
          color: #D4A017;
          margin-top: 1.5rem;
          text-transform: uppercase;
          text-shadow: 0 2px 10px rgba(212, 160, 23, 0.25);
          text-align: center;
        }
        @keyframes loadingRiceFall {
          0% { transform: translateY(-20px) rotate(var(--lr)); opacity: 0; }
          15% { opacity: 0.6; }
          85% { opacity: 0.6; }
          100% { transform: translateY(calc(100vh + 30px)) rotate(calc(var(--lr) + 200deg)); opacity: 0; }
        }
        .loading-grain {
          position: absolute;
          top: -20px;
          animation: loadingRiceFall var(--lg-dur) linear var(--lg-delay) infinite;
          pointer-events: none;
        }
        @keyframes orbitalGlow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .orbital-ring {
          position: absolute;
          width: clamp(180px, 26vw, 250px);
          height: clamp(180px, 26vw, 250px);
          border: 1px solid rgba(212, 160, 23, 0.15);
          border-top: 2px solid rgba(212, 160, 23, 0.6);
          border-radius: 50%;
          animation: orbitalGlow 3s linear infinite;
        }
        .orbital-ring-2 {
          position: absolute;
          width: clamp(210px, 30vw, 290px);
          height: clamp(210px, 30vw, 290px);
          border: 1px solid rgba(44, 107, 55, 0.1);
          border-bottom: 2px solid rgba(44, 107, 55, 0.4);
          border-radius: 50%;
          animation: orbitalGlow 5s linear infinite reverse;
        }
      `}</style>

      {/* Falling rice grains in background */}
      {loadingGrains.map(g => (
        <div
          key={g.id}
          className="loading-grain"
          style={{
            left: g.left,
            '--lr': `${g.rotation}deg`,
            '--lg-dur': `${g.duration}s`,
            '--lg-delay': `${g.delay}s`,
          }}
        >
          <svg width={g.size} height={g.size * 2.5} viewBox="0 0 10 25" fill="none">
            <ellipse cx="5" cy="12.5" rx="3.5" ry="10" fill={g.color} />
          </svg>
        </div>
      ))}

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', position: 'relative' }}>
        {/* Orbital rings around logo */}
        <div className="orbital-ring" />
        <div className="orbital-ring-2" />

        <img src={logoImg} alt="Sri Krishna Modern Rice Mill Logo" className="pulse-logo" />
        <h1 className="loading-text">Sri Krishna Modern Rice Mill</h1>

        {/* Progress bar */}
        <div style={{
          width: 'clamp(200px, 40vw, 320px)',
          height: '3px',
          background: 'rgba(212, 160, 23, 0.15)',
          borderRadius: '2px',
          marginTop: '1.8rem',
          overflow: 'hidden',
          position: 'relative',
        }}>
          <div style={{
            width: `${progress}%`,
            height: '100%',
            background: 'linear-gradient(90deg, #A0740E, #D4A017, #F1C40F)',
            borderRadius: '2px',
            transition: 'width 0.15s linear',
            boxShadow: '0 0 12px rgba(212, 160, 23, 0.5)',
          }} />
        </div>
        <div style={{
          fontSize: '0.7rem',
          color: '#5C6757',
          marginTop: '0.8rem',
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
        }}>
          Preparing Excellence...
        </div>
      </div>
    </div>
  );
}


export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [loading, setLoading] = useState(true);

  const navigateTo = (page, sectionId = null) => {
    setCurrentPage(page);
    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (loading) {
    return <LoadingScreen onFinish={() => setLoading(false)} />;
  }

  return (
    <div style={{ position: 'relative' }}>
      {/* Floating rice grain particles — full page background */}
      <RiceParticles />

      <Navbar currentPage={currentPage} navigateTo={navigateTo} />
      {currentPage === 'home' ? (
        <>
          <Hero />
          <SectionDivider variant="wave" />
          <Stats />
          <SectionDivider variant="ornament" />
          <Products />
          <SectionDivider variant="wave" flip />
          <Quality />
          <SectionDivider variant="ornament" color1="#C99414" color2="#2C6B37" />
          <Customers />
          <SectionDivider variant="wave" />
          <Testimonials />
          <SectionDivider variant="ornament" />
          <Contact />
        </>
      ) : (
        <About />
      )}
      <Footer navigateTo={navigateTo} />
    </div>
  );
}
