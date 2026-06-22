import React, { useState, useEffect } from 'react';
import { Wheat, ArrowRight, ChevronLeft, ChevronRight, PhoneCall } from 'lucide-react';
import logoImg from '../assets/logo/SKRM_logo.png';
import heritageBg from '../assets/bg/Gemini_Generated_Image_vldgx7vldgx7vldg.png';

// Import collage images for slide 1
import sowingImg from '../assets/collage/paddy_sowing.png';
import transplantingImg from '../assets/collage/paddy_transplanting.png';
import harvestingImg from '../assets/collage/paddy_harvesting.png';
import processingImg from '../assets/collage/paddy_processing.png';

const collageStages = [
  { id: 'sowing', name: 'Sowing', img: sowingImg },
  { id: 'transplanting', name: 'Transplanting', img: transplantingImg },
  { id: 'harvesting', name: 'Harvesting', img: harvestingImg },
  { id: 'processing', name: 'Milling', img: processingImg }
];

// Sri Krishna Hero Landing Carousel
export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0); // 0 = Illustrative Slide, 1 = Collage Slide
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 991);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Optional auto-slide with dynamic durations:
  // Slide 0 (Collage Slide) -> 7 seconds
  // Slide 1 (Illustrative Slide) -> 4 seconds
  // Slide 2 (Heritage Slide) -> 4 seconds
  useEffect(() => {
    const delay = activeSlide === 0 ? 7000 : 4000;
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
      backgroundColor: activeSlide === 1 ? '#E2ECE9' : '#FFE5D9',
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
              SLIDE 0: Original 2x2 Curved Picture Collage with Brand Emblem
              ======================================================== */}
          <div style={{
            width: '33.333%',
            height: '100%',
            position: 'relative',
          }}>
          {/* 2x2 Grid Collage */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gridTemplateRows: '1fr 1fr',
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 1,
            gap: '1.5rem',
            padding: '6.5rem 1.5rem 1.5rem 1.5rem',
            boxSizing: 'border-box',
          }}>
            {collageStages.map((stage) => (
              <div
                key={stage.id}
                className="collage-panel-2x2"
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  height: '100%',
                  width: '100%',
                  borderRadius: '24px',
                  border: '1px solid rgba(44, 107, 55, 0.1)',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.06)',
                }}
              >
                {/* Background Image */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.3)), url(${stage.img})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  transition: 'transform 0.8s ease',
                  borderRadius: '24px',
                }} className="collage-bg" />
              </div>
            ))}
          </div>

          {/* Center Circular Logo & Brand Emblem */}
          <div style={{
            position: 'absolute',
            inset: 0,
            zIndex: 5,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
          }}>
            <div style={{
              background: 'rgba(255, 255, 255, 0.96)',
              backdropFilter: 'blur(20px)',
              border: '4px solid #2C6B37',
              borderRadius: '50%',
              width: 'clamp(280px, 42vw, 360px)',
              height: 'clamp(280px, 42vw, 360px)',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.6)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              padding: '1.5rem',
              boxSizing: 'border-box',
              pointerEvents: 'auto',
            }}>
              {/* Logo */}
              <div style={{
                width: 'clamp(120px, 18vw, 160px)',
                height: 'clamp(120px, 18vw, 160px)',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '2.5px solid #2C6B37',
                boxShadow: '0 4px 15px rgba(44, 107, 55, 0.15)',
                marginBottom: '0.75rem',
                background: '#FFFFFF',
                flexShrink: 0
              }}>
                <img 
                  src={logoImg} 
                  alt="Sri Krishna Logo" 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>

              <div style={{
                fontSize: '0.65rem',
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: '#2C6B37',
                fontWeight: 800,
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                marginBottom: '0.25rem'
              }}>
                <Wheat size={10} color="#C99414" /> Since 1960
              </div>

              <h1 style={{
                fontFamily: "'Cinzel', serif",
                fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
                fontWeight: 900,
                color: '#1C231A',
                lineHeight: 1.2,
                margin: '0 0 2px 0',
              }}>
                Sri Krishna
              </h1>
              <h2 style={{
                fontFamily: "'Raleway', sans-serif",
                fontSize: 'clamp(0.8rem, 2vw, 1.05rem)',
                fontWeight: 700,
                color: '#C99414',
                margin: '0 0 0.5rem 0',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                Modern Rice Mill
              </h2>

              <p style={{
                fontSize: 'clamp(0.7rem, 1.5vw, 0.82rem)',
                color: '#5C6757',
                lineHeight: 1.5,
                fontWeight: 600,
                margin: '0 0 1rem 0',
                maxWidth: '240px'
              }}>
                45 Tonnes of Purity Everyday
              </p>

              <button onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                style={{
                  background: 'linear-gradient(135deg, #2C6B37, #4B9B5E)',
                  color: '#FFFFFF',
                  padding: '0.55rem 1.4rem',
                  borderRadius: '30px',
                  border: 'none',
                  fontFamily: "'Raleway', sans-serif",
                  fontWeight: 800,
                  fontSize: '0.75rem',
                  cursor: 'pointer',
                  boxShadow: '0 4px 12px rgba(44, 107, 55, 0.2)',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-1px)';
                  e.currentTarget.style.boxShadow = '0 6px 15px rgba(44, 107, 55, 0.3)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(44, 107, 55, 0.2)';
                }}
              >
                Explore <ArrowRight size={12} />
              </button>
            </div>
          </div>
          </div>

          {/* ========================================================
              SLIDE 1: Illustrative Split Banner with Rotating Arch Pics
              ======================================================== */}
          <div style={{
            width: '33.333%',
            height: '100%',
            position: 'relative',
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: isMobile ? '6.5rem 1.5rem 1.5rem 1.5rem' : '6.5rem 6.5rem 3rem 6.5rem',
            boxSizing: 'border-box',
          }}>
          {/* Vector Fields Background (Left Illustrative Section) */}
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: isMobile ? '100%' : '60%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 1,
            display: 'flex',
            alignItems: 'flex-end',
            overflow: 'hidden',
          }}>
            {/* Hills & Stalks SVG Illustration */}
            <svg viewBox="0 0 1000 600" style={{ width: '100%', height: 'auto', minHeight: '350px', transform: 'scale(1.15)', transformOrigin: 'bottom left' }}>
              {/* Back Hill */}
              <path d="M-100,500 Q200,420 500,480 T1100,450 L1100,700 L-100,700 Z" fill="#2C856D" opacity="0.45" />
              
              {/* Mid Hill */}
              <path d="M-100,530 Q300,450 700,510 T1100,490 L1100,700 L-100,700 Z" fill="#267D66" opacity="0.6" />
              
              {/* Front Hill with Stripes */}
              <path d="M-100,560 Q400,490 800,540 T1100,520 L1100,700 L-100,700 Z" fill="#1C6B55" />
              <path d="M150,520 L170,700 M250,520 L280,700 M350,520 L390,700 M450,530 L500,700 M550,533 L620,700 M650,535 L730,700" stroke="#145A46" strokeWidth="6" opacity="0.3" />
              
              {/* Tractor Graphic */}
              <g transform="translate(180, 460) scale(0.65)" opacity="0.95">
                {/* Tractor body */}
                <rect x="50" y="30" width="75" height="45" fill="#145A46" rx="8" />
                <rect x="75" y="10" width="40" height="25" fill="#E2ECE9" rx="4" />
                <line x1="110" y1="10" x2="110" y2="30" stroke="#111" strokeWidth="4" />
                {/* Exhaust pipe */}
                <line x1="65" y1="12" x2="65" y2="30" stroke="#555" strokeWidth="5" />
                <path d="M65,12 Q70,8 75,10" fill="none" stroke="#555" strokeWidth="4" />
                {/* Driver */}
                <circle cx="95" cy="22" r="8" fill="#D4A017" />
                {/* Wheels */}
                <circle cx="45" cy="75" r="22" fill="#333" stroke="#222" strokeWidth="3" />
                <circle cx="45" cy="75" r="8" fill="#FAF6EB" />
                <circle cx="120" cy="75" r="14" fill="#333" stroke="#222" strokeWidth="3" />
                <circle cx="120" cy="75" r="5" fill="#FAF6EB" />
              </g>

              {/* Wheat stalk illustrations (Left corner) */}
              <g transform="translate(30, 260) scale(0.8)">
                <path d="M80,300 Q40,150 90,40" fill="none" stroke="#C99414" strokeWidth="3" />
                {/* Grains */}
                {Array.from({ length: 9 }).map((_, stepIdx) => {
                  const y = 60 + stepIdx * 25;
                  const offset = stepIdx % 2 === 0 ? 10 : -10;
                  return (
                    <path key={stepIdx} d={`M${65 + offset},${y} Q${75 + offset * 1.5},${y - 12} ${65 + offset},${y - 20} Z`} fill="#C99414" />
                  );
                })}
              </g>
              <g transform="translate(85, 290) scale(0.7) rotate(15)">
                <path d="M80,300 Q40,150 90,40" fill="none" stroke="#FAF6EB" strokeWidth="4" />
                {/* Grains */}
                {Array.from({ length: 9 }).map((_, stepIdx) => {
                  const y = 60 + stepIdx * 25;
                  const offset = stepIdx % 2 === 0 ? 10 : -10;
                  return (
                    <path key={stepIdx} d={`M${65 + offset},${y} Q${75 + offset * 1.5},${y - 12} ${65 + offset},${y - 20} Z`} fill="#FAF6EB" />
                  );
                })}
              </g>
            </svg>
          </div>

          {/* Left Text Column */}
          <div style={{
            flex: '1 1 100%',
            zIndex: 5,
            color: '#1C231A',
            maxWidth: '800px',
            textAlign: 'left',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
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
              fontSize: 'clamp(2.5rem, 5vw, 4.4rem)',
              fontWeight: 900,
              lineHeight: 1.1,
              color: '#1C231A',
              margin: '0.5rem 0',
            }}>
              Rooted.<br />
              Reignited.<br />
              Reimagined.
            </h1>

            <p style={{
              fontSize: '1.05rem',
              lineHeight: 1.7,
              color: '#4B5548',
              fontWeight: 500,
              margin: '0.5rem 0 1.5rem 0',
              maxWidth: '650px',
            }}>
              Over three generations of agricultural heritage combined with state-of-the-art automation. Supplying pure, nutrient-rich South Indian Ponni and Sona Masuri grains daily.
            </p>

            <div>
              <button 
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                style={{
                  background: 'linear-gradient(135deg, #2C6B37, #4B9B5E)',
                  color: '#FFFFFF',
                  padding: '0.8rem 2.2rem',
                  borderRadius: '30px',
                  border: 'none',
                  fontFamily: "'Raleway', sans-serif",
                  fontWeight: 800,
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  boxShadow: '0 4px 15px rgba(44, 107, 55, 0.25)',
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
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(44, 107, 55, 0.25)'; 
                }}
              >
                Our Varieties <ArrowRight size={16} />
              </button>
            </div>
          </div>
          </div>

          {/* ========================================================
              SLIDE 2: Heritage Showcase Slide (Full Screen Image)
              ======================================================== */}
          <div style={{
            width: '33.333%',
            height: '100%',
            position: 'relative',
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.65)), url(${heritageBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: isMobile ? '6.5rem 1.5rem 1.5rem 1.5rem' : '6.5rem 6.5rem 3rem 6.5rem',
            boxSizing: 'border-box',
          }}>
            <div style={{
              maxWidth: '800px',
              color: '#FFFFFF',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1.25rem',
              animation: 'fadeInScale 0.8s ease-out',
            }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                fontSize: '0.8rem',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: '#F1C40F',
                fontWeight: 800,
              }}>
                <Wheat size={16} /> Sri Krishna Heritage
              </div>
              <h1 style={{
                fontFamily: "'Cinzel', serif",
                fontSize: 'clamp(2rem, 5vw, 3.8rem)',
                fontWeight: 900,
                lineHeight: 1.15,
                color: '#FFFFFF',
                margin: 0,
                textShadow: '0 4px 15px rgba(0,0,0,0.6)',
              }}>
                Purity & Integrity In Every Grain
              </h1>
              <p style={{
                fontSize: '1.05rem',
                lineHeight: 1.8,
                color: '#EAECEE',
                fontWeight: 500,
                maxWidth: '650px',
                margin: '0 auto 1rem auto',
                textShadow: '0 2px 8px rgba(0,0,0,0.5)',
              }}>
                Processing 45 tonnes of premium Ponni and Sona Masuri rice daily in our state-of-the-art 8-acre facility. Serving leading domestic supermarkets and international export markets.
              </p>
              <div>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  style={{
                    background: 'linear-gradient(135deg, #2C6B37, #4B9B5E)',
                    color: '#FFFFFF',
                    padding: '0.9rem 2.5rem',
                    borderRadius: '30px',
                    border: 'none',
                    fontFamily: "'Raleway', sans-serif",
                    fontWeight: 800,
                    fontSize: '0.95rem',
                    cursor: 'pointer',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
                    transition: 'all 0.3s ease',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                  onMouseEnter={e => { 
                    e.currentTarget.style.transform = 'translateY(-2px)'; 
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(44, 107, 55, 0.5)'; 
                  }}
                  onMouseLeave={e => { 
                    e.currentTarget.style.transform = 'translateY(0)'; 
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.3)'; 
                  }}
                >
                  Connect With Us <ArrowRight size={16} />
                </button>
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
        <button 
          onClick={() => setActiveSlide(0)}
          aria-label="Slide 1"
          style={{
            width: activeSlide === 0 ? '24px' : '10px',
            height: '10px',
            borderRadius: '5px',
            background: activeSlide === 0 ? '#2C6B37' : 'rgba(44, 107, 55, 0.3)',
            border: 'none',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            padding: 0,
          }}
        />
        <button 
          onClick={() => setActiveSlide(1)}
          aria-label="Slide 2"
          style={{
            width: activeSlide === 1 ? '24px' : '10px',
            height: '10px',
            borderRadius: '5px',
            background: activeSlide === 1 ? '#2C6B37' : 'rgba(44, 107, 55, 0.3)',
            border: 'none',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            padding: 0,
          }}
        />
        <button 
          onClick={() => setActiveSlide(2)}
          aria-label="Slide 3"
          style={{
            width: activeSlide === 2 ? '24px' : '10px',
            height: '10px',
            borderRadius: '5px',
            background: activeSlide === 2 ? '#2C6B37' : 'rgba(44, 107, 55, 0.3)',
            border: 'none',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            padding: 0,
          }}
        />
      </div>

      <style>{`
        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        .collage-panel-2x2:hover .collage-bg {
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
}
