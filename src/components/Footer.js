import React from 'react';
import { Wheat, ArrowRight } from 'lucide-react';
import logoImg from '../assets/logo/SKRM_logo.png';

/** Decorative wheat stalk wave separator above footer */
function FooterWaveDecoration() {
  return (
    <div style={{ width: '100%', overflow: 'hidden', lineHeight: 0, marginBottom: '-1px' }} aria-hidden="true">
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" style={{ width: '100%', height: '60px', display: 'block' }}>
        <defs>
          <linearGradient id="footer-wave-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2C6B37" stopOpacity="0.08" />
            <stop offset="50%" stopColor="#C99414" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#2C6B37" stopOpacity="0.08" />
          </linearGradient>
        </defs>
        <path d="M0,40 C360,80 720,0 1080,40 C1260,60 1350,30 1440,45 L1440,80 L0,80 Z" fill="url(#footer-wave-grad)" />
        <path d="M0,55 C240,35 480,70 720,50 C960,30 1200,65 1440,48 L1440,80 L0,80 Z" fill="#FFFFFF" opacity="0.5" />
        {/* Decorative wheat grain dots */}
        {[180, 480, 780, 1080].map((x, i) => (
          <g key={i} transform={`translate(${x}, ${40 + Math.sin(i) * 10})`}>
            <ellipse rx="3" ry="6" fill="#C99414" opacity="0.2" transform={`rotate(${20 + i * 12})`} />
          </g>
        ))}
      </svg>
    </div>
  );
}

export default function Footer() {
  return (
    <>
      <FooterWaveDecoration />
      <footer style={{
        background: '#FFFFFF',
        borderTop: '1px solid rgba(44, 107, 55, 0.12)',
        padding: '4rem 3rem 2rem',
        position: 'relative',
      }}>
        {/* Decorative wheat stalk SVG border at top */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: 'linear-gradient(90deg, transparent 5%, #C99414 20%, #2C6B37 50%, #C99414 80%, transparent 95%)',
          opacity: 0.3,
        }} />

        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="responsive-footer-grid">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: '1.5rem' }}>
                <img 
                  src={logoImg} 
                  alt="Sri Krishna Modern Rice Mill" 
                  style={{ 
                    height: '44px', width: '44px', borderRadius: '50%', objectFit: 'cover', 
                    border: '1.5px solid #2C6B37',
                    transition: 'transform 0.3s ease',
                  }} 
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1) rotate(5deg)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1) rotate(0deg)'}
                />
              </div>
              <p style={{ color: '#5C6757', fontSize: '0.85rem', lineHeight: 1.8, maxWidth: 320 }}>
                Three generations of milling excellence. From the paddy fields of Tamil Nadu 
                to tables worldwide — purity in every grain since 1960.
              </p>
            </div>

            <div>
              <h4 style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 800, color: '#1C231A', marginBottom: '1.2rem', fontSize: '0.95rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                Quick Links
              </h4>
              {['About', 'Products', 'Quality', 'Testimonials', 'Contact'].map(item => (
                <div key={item} style={{ marginBottom: 8 }}>
                  <span
                    onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                    style={{ 
                      color: '#5C6757', fontSize: '0.85rem', cursor: 'pointer', transition: 'all 0.2s', 
                      display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 500,
                      position: 'relative',
                    }}
                    onMouseEnter={e => {
                      e.target.style.color = '#2C6B37';
                      e.target.style.paddingLeft = '6px';
                    }}
                    onMouseLeave={e => {
                      e.target.style.color = '#5C6757';
                      e.target.style.paddingLeft = '0';
                    }}
                  >
                    <ArrowRight size={12} color="#2C6B37" /> {item}
                  </span>
                </div>
              ))}
            </div>

            <div>
              <h4 style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 800, color: '#1C231A', marginBottom: '1.2rem', fontSize: '0.95rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                Products
              </h4>
              {['White Ponni', 'Sona Masuri', 'Jeeraga Samba', 'Deluxe Ponni', 'BPT Rice', 'Swarna'].map(p => (
                <div key={p} style={{ 
                  color: '#5C6757', fontSize: '0.85rem', marginBottom: 8, display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 500,
                  transition: 'all 0.2s',
                  cursor: 'default',
                }}
                  onMouseEnter={e => e.currentTarget.style.color = '#2C6B37'}
                  onMouseLeave={e => e.currentTarget.style.color = '#5C6757'}
                >
                  <Wheat size={12} color="#2C6B37" className="grain-rotate" /> {p}
                </div>
              ))}
            </div>
          </div>

          <div style={{
            borderTop: '1px solid rgba(44, 107, 55, 0.08)',
            paddingTop: '1.5rem',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            flexWrap: 'wrap', gap: '1rem',
          }}>
            <div style={{ color: '#8C9787', fontSize: '0.8rem' }}>
              © 2024 Sri Krishna Modern Rice Mill. All rights reserved.
            </div>
            <div style={{ color: '#8C9787', fontSize: '0.8rem' }}>
              Andiyarpalayam, Puducherry • Since 1960
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
