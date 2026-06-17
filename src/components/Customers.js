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
          <div style={{ fontSize: '0.9rem', letterSpacing: '0.4em', color: '#000000', textTransform: 'uppercase', marginBottom: 12, fontWeight: 700 }}>
            Trusted Partners
          </div>
          <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#FFF8E7', marginBottom: '1rem' }}>
            Brands That Trust Us
          </h2>
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
              background: 'rgba(90, 150, 50, 0.9)',
              border: '2px solid rgba(255, 248, 231, 0.8)',
              borderRadius: '50%',
              width: `${arrowSize}px`,
              height: `${arrowSize}px`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#FFF8E7',
              zIndex: 10,
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
              e.currentTarget.style.background = 'rgba(90, 150, 50, 1)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
              e.currentTarget.style.background = 'rgba(90, 150, 50, 0.9)';
            }}
          >
            <ChevronLeft size={isMobile ? 18 : 24} />
          </button>

          <div style={{ overflow: 'hidden', borderRadius: '24px', boxShadow: '0 12px 30px rgba(0,0,0,0.15)' }}>
            <div style={{
              display: 'flex',
              transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
              transform: `translateX(-${activeIndex * 100}%)`,
            }}>
              {clients.map((c, i) => (
                <div key={i} style={{
                  minWidth: '100%',
                  background: 'rgba(144, 200, 100, 0.85)',
                  border: '2px solid rgba(90, 150, 50, 0.9)',
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
                    background: 'rgba(255, 255, 255, 0.9)',
                    borderRadius: '50%',
                    padding: isMobile ? '1rem' : '1.5rem',
                    width: logoSize,
                    height: logoSize,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
                    border: `3px solid ${c.color || '#D4A017'}`,
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
                    <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: titleSize, color: '#1A1A0E', marginBottom: '0.5rem', fontWeight: 700 }}>
                      {c.name}
                    </h3>
                    <p style={{ fontSize: descSize, color: '#2D2D1F', lineHeight: 1.6, fontWeight: 700, maxWidth: '550px', margin: '0 auto' }}>
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
              background: 'rgba(90, 150, 50, 0.9)',
              border: '2px solid rgba(255, 248, 231, 0.8)',
              borderRadius: '50%',
              width: `${arrowSize}px`,
              height: `${arrowSize}px`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#FFF8E7',
              zIndex: 10,
              boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
              e.currentTarget.style.background = 'rgba(90, 150, 50, 1)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
              e.currentTarget.style.background = 'rgba(90, 150, 50, 0.9)';
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
                background: activeIndex === i ? 'rgba(90, 150, 50, 1)' : 'rgba(90, 150, 50, 0.4)',
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
            { icon: MapPin, title: 'Domestic Supply', desc: 'Serving retail chains, wholesalers, hotels, and households across Tamil Nadu and Puducherry.', color: '#D4A017' },
            { icon: Plane, title: 'International Export', desc: 'Meeting strict global food safety standards. VIP Krishna brand recognized across international markets.', color: '#2A9D8F' },
          ].map((item, i) => (
            <div key={i} style={{
              padding: '2.5rem',
              background: 'rgba(144, 200, 100, 0.75)',
              border: '2px solid rgba(90, 150, 50, 0.9)',
              borderRadius: 24,
              transition: 'all 0.3s',
            }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(144, 200, 100, 0.9)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(144, 200, 100, 0.75)'}
            >
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{React.createElement(item.icon, { size: 40, color: item.color })}</div>
              <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: '1.5rem', color: '#1A1A0E', marginBottom: '0.8rem', fontWeight: 700 }}>
                {item.title}
              </h3>
              <p style={{ color: '#2D2D1F', lineHeight: 1.7, fontWeight: 700 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
