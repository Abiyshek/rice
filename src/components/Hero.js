import React, { useState, useEffect, useMemo } from 'react';
import { Wheat, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import logoImg from '../assets/logo/SKRM_logo.png';
import heritageBg from '../assets/bg/paddy_lifecycle_bg.png';
import slide1Bg from '../assets/bg/hero_slide1_bg.png';
import slide2Bg from '../assets/bg/hero_slide2_bg.png';

// Import collage images for slide 1
import sowingImg from '../assets/collage/paddy_sowing.png';
import transplantingImg from '../assets/collage/paddy_transplanting.png';
import harvestingImg from '../assets/collage/paddy_harvesting.png';
import processingImg from '../assets/collage/paddy_processing.png';

import productImg from '../assets/product/Screenshot 2026-06-01 104018.png';

const collageStages = [
  { id: 'sowing', name: 'Sowing', img: sowingImg },
  { id: 'transplanting', name: 'Transplanting', img: transplantingImg },
  { id: 'harvesting', name: 'Harvesting', img: harvestingImg },
  { id: 'processing', name: 'Milling', img: processingImg }
];

/** Golden sparkle particles for heritage slide */
function GoldenSparkles() {
  const sparkles = useMemo(() => {
    const items = [];
    for (let i = 0; i < 20; i++) {
      items.push({
        id: i,
        left: `${10 + Math.random() * 80}%`,
        top: `${10 + Math.random() * 80}%`,
        size: 2 + Math.random() * 4,
        delay: Math.random() * 5,
        duration: 2 + Math.random() * 3,
      });
    }
    return items;
  }, []);

  return (
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1 }}>
      {sparkles.map(s => (
        <div key={s.id} style={{
          position: 'absolute',
          left: s.left,
          top: s.top,
          width: `${s.size}px`,
          height: `${s.size}px`,
          background: 'radial-gradient(circle, #F1C40F, transparent)',
          borderRadius: '50%',
          animation: `sparkle ${s.duration}s ease-in-out ${s.delay}s infinite`,
        }} />
      ))}
    </div>
  );
}

/** Decorative rice grains orbiting the central logo on slide 1 */
function OrbitingGrains() {
  return (
    <div style={{
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      pointerEvents: 'none',
      zIndex: 4,
    }}>
      <style>{`
        @keyframes orbit1 {
          from { transform: rotate(0deg) translateX(clamp(170px, 25vw, 220px)) rotate(0deg); }
          to { transform: rotate(360deg) translateX(clamp(170px, 25vw, 220px)) rotate(-360deg); }
        }
        @keyframes orbit2 {
          from { transform: rotate(120deg) translateX(clamp(185px, 27vw, 235px)) rotate(-120deg); }
          to { transform: rotate(480deg) translateX(clamp(185px, 27vw, 235px)) rotate(-480deg); }
        }
        @keyframes orbit3 {
          from { transform: rotate(240deg) translateX(clamp(175px, 26vw, 225px)) rotate(-240deg); }
          to { transform: rotate(600deg) translateX(clamp(175px, 26vw, 225px)) rotate(-600deg); }
        }
      `}</style>
      {[
        { anim: 'orbit1', dur: '12s', color: '#C99414', size: 6 },
        { anim: 'orbit2', dur: '15s', color: '#2C6B37', size: 5 },
        { anim: 'orbit3', dur: '18s', color: '#D4A017', size: 7 },
      ].map((grain, i) => (
        <div key={i} style={{
          position: 'absolute',
          animation: `${grain.anim} ${grain.dur} linear infinite`,
          willChange: 'transform',
        }}>
          <svg width={grain.size} height={grain.size * 2.5} viewBox="0 0 10 25" fill="none">
            <ellipse cx="5" cy="12.5" rx="4" ry="11" fill={grain.color} opacity="0.6" />
          </svg>
        </div>
      ))}
    </div>
  );
}

// Sri Krishna Hero Landing Carousel
export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 991);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-slide
  useEffect(() => {
    const delay = activeSlide === 0 ? 8000 : 5000;
    const timer = setTimeout(() => {
      setActiveSlide((prev) => (prev + 1) % 3);
    }, delay);
    return () => clearTimeout(timer);
  }, [activeSlide]);

  return (
    <section style={{
      position: 'relative',
      height: '100vh',
      minHeight: '680px',
      overflow: 'hidden',
      backgroundColor: activeSlide === 0 ? '#FAF8F5' : activeSlide === 1 ? '#E2ECE9' : '#FAF6EB',
      transition: 'background-color 0.8s ease',
      margin: 0,
      padding: 0,
    }}>

      {/* Slide Navigation Arrows */}
      <button
        onClick={() => setActiveSlide((prev) => (prev === 0 ? 2 : prev - 1))}
        style={{
          position: 'absolute',
          left: '20px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 15,
          background: 'rgba(255, 255, 255, 0.85)',
          border: 'none',
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          color: '#2C6B37',
          boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={e => { e.currentTarget.style.background = '#FFFFFF'; e.currentTarget.style.transform = 'translateY(-50%) scale(1.08)'; }}
        onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.85)'; e.currentTarget.style.transform = 'translateY(-50%) scale(1)'; }}
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={() => setActiveSlide((prev) => (prev === 2 ? 0 : prev + 1))}
        style={{
          position: 'absolute',
          right: '20px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 15,
          background: 'rgba(255, 255, 255, 0.85)',
          border: 'none',
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          color: '#2C6B37',
          boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={e => { e.currentTarget.style.background = '#FFFFFF'; e.currentTarget.style.transform = 'translateY(-50%) scale(1.08)'; }}
        onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.85)'; e.currentTarget.style.transform = 'translateY(-50%) scale(1)'; }}
      >
        <ChevronRight size={24} />
      </button>

      {/* Main Slide Wrapper */}
      <div style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
      }}>
        <div style={{
          display: 'flex',
          width: '300%',
          height: '100%',
          transform: `translateX(-${activeSlide * (100 / 3)}%)`,
          transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        }}>

          {/* ========================================================
              SLIDE 0: Overlapping Circles visual theme (Mahavir style)
              ======================================================== */}
          <div style={{
            width: '33.333%',
            height: '100%',
            position: 'relative',
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), url(${heritageBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: 'center',
            justifyContent: isMobile ? 'center' : 'space-between',
            padding: isMobile ? '6.5rem 1.5rem 1.5rem 1.5rem' : '6.5rem 3rem 3rem 3rem',
            boxSizing: 'border-box',
            gap: isMobile ? '1.5rem' : '1.5rem',
          }}>
            {/* Left Column: Text Card */}
            <div style={{
              flex: isMobile ? '1 1 auto' : '1 1 40%',
              maxWidth: isMobile ? '100%' : '480px',
              zIndex: 5,
              display: 'flex',
              flexDirection: 'column',
              textAlign: isMobile ? 'center' : 'left',
              alignItems: isMobile ? 'center' : 'flex-start',
            }}>
              <div style={{
                background: 'rgba(255, 255, 255, 0.95)',
                border: '3px solid #5C3D24',
                borderRadius: '24px',
                padding: isMobile ? '1.5rem' : '2rem',
                width: '100%',
                boxShadow: '0 15px 35px rgba(0,0,0,0.12)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.1rem',
                alignItems: isMobile ? 'center' : 'flex-start',
              }}>
                {isMobile && (
                  <div style={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    border: '3.5px solid #2C6B37',
                    background: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '0.4rem',
                    boxShadow: '0 8px 24px rgba(44, 107, 55, 0.15)',
                    alignSelf: 'center',
                    overflow: 'hidden',
                  }}>
                    <img 
                      src={logoImg} 
                      alt="SKRM Logo" 
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover', 
                        borderRadius: '50%' 
                      }} 
                    />
                  </div>
                )}
                <div style={{
                  fontFamily: "'Playfair Display', serif",
                  fontStyle: 'italic',
                  fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
                  color: '#C99414',
                  fontWeight: 600,
                }}>
                  From Field to Fork
                </div>
                <h1 style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
                  fontWeight: 900,
                  lineHeight: 1.15,
                  color: '#1C231A',
                  margin: 0,
                }}>
                  WE DELIVER<br />QUALITY
                </h1>
                <p style={{
                  fontFamily: "'Raleway', sans-serif",
                  fontSize: 'clamp(0.85rem, 1.8vw, 1.02rem)',
                  color: '#5C6757',
                  lineHeight: 1.6,
                  margin: 0,
                }}>
                  Your source for premium South Indian rice varieties. Empowering households with 45 tonnes of pure, automated sorting excellence daily.
                </p>
                <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap', marginTop: '0.4rem', justifyContent: isMobile ? 'center' : 'flex-start' }}>
                  <button
                    onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                    className="glow-pulse-btn"
                    style={{
                      background: 'linear-gradient(135deg, #2C6B37, #4B9B5E)',
                      color: '#FFFFFF',
                      padding: '0.8rem 1.8rem',
                      borderRadius: '50px',
                      border: 'none',
                      fontFamily: "'Raleway', sans-serif",
                      fontWeight: 800,
                      fontSize: '0.8rem',
                      cursor: 'pointer',
                      boxShadow: '0 4px 15px rgba(44, 107, 55, 0.25)',
                      transition: 'all 0.3s ease',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}
                  >
                    Our Varieties
                  </button>
                  <button
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    style={{
                      background: 'transparent',
                      color: '#1C231A',
                      padding: '0.8rem 1.8rem',
                      borderRadius: '50px',
                      border: '2px solid #C99414',
                      fontFamily: "'Raleway', sans-serif",
                      fontWeight: 800,
                      fontSize: '0.8rem',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = '#C99414'; e.currentTarget.style.color = '#FFFFFF'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#1C231A'; }}
                  >
                    Get a Quote
                  </button>
                </div>
              </div>
            </div>

            {/* Center Column: Logo (Desktop Only) */}
            {!isMobile && (
              <div style={{
                flex: '0 0 240px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10,
              }}>
                <div style={{
                  width: '220px',
                  height: '220px',
                  borderRadius: '50%',
                  border: '6px solid #2C6B37',
                  background: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 25px 55px rgba(44, 107, 55, 0.28)',
                  overflow: 'hidden',
                  transform: 'translateX(65px)',
                }}>
                  <img 
                    src={logoImg} 
                    alt="SKRM Logo" 
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover', 
                      borderRadius: '50%' 
                    }} 
                  />
                </div>
              </div>
            )}

            {/* Right Column: 3 Overlapping circles (Desktop Only) */}
            {!isMobile && (
              <div style={{
                flex: '1 1 40%',
                position: 'relative',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 5,
              }}>
                {/* Container for absolute circles */}
                <div style={{
                  position: 'relative',
                  width: '400px',
                  height: '400px',
                }}>
                  {/* Orbiting grains around circles */}
                  <OrbitingGrains />

                  {/* Left Circle: Paddy Harvesting */}
                  <div style={{
                    position: 'absolute',
                    left: '0px',
                    top: '80px',
                    width: '160px',
                    height: '160px',
                    borderRadius: '50%',
                    border: '4px solid #C99414',
                    overflow: 'hidden',
                    boxShadow: '0 12px 35px rgba(0,0,0,0.3)',
                    zIndex: 3,
                  }}>
                    <img src={harvestingImg} alt="Harvesting" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>

                  {/* Top/Right Circle: Processing */}
                  <div style={{
                    position: 'absolute',
                    left: '200px',
                    top: '10px',
                    width: '180px',
                    height: '180px',
                    borderRadius: '50%',
                    border: '4px solid #2C6B37',
                    overflow: 'hidden',
                    boxShadow: '0 12px 35px rgba(0,0,0,0.3)',
                    zIndex: 2,
                  }}>
                    <img src={processingImg} alt="Processing" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>

                  {/* Center/Bottom Circle: Scoop of raw rice grains */}
                  <div style={{
                    position: 'absolute',
                    left: '110px',
                    top: '200px',
                    width: '170px',
                    height: '170px',
                    borderRadius: '50%',
                    border: '4px solid #C99414',
                    overflow: 'hidden',
                    boxShadow: '0 12px 35px rgba(0,0,0,0.3)',
                    zIndex: 4,
                  }}>
                    <img src={productImg} alt="Raw Rice Scoop" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>

                  {/* Decorative SVG connection lines and pointers */}
                  <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 1 }}>
                    {/* Line to Top Circle label */}
                    <line x1="290" y1="100" x2="395" y2="75" stroke="#2C6B37" strokeWidth="2" strokeDasharray="4 4" />
                    <circle cx="395" cy="75" r="4" fill="#2C6B37" />
                  </svg>

                  <div style={{
                    position: 'absolute',
                    left: '405px',
                    top: '65px',
                    width: '120px',
                    textAlign: 'left',
                    color: '#1C231A',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    textShadow: '0 1px 2px rgba(255,255,255,0.8)',
                    zIndex: 5,
                  }}>
                    Hygienic Sorting & Modern Packaging
                  </div>
                </div>
              </div>
            )}
          </div>


          {/* ========================================================
              SLIDE 1: Illustrative Split Banner
              ======================================================== */}
          <div style={{
            width: '33.333%',
            height: '100%',
            position: 'relative',
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), url(${slide1Bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: isMobile ? '6.5rem 1.5rem 1.5rem 1.5rem' : '6.5rem 6.5rem 3rem 6.5rem',
            boxSizing: 'border-box',
          }}>
            {/* Left Text Column — staggered fade-in */}
            <div style={{
              flex: '1 1 100%',
              zIndex: 5,
              maxWidth: '800px',
              textAlign: 'left',
              display: 'flex',
              flexDirection: 'column',
            }}>
              <div style={{
                background: 'rgba(255, 255, 255, 0.95)',
                border: '3px solid #5C3D24',
                borderRadius: '24px',
                padding: isMobile ? '1.5rem' : '2.5rem',
                maxWidth: '600px',
                width: '100%',
                boxShadow: '0 15px 35px rgba(0,0,0,0.12)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.1rem',
                alignItems: 'flex-start',
                animation: activeSlide === 1 ? 'bounceIn 0.7s ease 0.2s both' : 'none',
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  fontSize: '0.8rem',
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                  color: '#2C6B37',
                  fontWeight: 800,
                }}>
                  <Wheat size={16} /> Annual Rice Harvest 2026
                </div>

                <h1 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
                  fontWeight: 900,
                  lineHeight: 1.15,
                  color: '#1C231A',
                  margin: 0,
                }}>
                  Rooted.<br />
                  Reignited.<br />
                  Reimagined.
                </h1>

                <p style={{
                  fontSize: 'clamp(0.85rem, 1.8vw, 1.02rem)',
                  lineHeight: 1.6,
                  color: '#5C6757',
                  fontWeight: 500,
                  margin: 0,
                }}>
                  Over three generations of agricultural heritage combined with state-of-the-art automation. Supplying pure, nutrient-rich South Indian Ponni and Sona Masuri grains daily.
                </p>

                <div style={{ marginTop: '0.4rem' }}>
                  <button
                    onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                    className="glow-pulse-btn"
                    style={{
                      background: 'linear-gradient(135deg, #2C6B37, #4B9B5E)',
                      color: '#FFFFFF',
                      padding: '0.8rem 1.8rem',
                      borderRadius: '30px',
                      border: 'none',
                      fontFamily: "'Raleway', sans-serif",
                      fontWeight: 800,
                      fontSize: '0.8rem',
                      cursor: 'pointer',
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                      boxShadow: '0 4px 15px rgba(44, 107, 55, 0.25)',
                      transition: 'all 0.3s ease',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                    }}
                  >
                    Our Varieties <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================
              SLIDE 2: Heritage Showcase + Golden Sparkles
              ======================================================== */}
          <div style={{
            width: '33.333%',
            height: '100%',
            position: 'relative',
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), url(${slide2Bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: isMobile ? '6.5rem 1.5rem 1.5rem 1.5rem' : '6.5rem 6.5rem 3rem 6.5rem',
            boxSizing: 'border-box',
          }}>
            {/* Golden sparkle particles */}
            {activeSlide === 2 && <GoldenSparkles />}

            <div style={{
              maxWidth: '800px',
              position: 'relative',
              zIndex: 2,
            }}>
              <div style={{
                background: 'rgba(255, 255, 255, 0.95)',
                border: '3px solid #5C3D24',
                borderRadius: '24px',
                padding: isMobile ? '1.5rem' : '2.5rem',
                maxWidth: '650px',
                width: '100%',
                boxShadow: '0 15px 35px rgba(0,0,0,0.12)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.1rem',
                alignItems: 'center',
                textAlign: 'center',
                animation: activeSlide === 2 ? 'bounceIn 0.7s ease 0.2s both' : 'none',
              }}>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  fontSize: '0.8rem',
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                  color: '#C99414',
                  fontWeight: 800,
                }}>
                  <Wheat size={16} /> Sri Krishna Heritage
                </div>
                <h1 style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: 'clamp(2rem, 4.5vw, 3rem)',
                  fontWeight: 900,
                  lineHeight: 1.15,
                  color: '#1C231A',
                  margin: 0,
                }}>
                  Purity & Integrity In Every Grain
                </h1>
                <p style={{
                  fontSize: 'clamp(0.85rem, 1.8vw, 1.02rem)',
                  lineHeight: 1.6,
                  color: '#5C6757',
                  fontWeight: 500,
                  margin: 0,
                }}>
                  Processing 45 tonnes of premium Ponni and Sona Masuri rice daily in our state-of-the-art 8-acre facility. Serving leading domestic supermarkets and international export markets.
                </p>
                <div style={{ marginTop: '0.4rem' }}>
                  <button
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="glow-pulse-btn"
                    style={{
                      background: 'linear-gradient(135deg, #2C6B37, #4B9B5E)',
                      color: '#FFFFFF',
                      padding: '0.8rem 2rem',
                      borderRadius: '30px',
                      border: 'none',
                      fontFamily: "'Raleway', sans-serif",
                      fontWeight: 800,
                      fontSize: '0.8rem',
                      cursor: 'pointer',
                      letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
                      transition: 'all 0.3s ease',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 6px 20px rgba(44, 107, 55, 0.35)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
                    }}
                  >
                    Connect With Us <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bullet Slide Indicators */}
      <div style={{
        position: 'absolute',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '10px',
        zIndex: 15,
      }}>
        {[0, 1, 2].map(i => (
          <button
            key={i}
            onClick={() => setActiveSlide(i)}
            aria-label={`Slide ${i + 1}`}
            style={{
              width: activeSlide === i ? '24px' : '10px',
              height: '10px',
              borderRadius: '5px',
              background: activeSlide === i ? '#2C6B37' : 'rgba(44, 107, 55, 0.2)',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              padding: 0,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes sparkle {
          0%, 100% { opacity: 0; transform: scale(0); }
          50% { opacity: 1; transform: scale(1); }
        }
        @keyframes bounceIn {
          0% { transform: translateY(30px) scale(0.9); opacity: 0; }
          60% { transform: translateY(-5px) scale(1.02); opacity: 1; }
          100% { transform: translateY(0) scale(1); opacity: 1; }
        }
        .collage-panel-2x2:hover .collage-bg {
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
}
