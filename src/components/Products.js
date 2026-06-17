import React, { useState } from 'react';
import { Wheat, Trophy, Check } from 'lucide-react';
import productImg from '../assets/product/Screenshot 2026-06-01 104018.png';

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

  return (
    <section id="products" style={{
      background: 'transparent',
      padding: '8rem 3rem', minHeight: 'auto',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <div style={{ fontSize: '0.9rem', letterSpacing: '0.4em', color: '#000000', textTransform: 'uppercase', marginBottom: 12, fontWeight: 700 }}>
            Premium Selection
          </div>
          <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#FFF8E7', marginBottom: '1rem' }}>
            Our Rice Varieties
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
              20+ varieties processed with precision — from your daily dal rice to festival-grade aromatic grains.
            </p>
          </div>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '2rem', 
          padding: '1rem 0',
          justifyContent: 'center' 
        }}>
          {varieties.map((v, i) => (
            <div key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                display: 'flex', gap: '1.2rem', alignItems: 'center',
                background: hovered === i ? 'rgba(144, 200, 100, 0.9)' : 'rgba(144, 200, 100, 0.75)',
                border: '2px solid rgba(90, 150, 50, 0.9)',
                borderRadius: '50px', padding: '1.2rem 2rem',
                transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
                cursor: 'pointer',
                boxShadow: hovered === i ? '0 12px 30px rgba(0, 0, 0, 0.2)' : '0 6px 15px rgba(0, 0, 0, 0.1)',
                transform: hovered === i ? 'translateY(-5px)' : 'translateY(0)',
              }}>
              {/* Rice grain icon */}
              <div style={{
                width: 50, height: 50, borderRadius: '50%', flexShrink: 0,
                background: `radial-gradient(circle, ${v.color}30, ${v.color}10)`,
                border: `1px solid ${v.color}40`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.5rem',
                transition: 'all 0.4s',
                transform: hovered === i ? 'scale(1.1)' : 'scale(1)',
              }}>
                <Wheat size={24} color={v.color} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                  <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: '1.1rem', color: '#1A1A0E', fontWeight: 700 }}>
                    {v.name}
                  </h3>
                  <span style={{
                    fontSize: '0.65rem', padding: '4px 10px', borderRadius: '20px',
                    background: 'rgba(26, 26, 14, 0.75)',
                    border: `1.5px solid ${v.color}`,
                    color: v.color,
                    fontWeight: 800, letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
                    backdropFilter: 'blur(4px)',
                  }}>
                    {v.badge}
                  </span>
                </div>
                <p style={{ fontSize: '0.85rem', color: '#2D2D1F', lineHeight: 1.6, fontWeight: 700 }}>{v.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* VIP Brand spotlight */}
        <div style={{
          marginTop: '4rem',
          background: 'rgba(144, 200, 100, 0.75)',
          border: '2px solid rgba(90, 150, 50, 0.9)',
          borderRadius: 24, padding: '3rem',
          display: 'flex', alignItems: 'center', gap: '3rem',
          flexWrap: 'wrap',
        }}>
          <div style={{ flex: 1, minWidth: 250 }}>
            <div style={{
              display: 'inline-block',
              background: 'rgba(26, 26, 14, 0.65)',
              border: '1px solid rgba(212, 160, 23, 0.25)',
              borderRadius: '20px',
              padding: '4px 12px',
              marginBottom: '1rem',
              backdropFilter: 'blur(10px)',
            }}>
              <div style={{ fontSize: '0.75rem', letterSpacing: '0.3em', color: '#D4A017', fontWeight: 700 }}>FLAGSHIP BRAND</div>
            </div>
            <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: '2.5rem', color: '#1A1A0E', marginBottom: '1rem', fontWeight: 700 }}>
              VIP Krishna Rice
            </h3>
            <p style={{ color: '#2D2D1F', lineHeight: 1.8, marginBottom: '1.5rem', fontWeight: 700 }}>
              Our premium label — widely recognized across India and international markets for 
              consistent culinary quality. Export-grade moisture-sealed packaging ensures perfect 
              freshness from our mill to your table.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              {['Export Grade', 'Moisture Sealed', 'Color Sorted', 'Multi-Stage Cleaned'].map(tag => (
                <span key={tag} style={{
                  fontSize: '0.75rem', padding: '6px 14px', borderRadius: 20,
                  background: 'rgba(26, 26, 14, 0.65)',
                  border: '1px solid rgba(212,160,23,0.3)',
                  color: '#D4A017',
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  backdropFilter: 'blur(10px)',
                  fontWeight: 700,
                  boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                }}>
                  <Check size={12} color="#D4A017" /> {tag}
                </span>
              ))}
            </div>
          </div>
          <div style={{ textAlign: 'center', maxWidth: '350px', flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img 
              src={productImg} 
              alt="VIP Krishna Rice Package" 
              style={{
                width: '100%',
                maxHeight: '260px',
                objectFit: 'cover',
                borderRadius: '16px',
                border: '3px solid rgba(255, 248, 231, 0.8)',
                boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
              }}
            />
            <div style={{
              display: 'inline-block',
              background: 'rgba(26, 26, 14, 0.65)',
              border: '1px solid rgba(212, 160, 23, 0.25)',
              borderRadius: '20px',
              padding: '4px 16px',
              marginTop: '1rem',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
            }}>
              <div style={{ fontSize: '0.85rem', color: '#D4A017', fontWeight: 700 }}>
                Since 1990
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
