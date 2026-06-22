import React, { useState, useEffect } from 'react';
import { MapPin, Plane, ChevronLeft, ChevronRight } from 'lucide-react';
import customer1 from '../assets/customers/Screenshot 2026-05-29 095647.png';
import customer2 from '../assets/customers/Screenshot 2026-05-29 095706.png';
import customer3 from '../assets/customers/Screenshot 2026-05-29 100009.png';
import customer4 from '../assets/customers/Screenshot 2026-05-29 100015.png';
import customer5 from '../assets/customers/Screenshot 2026-05-29 100026.png';
import customer6 from '../assets/customers/Screenshot 2026-05-29 100036.png';
import customer7 from '../assets/customers/Screenshot 2026-05-29 100048.png';
import customer8 from '../assets/customers/Screenshot 2026-05-29 100058.png';
import customer9 from '../assets/customers/Screenshot 2026-05-29 100108.png';

const clients = [
  { name: 'Reliance Fresh', image: customer1, color: '#E8623A', desc: 'Proudly supplying premium VIP Krishna Rice to Reliance Fresh supermarket chains across South India.' },
  { name: 'BigBasket', image: customer2, color: '#7DB85C', desc: 'Direct supply partnership delivering organic and raw Ponni rice directly to online customers.' },
  { name: "Nilgiri's 1905", image: customer3, color: '#2A9D8F', desc: 'Partnering with Nilgiri’s franchise stores to bring traditional grains to households since 2005.' },
  { name: 'More Megastore', image: customer4, color: '#D4A017', desc: 'A trusted bulk partner for daily consumer packs of premium quality rice in retail formats.' },
  { name: 'Hotel Jayaram', image: customer6, color: '#E8623A', desc: 'The signature taste of Jayaram Group premium meals, powered by Sri Krishna premium grains.' },
  { name: 'Atithi Puducherry', image: customer5, color: '#7DB85C', desc: 'Exclusive Ponni rice supplier to Atithi Hotel, preserving local culinary heritage.' },
  { name: 'Ocean Spray', image: customer7, color: '#2A9D8F', desc: 'Delivering exceptional dining quality to guests at the premium Ocean Spray resort kitchens.' },
  { name: 'Shastha Foods', image: customer8, color: '#D4A017', desc: 'Providing bulk grain exports and raw rice for Shastha Foods premium batter processing.' },
  { name: 'Hotel Ram International', image: customer9, color: '#E8623A', desc: 'Supplying long-grain Ponni rice for authentic traditional culinary menus at Hotel Ram International.' },
];

export default function Customers() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

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
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % clients.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + clients.length) % clients.length);
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
      background: 'transparent',
      padding: '8rem 3rem', minHeight: 'auto', overflow: 'hidden',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{ fontSize: '0.9rem', letterSpacing: '0.4em', color: '#2C6B37', textTransform: 'uppercase', marginBottom: 12, fontWeight: 800 }}>
            Trusted Partners
          </div>
          <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#1C231A', marginBottom: '1.5rem' }}>
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

        {/* Carousel Container */}
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
                  {/* Brand Image inside wheat style ring */}
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
                  
                  {/* Info */}
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

        {/* Carousel Indicators / Dots */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.6rem', marginTop: '2rem' }}>
          {clients.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              style={{
                width: activeIndex === i ? '24px' : '10px',
                height: '10px',
                borderRadius: '5px',
                background: activeIndex === i ? '#2C6B37' : 'rgba(44, 107, 55, 0.2)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                padding: 0,
              }}
            />
          ))}
        </div>

        {/* Domestic vs Export */}
        <div className="responsive-grid-2" style={{ marginTop: '4rem' }}>
          {[
            { icon: MapPin, title: 'Domestic Supply', desc: 'Serving retail chains, wholesalers, hotels, and households across Tamil Nadu and Puducherry.', color: '#C99414' },
            { icon: Plane, title: 'International Export', desc: 'Meeting strict global food safety standards. VIP Krishna brand recognized across international markets.', color: '#1F7A6E' },
          ].map((item, i) => (
            <div key={i}
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
              <div style={{ fontSize: '3rem', marginBottom: '1rem', transition: 'all 0.3s' }}>
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
          ))}
        </div>
      </div>
    </section>
  );
}
