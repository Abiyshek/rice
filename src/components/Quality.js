import React, { useState, useEffect } from 'react';
import { Wheat, Droplets, Cog, Microscope, Check, Package, ArrowRight } from 'lucide-react';

import sourcingBg from '../assets/quality/sourcing.png';
import soakingBg from '../assets/quality/soaking_boiling.png';
import millingBg from '../assets/quality/milling.png';
import sortingBg from '../assets/quality/color_sorting.png';
import checkBg from '../assets/quality/quality_check.png';
import packagingBg from '../assets/quality/packaging.png';

const steps = [
  { num: '01', title: 'Paddy Sourcing', desc: 'Direct purchase from local farmers. Traditional & modern sampling tests on every lot.', icon: Wheat, bg: sourcingBg },
  { num: '02', title: 'Soaking & Boiling', desc: 'Precisely controlled temperature and timing parameters unique to each paddy variety.', icon: Droplets, bg: soakingBg },
  { num: '03', title: 'Milling', desc: '45-tonne/day capacity with high-speed automated machinery for maximum yield.', icon: Cog, bg: millingBg },
  { num: '04', title: 'Color Sorting', desc: 'Computerized optical color sorters remove every imperfect grain — zero compromise.', icon: Microscope, bg: sortingBg },
  { num: '05', title: 'Quality Check', desc: 'Ancestral knowledge combined with lab testing — our secret weapon for consistency.', icon: Check, bg: checkBg },
  { num: '06', title: 'Packaging', desc: 'Export-grade moisture-sealed bags protect flavor during transport across the globe.', icon: Package, bg: packagingBg },
];

const styles = {
  section: {
    position: 'relative',
    padding: '8rem 2rem',
    minHeight: '100vh',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#1a1a0e',
  },
  container: {
    position: 'relative',
    zIndex: 2,
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  headingArea: {
    textAlign: 'center',
    marginBottom: '5rem',
  },
  title: {
    fontFamily: "'Cinzel', serif",
    fontSize: 'clamp(2rem, 5vw, 3.5rem)',
    color: '#FFF8E7',
    marginBottom: '1rem',
    textShadow: '0 4px 10px rgba(0,0,0,0.5)',
  },
  subtitle: {
    fontSize: '0.9rem',
    letterSpacing: '0.4em',
    color: '#D4A017',
    textTransform: 'uppercase',
    marginBottom: 12,
    fontWeight: 700,
  },
  desc: {
    color: 'rgba(255, 248, 231, 0.8)',
    maxWidth: 500,
    margin: '0 auto',
  },
  chainWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1rem',
  },
  card: {
    width: '280px',
    height: '280px',
    borderRadius: '50%',
    padding: '2rem',
    background: 'rgba(26, 26, 14, 0.75)',
    backdropFilter: 'blur(12px)',
    border: '1.5px solid rgba(212, 160, 23, 0.15)',
    cursor: 'pointer',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    gap: '0.5rem',
    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.4)',
  },
  activeCard: {
    background: 'rgba(144, 200, 100, 0.25)',
    borderColor: '#D4A017',
    boxShadow: '0 12px 35px rgba(212, 160, 23, 0.3), inset 0 1px 0 rgba(255,255,255,0.1)',
    transform: 'translateY(-8px) scale(1.05)',
  },
  cardHeader: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.25rem',
  },
  cardNum: {
    fontFamily: "'Cinzel', serif",
    fontSize: '2rem',
    fontWeight: 900,
    color: '#D4A017',
    lineHeight: 1,
  },
  cardTitle: {
    fontFamily: "'Cinzel', serif",
    fontSize: '1.2rem',
    color: '#FFF8E7',
    fontWeight: 700,
  },
  cardDesc: {
    fontSize: '0.88rem',
    color: 'rgba(255, 248, 231, 0.75)',
    lineHeight: 1.6,
  },
  arrowContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.4s ease',
  },
  factBox: {
    marginTop: '4rem',
    textAlign: 'center',
    padding: '2rem',
    background: 'rgba(26, 26, 14, 0.8)',
    border: '1px solid rgba(212, 160, 23, 0.25)',
    borderRadius: 16,
    backdropFilter: 'blur(8px)',
  },
};

export default function Quality() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="quality" style={styles.section}>
      {/* Background cross-fade images */}
      {steps.map((s, idx) => (
        <div
          key={idx}
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `linear-gradient(rgba(26, 26, 14, 0.8), rgba(26, 26, 14, 0.8)), url(${s.bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            opacity: activeStep === idx ? 1 : 0,
            transition: 'opacity 1s ease-in-out',
            zIndex: 0,
          }}
        />
      ))}

      <style>{`
        @media (max-width: 768px) {
          .chain-arrow {
            transform: rotate(90deg);
            margin: 0.5rem 0;
          }
        }
      `}</style>

      <div style={styles.container}>
        <div style={styles.headingArea}>
          <div style={styles.subtitle}>Our Process</div>
          <h1 style={styles.title}>How We Ensure Quality</h1>
          <div style={{
            background: 'rgba(26, 26, 14, 0.65)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(212, 160, 23, 0.25)',
            borderRadius: '50px',
            padding: '0.75rem 2rem',
            maxWidth: '650px',
            margin: '0 auto',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
          }}>
            <p style={{ color: '#FFF8E7', margin: 0, fontSize: '0.95rem', fontWeight: 600 }}>
              Every grain carries our family's reputation. Here's how we protect it stage by stage.
            </p>
          </div>
        </div>

        <div style={styles.chainWrapper}>
          {steps.map((s, i) => (
            <React.Fragment key={i}>
              <div
                onClick={() => setActiveStep(i)}
                style={{
                  ...styles.card,
                  ...(activeStep === i ? styles.activeCard : {})
                }}
              >
                <div style={styles.cardHeader}>
                  {React.createElement(s.icon, { size: 28, color: activeStep === i ? '#D4A017' : 'rgba(255, 248, 231, 0.6)' })}
                  <span style={styles.cardNum}>{s.num}</span>
                </div>
                <h3 style={styles.cardTitle}>{s.title}</h3>
                <p style={styles.cardDesc}>{s.desc}</p>
              </div>

              {i < steps.length - 1 && (
                <div className="chain-arrow" style={styles.arrowContainer}>
                  <ArrowRight
                    size={24}
                    color={activeStep === i ? '#D4A017' : 'rgba(255, 248, 231, 0.3)'}
                    style={{
                      transform: activeStep === i ? 'scale(1.2)' : 'scale(1)',
                      transition: 'all 0.4s ease'
                    }}
                  />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Key fact */}
        <div style={styles.factBox}>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,248,231,0.85)', fontStyle: 'italic', fontFamily: "'Cinzel', serif" }}>
            "Knowledge transferred from our ancestors for determining rice quality — 
            <span style={{ color: '#D4A017', fontWeight: 'bold' }}> three generations of instinct, backed by modern precision."</span>
          </p>
        </div>
      </div>
    </section>
  );
}
