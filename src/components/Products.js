import React, { useState, useEffect, useRef } from 'react';
import { Wheat, Check } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import bg1 from '../assets/bg/bg1.png';
import sowingImg from '../assets/collage/paddy_sowing.png';
import transplantingImg from '../assets/collage/paddy_transplanting.png';
import harvestingImg from '../assets/collage/paddy_harvesting.png';
import productImg from '../assets/product/Screenshot 2026-06-01 104018.png';
import ThreeClouds from './ThreeClouds';

const varieties = [
  { name: 'White Ponni', desc: 'Classic South Indian staple. Soft, fluffy texture with mild aroma.', badge: 'Bestseller', color: '#D4A017' },
  { name: 'Sona Masuri', desc: 'Lightweight, aromatic medium-grain rice. Perfect for daily cooking.', badge: 'Popular', color: '#2A9D8F' },
  { name: 'Deluxe Ponni', desc: 'Premium grade Ponni rice. Enhanced taste, extra polish and purity.', badge: 'Premium', color: '#E8623A' },
  { name: 'Jeeraga Samba', desc: 'Tiny aromatic grains with unique cumin-like fragrance. Festival favourite.', badge: 'Aromatic', color: '#7DB85C' },
  { name: 'BPT Rice', desc: 'Sona Masuri variety from Andhra. Soft cooking, loved by hotels and restaurants.', badge: 'Hotel Grade', color: '#D4A017' },
  { name: 'Swarna / IR64', desc: 'High-yield export variety. Long-grain, non-sticky. Global market favourite.', badge: 'Export', color: '#2A9D8F' },
  { name: 'ADT37', desc: 'Medium-grain, high-yielding variety with excellent cooking properties and yield.', badge: 'Standard', color: '#90C878' },
  { name: 'AST18', desc: 'Aromatic short-grain rice with consistent quality and uniform kernel size.', badge: 'Aromatic', color: '#7DB85C' },
  { name: 'IR50', desc: 'Reliable, high-yield variety suitable for various agro-climatic regions.', badge: 'Standard', color: '#90C878' },
  { name: 'IR642', desc: 'Long-grain variety known for excellent cooking qualities and export quality.', badge: 'Export', color: '#2A9D8F' },
  { name: 'Kranthi', desc: 'High-performance variety with superior milling and cooking characteristics.', badge: 'Premium', color: '#E8623A' },
  { name: 'ADT45', desc: 'Medium-duration variety with good yield and cooking properties for daily use.', badge: 'Standard', color: '#90C878' },
  { name: 'Jai Sriram', desc: 'Aromatic medium-grain rice from premium cultivation regions.', badge: 'Aromatic', color: '#7DB85C' },
  { name: 'Surti Kolam', desc: 'Fine-grain variety known for delicate flavor and culinary excellence.', badge: 'Premium', color: '#E8623A' },
  { name: 'Ponmani', desc: 'Enhanced Ponni variety with superior polish and uniform grain quality.', badge: 'Premium', color: '#E8623A' },
  { name: 'KO 51', desc: 'Robust medium-grain variety with high milling recovery and excellent yield.', badge: 'Standard', color: '#90C878' },
  { name: 'NLR', desc: 'Quality medium-grain rice with consistent properties for commercial use.', badge: 'Standard', color: '#90C878' },
  { name: 'JJL', desc: 'High-performing local variety adapted for regional cultivation and markets.', badge: 'Regional', color: '#9B7D5F' },
  { name: 'RNR', desc: 'Reliable variety with good adaptation and consistent milling results.', badge: 'Standard', color: '#90C878' },
  { name: 'White Car', desc: 'Special white variety with unique culinary characteristics and purity.', badge: 'Premium', color: '#E8623A' },
];

export default function Products() {
  const [hovered, setHovered] = useState(null);
  const [hoveredBest, setHoveredBest] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const mainNames = [
    'Sona Masuri',
    'White Ponni',
    'Deluxe Ponni',
    'Jeeraga Samba',
    'BPT Rice',
    'Jai Sriram',
    'Surti Kolam',
    'IR642',
    'Kranthi'
  ];

  const bestVarieties = [
    { name: 'Raw Ponni', img: sowingImg, type: 'Traditional Raw', desc: 'Experience the pure, unadulterated essence of Ponni rice, aged to perfection for fluffy daily meals.' },
    { name: 'Steam Ponni', img: transplantingImg, type: 'Aromatic Steam', desc: 'Globally preferred for its high recovery and non-sticky cooking, perfect for biryanis and hotel meals.' },
    { name: 'Jeeraga Samba', img: harvestingImg, type: 'Festival Grade', desc: 'Tiny, highly aromatic grains with unmatched fragrance, perfect for South Indian signature Ghee rice.' },
    { name: 'Deluxe Ponni', img: productImg, type: 'Ultra Premium Raw', desc: 'Meticulously processed and double-polished raw Ponni rice for elite taste and dining excellence.' },
  ];

  const displayedVarieties = showAll 
    ? varieties 
    : varieties.filter(v => mainNames.includes(v.name));

  return (
    <section id="products" ref={sectionRef} style={{
      backgroundImage: `linear-gradient(rgba(253, 251, 247, 0.70), rgba(245, 238, 226, 0.70)), url(${bg1})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      padding: '8rem 3rem', minHeight: 'auto',
      position: 'relative',
    }}>
      <ThreeClouds inView={inView} />
      <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 2 }}>
        
        {/* ==========================================
            Our Best Varieties (Competitor Style Grid)
            ========================================== */}
        <ScrollReveal direction="up">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{ fontSize: '0.85rem', letterSpacing: '0.4em', color: '#2C6B37', textTransform: 'uppercase', marginBottom: 12, fontWeight: 800 }}>
              ALL SEEDS VARIETIES AVAILABLE
            </div>
            <h2 className="gold-shimmer-text" style={{ fontFamily: "'Cinzel', serif", fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', color: '#1C231A', margin: 0, fontWeight: 900 }}>
              Our Best Varieties
            </h2>
          </div>
        </ScrollReveal>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', 
          gap: '2rem', 
          marginBottom: '6rem' 
        }}>
          {bestVarieties.map((v, idx) => (
            <ScrollReveal key={idx} direction="up" delay={idx * 0.1} duration={0.6}>
              <div 
                onMouseEnter={() => setHoveredBest(idx)}
                onMouseLeave={() => setHoveredBest(null)}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '24px',
                  border: '3px solid #5C3D24',
                  overflow: 'hidden',
                  boxShadow: hoveredBest === idx ? '0 15px 40px rgba(44, 107, 55, 0.15)' : '0 8px 25px rgba(0,0,0,0.03)',
                  transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
                  transform: hoveredBest === idx ? 'translateY(-10px)' : 'translateY(0)',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                }}
              >
                {/* Crop Photo Container */}
                <div style={{ height: '180px', overflow: 'hidden', position: 'relative' }}>
                  <img 
                    src={v.img} 
                    alt={v.name} 
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover',
                      transition: 'transform 0.8s ease',
                      transform: hoveredBest === idx ? 'scale(1.08)' : 'scale(1)',
                    }} 
                  />
                  {/* Subtle golden bottom crop gradient */}
                  <div style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0, height: '40px',
                    background: 'linear-gradient(transparent, rgba(0,0,0,0.15))'
                  }} />
                </div>

                {/* Card Body */}
                <div style={{ padding: '1.8rem 1.5rem', display: 'flex', flexDirection: 'column', flex: 1, gap: '0.8rem', position: 'relative' }}>
                  <div style={{ fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C99414', fontWeight: 800 }}>
                    {v.type}
                  </div>
                  <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: '1.4rem', color: '#1C231A', margin: 0, fontWeight: 800 }}>
                    {v.name}
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: '#5C6757', lineHeight: 1.6, margin: 0, fontWeight: 500, flex: 1 }}>
                    {v.desc}
                  </p>

                  {/* Gold Circle Arrow Button */}
                  <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
                    <div 
                      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                      style={{
                        width: '42px', height: '42px', borderRadius: '50%',
                        background: hoveredBest === idx ? '#2C6B37' : '#EADBC8',
                        color: hoveredBest === idx ? '#FFFFFF' : '#1C231A',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '1.1rem', cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
                        transform: hoveredBest === idx ? 'scale(1.1)' : 'scale(1)',
                      }}
                    >
                      →
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* ==========================================
            Collapsible Full Grid List
            ========================================== */}
        <ScrollReveal direction="up">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div style={{ fontSize: '0.8rem', letterSpacing: '0.3em', color: '#2C6B37', textTransform: 'uppercase', marginBottom: 6, fontWeight: 800 }}>
              Premium Selection
            </div>
            <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: '1.8rem', color: '#1C231A', margin: 0, fontWeight: 800 }}>
              More Varieties We Process
            </h3>
          </div>
        </ScrollReveal>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '2rem', 
          padding: '1rem 0',
          justifyContent: 'center' 
        }}>
          {displayedVarieties.map((v, i) => (
            <ScrollReveal key={i} direction="up" delay={Math.min(i * 0.06, 0.5)} duration={0.6}>
              <div
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  display: 'flex', gap: '1.2rem', alignItems: 'center',
                  background: hovered === i ? 'linear-gradient(135deg, #2C6B37 0%, #0066CC 100%)' : '#FFFFFF',
                  border: hovered === i ? '3px solid transparent' : '3px solid #5C3D24',
                  borderRadius: '50px', padding: '1.2rem 2rem',
                  transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
                  cursor: 'pointer',
                  boxShadow: hovered === i ? '0 12px 30px rgba(0, 102, 204, 0.15)' : '0 4px 15px rgba(0, 0, 0, 0.02)',
                  transform: hovered === i ? 'translateY(-6px)' : 'translateY(0)',
                }}>
                {/* Rice grain icon — animated on hover */}
                <div style={{
                  width: 50, height: 50, borderRadius: '50%', flexShrink: 0,
                  background: hovered === i ? 'rgba(255, 255, 255, 0.2)' : `radial-gradient(circle, ${v.color}20, ${v.color}05)`,
                  border: hovered === i ? '1px solid rgba(255, 255, 255, 0.4)' : `1px solid ${v.color}30`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.5rem',
                  transition: 'all 0.3s',
                  transform: hovered === i ? 'scale(1.1) rotate(15deg)' : 'scale(1) rotate(0deg)',
                }}>
                  <Wheat size={22} color={hovered === i ? '#FFFFFF' : v.color} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                    <h3 style={{
                      fontFamily: "'Raleway', sans-serif",
                      fontSize: '1.05rem',
                      color: hovered === i ? '#FFFFFF' : '#1C231A',
                      fontWeight: 800,
                      transition: 'color 0.3s'
                    }}>
                      {v.name}
                    </h3>
                    <span style={{
                      fontSize: '0.6rem', padding: '2px 8px', borderRadius: '20px',
                      background: hovered === i ? 'rgba(255, 255, 255, 0.15)' : '#FAF9F6',
                      border: hovered === i ? '1.2px solid #FFFFFF' : `1.2px solid ${v.color}`,
                      color: hovered === i ? '#FFFFFF' : v.color,
                      fontWeight: 800, letterSpacing: '0.05em',
                      textTransform: 'uppercase',
                      transition: 'all 0.3s',
                      animation: hovered === i ? 'gentlePulse 2s ease-in-out infinite' : 'none',
                    }}>
                      {v.badge}
                    </span>
                  </div>
                  <p style={{
                    fontSize: '0.85rem',
                    color: hovered === i ? '#EAECEE' : '#5C6757',
                    lineHeight: 1.5,
                    fontWeight: 500,
                    transition: 'color 0.3s'
                  }}>{v.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* See More / See Less Toggle Button */}
        <ScrollReveal direction="up" delay={0.2}>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}>
            {!showAll ? (
              <button
                onClick={() => setShowAll(true)}
                className="glow-pulse-btn"
                style={{
                  background: 'linear-gradient(135deg, #2C6B37, #0066CC)',
                  color: '#FFFFFF',
                  padding: '0.9rem 2.5rem',
                  borderRadius: '30px',
                  border: 'none',
                  fontFamily: "'Raleway', sans-serif",
                  fontWeight: 800,
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  boxShadow: '0 8px 25px rgba(0, 102, 204, 0.15)',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 102, 204, 0.25)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 102, 204, 0.15)';
                }}
              >
                See More Varieties
              </button>
            ) : (
              <button
                onClick={() => setShowAll(false)}
                style={{
                  background: 'transparent',
                  border: '2px solid #2C6B37',
                  color: '#2C6B37',
                  padding: '0.8rem 2.4rem',
                  borderRadius: '30px',
                  fontFamily: "'Raleway', sans-serif",
                  fontWeight: 800,
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = '#2C6B37';
                  e.currentTarget.style.color = '#FFFFFF';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = '#2C6B37';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                See Less
              </button>
            )}
          </div>
        </ScrollReveal>

        {/* VIP Brand spotlight — golden glow animation */}
        <ScrollReveal direction="scale" delay={0.15}>
          <div style={{
            marginTop: '5rem',
            background: '#FFFFFF',
            border: '3px solid #5C3D24',
            borderRadius: 24, padding: '3.5rem',
            display: 'flex', alignItems: 'center', gap: '3rem',
            flexWrap: 'wrap',
            boxShadow: '0 15px 45px rgba(0,0,0,0.03)',
            position: 'relative',
            overflow: 'hidden',
          }}>
            {/* Animated golden shimmer border overlay */}
            <div style={{
              position: 'absolute',
              inset: -2,
              borderRadius: 26,
              background: 'linear-gradient(135deg, transparent 30%, rgba(201, 148, 20, 0.15) 50%, transparent 70%)',
              backgroundSize: '200% 200%',
              animation: 'gradientShift 4s ease infinite',
              pointerEvents: 'none',
              zIndex: 0,
            }} />

            <div style={{ flex: 1, minWidth: 250, position: 'relative', zIndex: 1 }}>
              <div style={{
                display: 'inline-block',
                background: '#FAF9F6',
                border: '1px solid rgba(44, 107, 55, 0.15)',
                borderRadius: '20px',
                padding: '4px 14px',
                marginBottom: '1.2rem',
              }}>
                <div style={{ fontSize: '0.75rem', letterSpacing: '0.25em', color: '#2C6B37', fontWeight: 800 }}>FLAGSHIP BRAND</div>
              </div>
              <h3 className="gold-shimmer-text" style={{ fontFamily: "'Cinzel', serif", fontSize: '2.5rem', color: '#1C231A', marginBottom: '1rem', fontWeight: 800 }}>
                VIP Krishna Rice
              </h3>
              <p style={{ color: '#5C6757', lineHeight: 1.8, marginBottom: '1.8rem', fontWeight: 500 }}>
                Our premium label — widely recognized across India and international markets for 
                consistent culinary quality. Export-grade moisture-sealed packaging ensures perfect 
                freshness from our mill to your table.
              </p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                {['Export Grade', 'Moisture Sealed', 'Color Sorted', 'Multi-Stage Cleaned'].map(tag => (
                  <span key={tag} style={{
                    fontSize: '0.75rem', padding: '6px 14px', borderRadius: 20,
                    background: '#FAF9F6',
                    border: '1px solid rgba(44, 107, 55, 0.12)',
                    color: '#2C6B37',
                    display: 'inline-flex', alignItems: 'center', gap: '6px',
                    fontWeight: 700,
                    transition: 'all 0.3s',
                  }}>
                    <Check size={12} color="#2C6B37" /> {tag}
                  </span>
                ))}
              </div>
            </div>
            <div style={{ textAlign: 'center', maxWidth: '350px', flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', zIndex: 1 }}>
              <img 
                src={productImg} 
                alt="VIP Krishna Rice Package" 
                style={{
                  width: '100%',
                  maxHeight: '260px',
                  objectFit: 'cover',
                  borderRadius: '16px',
                  border: '1px solid rgba(44, 107, 55, 0.15)',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.06)',
                  transition: 'transform 0.5s ease',
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.03)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              />
              <div style={{
                display: 'inline-block',
                background: '#2C6B37',
                borderRadius: '20px',
                padding: '5px 16px',
                marginTop: '1.2rem',
                boxShadow: '0 4px 12px rgba(44, 107, 55, 0.2)',
              }}>
                <div style={{ fontSize: '0.8rem', color: '#FFFFFF', fontWeight: 800, letterSpacing: '0.05em' }}>
                  Since 1990
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
