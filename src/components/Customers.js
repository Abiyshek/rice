import React, { useState, useEffect } from 'react';
import { MapPin, Plane, ChevronLeft, ChevronRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import customer1 from '../assets/customers/Screenshot 2026-05-29 095647.png';
import customer2 from '../assets/customers/Screenshot 2026-05-29 095706.png';
import customer3 from '../assets/customers/Screenshot 2026-05-29 100009.png';
import customer4 from '../assets/customers/Screenshot 2026-05-29 100015.png';
import customer5 from '../assets/customers/Screenshot 2026-05-29 100026.png';
import customer6 from '../assets/customers/Screenshot 2026-05-29 100036.png';
import customer7 from '../assets/customers/Screenshot 2026-05-29 100048.png';
import customer8 from '../assets/customers/Screenshot 2026-05-29 100058.png';
import customer9 from '../assets/customers/Screenshot 2026-05-29 100108.png';
import bg3 from '../assets/bg/bg3.png';
import ThreeGlobe from './ThreeGlobe';

const clients = [
  { name: 'Reliance Fresh', image: customer1, color: '#E8623A', desc: 'Proudly supplying premium VIP Krishna Rice to Reliance Fresh supermarket chains across South India.' },
  { name: 'BigBasket', image: customer2, color: '#7DB85C', desc: 'Direct supply partnership delivering organic and raw Ponni rice directly to online customers.' },
  { name: "Nilgiri's 1905", image: customer3, color: '#2A9D8F', desc: 'Partnering with Nilgiri\'s franchise stores to bring traditional grains to households since 2005.' },
  { name: 'More Megastore', image: customer4, color: '#D4A017', desc: 'A trusted bulk partner for daily consumer packs of premium quality rice in retail formats.' },
  { name: 'Hotel Jayaram', image: customer6, color: '#E8623A', desc: 'The signature taste of Jayaram Group premium meals, powered by Sri Krishna premium grains.' },
  { name: 'Atithi Puducherry', image: customer5, color: '#7DB85C', desc: 'Exclusive Ponni rice supplier to Atithi Hotel, preserving local culinary heritage.' },
  { name: 'Ocean Spray', image: customer7, color: '#2A9D8F', desc: 'Delivering exceptional dining quality to guests at the premium Ocean Spray resort kitchens.' },
  { name: 'Shastha Foods', image: customer8, color: '#D4A017', desc: 'Providing bulk grain exports and raw rice for Shastha Foods premium batter processing.' },
  { name: 'Hotel Ram International', image: customer9, color: '#E8623A', desc: 'Supplying long-grain Ponni rice for authentic traditional culinary menus at Hotel Ram International.' },
];

const exportPoints = [
  { name: 'Saudi Arabia', lat: 24.7136, lon: 46.6753, desc: 'Premium Basmati & Raw Ponni bulk supply.' },
  { name: 'UAE (Dubai)', lat: 25.2048, lon: 55.2708, desc: 'Flagship VIP Krishna Rice distribution hub.' },
  { name: 'Singapore', lat: 1.3521, lon: 103.8198, desc: 'Export-grade Sona Masuri & Ponni varieties.' },
  { name: 'Malaysia', lat: 3.1390, lon: 101.6869, desc: 'Aromatic Ponni & Jeeraga Samba supplying supermarkets.' },
  { name: 'Europe', lat: 50.1109, lon: 8.6821, desc: 'Organic rice grains certified to EU standards.' },
  { name: 'Sri Krishna Mill (Origin)', lat: 11.9416, lon: 79.8083, isOrigin: true, desc: 'Our state-of-the-art 8-acre milling facility in Puducherry.' }
];

const SLIDE_DURATION = 4000;

export default function Customers() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [progressKey, setProgressKey] = useState(0);
  const [hoveredPoint, setHoveredPoint] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % clients.length);
      setProgressKey(k => k + 1);
    }, SLIDE_DURATION);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % clients.length);
    setProgressKey(k => k + 1);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + clients.length) % clients.length);
    setProgressKey(k => k + 1);
  };

  const wrapperPadding = isMobile ? '0 0.25rem' : '0 3.5rem';
  const arrowSize = isMobile ? 36 : 44;
  const arrowLeft = isMobile ? '8px' : '0';
  const arrowRight = isMobile ? '8px' : '0';
  const cardPadding = isMobile ? '2rem 1.25rem' : '3rem 2.5rem';
  const logoSize = isMobile ? '90px' : '120px';
  const titleSize = isMobile ? '1.35rem' : '1.8rem';
  const descSize = isMobile ? '0.9rem' : '1.1rem';

  return (
    <section style={{
      backgroundImage: `linear-gradient(rgba(242, 247, 244, 0.70), rgba(228, 239, 234, 0.70)), url(${bg3})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      padding: '8rem 3rem', minHeight: 'auto', overflow: 'hidden',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <ScrollReveal direction="up">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{ fontSize: '0.9rem', letterSpacing: '0.4em', color: '#2C6B37', textTransform: 'uppercase', marginBottom: 12, fontWeight: 800 }}>
              Trusted Partners
            </div>
            <h2 className="gold-shimmer-text" style={{ fontFamily: "'Cinzel', serif", fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#1C231A', marginBottom: '1.5rem' }}>
              Brands That Trust Us
            </h2>
            <div style={{
              background: '#FFFFFF',
              border: '1px solid rgba(44, 107, 55, 0.15)',
              borderRadius: '50px',
              padding: '0.75rem 2rem',
              maxWidth: '650px',
              margin: '0 auto',
              boxShadow: '0 8px 30px rgba(44, 107, 55, 0.04)',
            }}>
              <p style={{ color: '#5C6757', margin: 0, fontSize: '0.95rem', fontWeight: 600 }}>
                From retail giants to premium hotels — our rice is on tables across South India and beyond.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Carousel Container */}
        <ScrollReveal direction="scale" delay={0.15}>
          <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto', padding: wrapperPadding }}>
            
            {/* Navigation Buttons */}
            <button 
              onClick={prevSlide}
              aria-label="Previous Slide"
              style={{
                position: 'absolute',
                left: arrowLeft,
                top: '50%',
                transform: 'translateY(-50%)',
                background: '#2C6B37',
                border: '2px solid #4B9B5E',
                borderRadius: '50%',
                width: `${arrowSize}px`,
                height: `${arrowSize}px`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#FFFFFF',
                zIndex: 10,
                boxShadow: '0 4px 15px rgba(44, 107, 55, 0.25)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
                e.currentTarget.style.background = '#1D4B24';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                e.currentTarget.style.background = '#2C6B37';
              }}
            >
              <ChevronLeft size={isMobile ? 18 : 24} />
            </button>

            <div style={{ overflow: 'hidden', borderRadius: '24px', boxShadow: '0 12px 40px rgba(0,0,0,0.03)' }}>
              <div style={{
                display: 'flex',
                transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                transform: `translateX(-${activeIndex * 100}%)`,
              }}>
                {clients.map((c, i) => (
                  <div key={i} style={{
                    minWidth: '100%',
                    background: '#FFFFFF',
                    border: '3px solid #5C3D24',
                    borderRadius: '24px',
                    padding: cardPadding,
                    boxSizing: 'border-box',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '1.5rem',
                    textAlign: 'center',
                  }}>
                    <div style={{
                      background: '#FFFFFF',
                      borderRadius: '50%',
                      padding: isMobile ? '1rem' : '1.5rem',
                      width: logoSize,
                      height: logoSize,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 6px 18px rgba(0,0,0,0.02)',
                      border: `3px solid ${c.color || '#C99414'}`,
                      flexShrink: 0,
                      transition: 'transform 0.4s ease',
                      transform: activeIndex === i ? 'scale(1)' : 'scale(0.9)',
                    }}>
                      <img 
                        src={c.image} 
                        alt={c.name} 
                        style={{
                          maxWidth: '100%',
                          maxHeight: '100%',
                          objectFit: 'contain',
                        }}
                      />
                    </div>
                    
                    <div>
                      <h3 style={{ fontFamily: "'Raleway', sans-serif", fontSize: titleSize, color: '#1C231A', marginBottom: '0.5rem', fontWeight: 800 }}>
                        {c.name}
                      </h3>
                      <p style={{ fontSize: descSize, color: '#5C6757', lineHeight: 1.7, fontWeight: 500, maxWidth: '550px', margin: '0 auto' }}>
                        {c.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button 
              onClick={nextSlide}
              aria-label="Next Slide"
              style={{
                position: 'absolute',
                right: arrowRight,
                top: '50%',
                transform: 'translateY(-50%)',
                background: '#2C6B37',
                border: '2px solid #4B9B5E',
                borderRadius: '50%',
                width: `${arrowSize}px`,
                height: `${arrowSize}px`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#FFFFFF',
                zIndex: 10,
                boxShadow: '0 4px 15px rgba(44, 107, 55, 0.25)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
                e.currentTarget.style.background = '#1D4B24';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                e.currentTarget.style.background = '#2C6B37';
              }}
            >
              <ChevronRight size={isMobile ? 18 : 24} />
            </button>
          </div>
        </ScrollReveal>

        {/* Carousel Indicators with progress bar */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.6rem', marginTop: '2rem', alignItems: 'center' }}>
          {clients.map((_, i) => (
            <button
              key={i}
              onClick={() => { setActiveIndex(i); setProgressKey(k => k + 1); }}
              aria-label={`Go to slide ${i + 1}`}
              style={{
                width: activeIndex === i ? '32px' : '10px',
                height: '10px',
                borderRadius: '5px',
                background: activeIndex === i ? '#2C6B37' : 'rgba(44, 107, 55, 0.2)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                padding: 0,
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Progress fill inside active dot */}
              {activeIndex === i && (
                <div
                  key={progressKey}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    height: '100%',
                    background: '#4B9B5E',
                    borderRadius: '5px',
                    animation: `progressFill ${SLIDE_DURATION}ms linear forwards`,
                  }}
                />
              )}
            </button>
          ))}
        </div>
        {/* Domestic vs Export */}
        <div className="responsive-grid-2" style={{ marginTop: '4rem' }}>
          {[
            { icon: MapPin, title: 'Domestic Supply', desc: 'Serving retail chains, wholesalers, hotels, and households across Tamil Nadu and Puducherry.', color: '#C99414' },
            { icon: Plane, title: 'International Export', desc: 'Meeting strict global food safety standards. VIP Krishna brand recognized across international markets.', color: '#1F7A6E' },
          ].map((item, i) => (
            <ScrollReveal key={i} direction={i === 0 ? 'left' : 'right'} delay={0.15}>
              <div
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  padding: '2.5rem',
                  background: hoveredCard === i ? 'linear-gradient(135deg, #2C6B37 0%, #0066CC 100%)' : '#FFFFFF',
                  border: hoveredCard === i ? '3px solid transparent' : '3px solid #5C3D24',
                  borderRadius: 24,
                  transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
                  boxShadow: hoveredCard === i ? '0 15px 40px rgba(0, 102, 204, 0.2)' : '0 8px 24px rgba(0,0,0,0.02)',
                  transform: hoveredCard === i ? 'translateY(-6px)' : 'translateY(0)',
                  cursor: 'pointer',
                }}
              >
                <div className={hoveredCard === i ? '' : 'float-animation'} style={{ fontSize: '3rem', marginBottom: '1rem', transition: 'all 0.3s' }}>
                  {React.createElement(item.icon, { size: 40, color: hoveredCard === i ? '#FFFFFF' : item.color })}
                </div>
                <h3 style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: '1.5rem',
                  color: hoveredCard === i ? '#FFFFFF' : '#1C231A',
                  marginBottom: '0.8rem',
                  fontWeight: 800,
                  transition: 'color 0.3s'
                }}>
                  {item.title}
                </h3>
                <p style={{
                  color: hoveredCard === i ? '#EAECEE' : '#5C6757',
                  lineHeight: 1.7,
                  fontWeight: 500,
                  transition: 'color 0.3s'
                }}>{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Interactive Global Network Map */}
        <ScrollReveal direction="up" delay={0.2}>
          <div style={{
            marginTop: '5rem',
            background: '#FFFFFF',
            border: '3px solid #5C3D24',
            borderRadius: 28,
            padding: isMobile ? '2rem 1rem' : '3.5rem',
            boxShadow: '0 12px 40px rgba(0, 102, 204, 0.04)',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <style>{`
              @keyframes dash {
                to {
                  stroke-dashoffset: -20;
                }
              }
              @keyframes pulse {
                0% { transform: scale(0.9); opacity: 1; }
                50% { transform: scale(1.4); opacity: 0.4; }
                100% { transform: scale(0.9); opacity: 1; }
              }
              .pulse-dot {
                animation: pulse 2s infinite ease-in-out;
              }
              .map-flow-line {
                stroke-dasharray: 5, 5;
                animation: dash 1.5s linear infinite;
              }
            `}</style>

            <div style={{ marginBottom: '2.5rem' }}>
              <div style={{ fontSize: '0.8rem', letterSpacing: '0.3em', color: '#2C6B37', textTransform: 'uppercase', marginBottom: 6, fontWeight: 800 }}>
                Our Presence
              </div>
              <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: '1.8rem', color: '#1C231A', margin: 0, fontWeight: 800 }}>
                Global Export Footprint
              </h3>
              <p style={{ color: '#5C6757', fontSize: '0.9rem', marginTop: '0.5rem', fontWeight: 500 }}>
                Hover over the pulsing markers to explore our domestic and international distribution hubs.
              </p>
            </div>

            {/* 3D revolving globe using ThreeGlobe */}
            <div style={{
              position: 'relative',
              width: '100%',
              maxWidth: '800px',
              margin: '0 auto',
              background: '#FAF9F6',
              borderRadius: '16px',
              border: '1px solid rgba(44, 107, 55, 0.15)',
              padding: '1.5rem',
              boxShadow: 'inset 0 4px 15px rgba(0,0,0,0.02)',
              overflow: 'hidden',
            }}>
              <ThreeGlobe onHoverPoint={setHoveredPoint} />

              {/* Tooltip Description Panel */}
              <div style={{
                marginTop: '1.5rem',
                minHeight: '60px',
                padding: '0.8rem 1.5rem',
                background: '#FFFFFF',
                borderRadius: '12px',
                border: '1.5px solid #5C3D24',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: '0 4px 15px rgba(0,0,0,0.02)',
              }}>
                {hoveredPoint !== null ? (
                  <>
                    <h4 style={{ margin: '0 0 4px 0', fontFamily: "'Cinzel', serif", color: exportPoints[hoveredPoint].isOrigin ? '#2C6B37' : '#C99414', fontWeight: 800 }}>
                      {exportPoints[hoveredPoint].name}
                    </h4>
                    <p style={{ margin: 0, fontSize: '0.85rem', color: '#5C6757', fontWeight: 600 }}>
                      {exportPoints[hoveredPoint].desc}
                    </p>
                  </>
                ) : (
                  <p style={{ margin: 0, fontSize: '0.85rem', color: '#5C6757', fontStyle: 'italic', fontWeight: 500 }}>
                    Drag to rotate. Hover over any pulsing marker on the 3D globe to view market details.
                  </p>
                )}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
